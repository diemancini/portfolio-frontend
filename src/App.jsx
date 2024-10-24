import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Header */}
      <header className='container mx-auto mt-10 px-6 text-center h-40 md:h-28'>
        {/* Dinamic Logo */}
        <div
          className='bg-computer-light-mode dark:bg-computer-dark-mode bg-no-repeat 
          h-24 w-80 mx-auto md:mx-0 md:absolute top-10 left-10'
        ></div>
        {/* Menu  */}
        <Menu />
      </header>

      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
