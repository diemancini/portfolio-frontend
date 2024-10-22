//import { QueryClient } from "@tanstack/react-query";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { useAuthIdToken } from "@react-query-firebase/auth";

//import { GoogleOAuthProvider } from "@react-oauth/google";
//import google from "googleapis";
//const { google } = require("googleapis");
//import serviceAccountKey from "../serviceAccountKey.json";
//import { useGoogleLogin } from "@react-oauth/google";
// const firebase_config = {
//   apiKey: "AIzaSyDrBUQK10WCBsO8-HrkK2Whl7G0BJ6D1RI",
//   authDomain: "golf-db-b764b.firebaseapp.com",
//   databaseURL: "https://golf-db-b764b-default-rtdb.firebaseio.com",
//   projectId: "golf-db-b764b",
//   storageBucket: "golf-db-b764b.appspot.com",
//   messagingSenderId: "388801011041",
//   appId: "1:388801011041:web:6250fc91cb934fbc823920",
// };
// const firebase = initializeApp(firebase_config);

//export const queryClient = new QueryClient();

// async function getAccessToken() {
//   //var {google} = require("googleapis");

//   // Load the service account key JSON file.
//   var serviceAccount = require(serviceAccountKey);

//   // Define the required scopes.
//   var scopes = [
//     "https://www.googleapis.com/auth/userinfo.email",
//     "https://www.googleapis.com/auth/firebase.database",
//   ];

//   // Authenticate a JWT client with the service account.
//   var jwtClient = new google.auth.JWT(
//     serviceAccount.client_email,
//     null,
//     serviceAccount.private_key,
//     scopes
//   );

//   // Use the JWT client to generate an access token.
//   const accessToken = await jwtClient.authorize(function (error, tokens) {
//     if (error) {
//       console.log("Error making request to generate access token:", error);
//     } else if (tokens.access_token === null) {
//       console.log(
//         "Provided service account does not have permission to generate access tokens"
//       );
//     } else {
//       var accessToken = tokens.access_token;
//       console.log("ACCESS_TOKEN: " + accessToken);
//       return accessToken;
//       // See the "Using the access token" section below for information
//       // on how to use the access token to send authenticated requests to
//       // the Realtime Database REST API.
//     }
//   });

//   return accessToken;
// }

// async function getAccessToken() {
//   //function oauthSignIn() {
//   // Google's OAuth 2.0 endpoint for requesting an access token
//   var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

//   console.log("CLIENT_ID: " + serviceAccountKey.client_id);
//   // Create <form> element to submit parameters to OAuth 2.0 endpoint.
//   var form = document.createElement("form");
//   form.setAttribute("method", "GET"); // Send as a GET request.
//   form.setAttribute("action", oauth2Endpoint);
//   //Parameters to pass to OAuth 2.0 endpoint.
//   var params = {
//     client_id: serviceAccountKey.client_id,
//     redirect_uri: "http://localhost:3000",
//     response_type: "token",
//     scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
//     include_granted_scopes: "true",
//     state: "pass-through value",
//   };

//   // Add form parameters as hidden input values.
//   for (var p in params) {
//     var input = document.createElement("input");
//     input.setAttribute("type", "hidden");
//     input.setAttribute("name", p);
//     input.setAttribute("value", params[p]);
//     form.appendChild(input);
//   }

//   // Add form to page and submit it to open the OAuth 2.0 endpoint.
//   document.body.appendChild(form);
//   //const response = form.submit();
//   //console.log(response);
// }

export function getAuthFirebase() {
  const firebase_config = {
    apiKey: "AIzaSyDrBUQK10WCBsO8-HrkK2Whl7G0BJ6D1RI",
    authDomain: "golf-db-b764b.firebaseapp.com",
    databaseURL: "https://golf-db-b764b-default-rtdb.firebaseio.com",
    projectId: "golf-db-b764b",
    storageBucket: "golf-db-b764b.appspot.com",
    messagingSenderId: "388801011041",
    appId: "1:388801011041:web:6250fc91cb934fbc823920",
  };
  const firebase = initializeApp(firebase_config);

  const auth = getAuth(firebase);

  return auth;
}

export async function fetchPgaLeaderboard({ signal, accessToken }) {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBLOs-FdaINFWpbYeeZ41qB6XIbBaUFkD0",
  //   authDomain: "test-bc518.firebaseapp.com",
  //   projectId: "test-bc518",
  //   storageBucket: "test-bc518.appspot.com",
  //   messagingSenderId: "539002163235",
  //   appId: "1:539002163235:web:65b6f7a763c11bc85ea196",
  // };
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(firebase);
  // const tokenResult = useAuthIdToken(["token"], auth);

  // if (tokenResult.isLoading) {
  //   console.log("is loading....");
  // }

  // if (tokenResult.data) {
  //   console.log(`ID Token: ${tokenResult.data}`);
  // }

  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const year = dateObj.getUTCFullYear();
  const tournamentName =
    "arnold_palmer_invitational_presented_by_mastercard_2024_golf_leaderboard_-_pga_tour"; // It has to be fixed!!
  //const accessToken = getAccessToken();
  //const accessToken = accessToken;
  //const url = `https://golf-db-b764b-default-rtdb.firebaseio.com/pga/tournaments/${year}/${month}/${tournamentName}.json?access_token=${accessToken}`;
  const url = `https://golf-db-b764b-default-rtdb.firebaseio.com/pga/tournaments/${year}/${month}/${tournamentName}.json?`;

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { fetchLeaderboard } = await response.json();

  return fetchLeaderboard;
}
