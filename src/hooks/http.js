import { useEffect, useState, useCallback } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { QueryClient } from "react-query";

//delete after
export const queryClient = new QueryClient();

function getFormatedJson(resData) {
  let results = resData[0].document.fields.leaderboard.mapValue.fields;

  results.data = JSON.parse(results.data.stringValue);
  results.columns = results.columns.arrayValue.values;
  results.columns = results.columns.map((column) => {
    return column.stringValue;
  });
  results.index = results.index.arrayValue.values;
  results.index = results.index.map((index) => {
    return index.integerValue;
  });

  return results;
}

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request."
    );
  }
  const results = getFormatedJson(resData);

  return results;
}

export function getUrl() {
  const url =
    "https://firestore.googleapis.com/v1/projects/golf-db-b764b/databases/(default)/documents:runQuery";
  return url;
}

export function getFirebaseApp() {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyDrBUQK10WCBsO8-HrkK2Whl7G0BJ6D1RI",
    authDomain: "golf-db-b764b.firebaseapp.com",
    databaseURL: "https://golf-db-b764b-default-rtdb.firebaseio.com",
    projectId: "golf-db-b764b",
    storageBucket: "golf-db-b764b.appspot.com",
    messagingSenderId: "388801011041",
    appId: "1:388801011041:web:6250fc91cb934fbc823920",
  });
  //const auth = getDatabase(firebase);

  return firebaseApp;
}

export function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(body, requestOptions) {
      setIsLoading(true);
      try {
        //const resData = await sendHttpRequest(url, requestOptions);
        const resData = await sendHttpRequest(url, requestOptions);
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      getFirebaseApp();
      const auth = getAuth();
      const email = "diemancini@gmail.com";
      const password = "character42";

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user.getIdToken().then((accessToken) => {
            const requestOptions = {
              method: "post",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify({
                structuredQuery: {
                  where: {
                    fieldFilter: {
                      field: {
                        fieldPath: "tournament_date",
                        //"pga_tour.tournaments.`[2024.3.tournament_1.data.date]`",
                      },
                      op: "EQUAL",
                      value: {
                        stringValue: "Apr 11 - 14, 2024",
                      },
                    },
                  },
                  from: [{ collectionId: "golf" }],
                },
              }),
            };
            sendRequest(null, requestOptions);
          });
        })
        .catch((error) => {
          console.log(`${error.code}: ${error.message}`);
        });
    }
  }, [url, sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    //sendRequest,
    clearData,
  };
}
