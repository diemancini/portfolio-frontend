function Hero() {
  return (
    <section id='hero'>
      {/* Hero Container */}
      <div
        className='relative container flex flex-col max-w-6xl mx-auto my-32 px-6 
        text-gray-900 md:flex-row md:px-0'
      >
        {/* Image  */}
        <img className='' src='images/desktop/programming.jpg' alt='' />

        {/* Tet Container */}
        <div
          className='top-48 pr-0 bg-white dark:bg-darkBlue1 dark:text-white
          md:absolute md:right-0 md:py-20 md:pl-20 duration-200 md:block hover:scale-110
          hover:shadow-2xl hover:shadow-[#65e2d9]'
        >
          <h2
            className='max-w-lg mt-10 mb-6 font-sans text-4xl text-center
          dark:bg-darkBlue1 dark:text-white text-gray-900 uppercase
            md:text-5lx md:mt-0 md:text-left'
          >
            WHO I AM
          </h2>

          <p className='max-w-md text-center md:text-left md:mr-10'>
            Bilingual, analytical, innovative, and proficient IT Professional
            holding a Bachelor Degree in Computer Science at USP (LATAM Leading
            University). Possessing a passion for IT principles and project
            development. Highly experienced in delivering quality solutions in
            the areas of full-stack development and possess a deep understanding
            of Python and software processes. Currently seeking new
            opportunities to harness existing skills whilst continuing to
            develop professionally.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
