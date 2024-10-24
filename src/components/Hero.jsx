import SocialIcon from "./SocialIcon";

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
          className='group top-48 pr-0 bg-white dark:bg-darkBlue1 dark:text-white
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

          {/* <p>Social Medias</p> */}
          <div
            className=' bottom-0 left-0 right-0 p-2 px-4
              text-white duration-500 bg-black md:opacity-0
              md:group-hover:opacity-100 bg-opacity-40 md:absolute'
          >
            <div className='flex justify-between w-full'>
              <div className='font-normal'>
                <p className='text-sm'>Social Media</p>
              </div>
              <div className='flex items-center md:mr-10'>
                <SocialIcon
                  url='https://www.linkedin.com/in/diego-martin-mancini/'
                  img='images/linkedin-icon.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
