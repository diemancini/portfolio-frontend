import Hero from "../utils/Hero";
import Menu from "../utils/Menu";
import Features from "../utils/Features";
import Footer from "../utils/Footer";

function Home() {
  return (
    <>
      {/* Header */}
      <header className='container mx-auto mt-10 px-6 text-center h-40 md:h-28'>
        {/* Dinamic Logo */}
        <div
          className='bg-computer-light-mode-svg dark:bg-computer-dark-mode-svg bg-no-repeat
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

export default Home;
