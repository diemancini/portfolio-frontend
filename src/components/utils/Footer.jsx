import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <footer className='bg-dark-blue-2 text-white'>
      <div className='container mx-auto px-5 pt-12 pb-10'>
        {/* Flex Container For All Items */}
        <div className='flex flex-col justify-between space-y-24 md:flex-row md:space-y-0'>
          {/* Menus */}
          <div className='flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row'>
            <a href='#'>About Me</a>
            <a href='#'>Projects</a>
            <a href='#'>Hobbies</a>
          </div>

          {/* Social */}
          <div className='flex pb-10 space-x-3'>
            <SocialIcon
              url='https://www.linkedin.com/in/diego-martin-mancini/'
              img='/assets/images/linkedin-icon.svg'
            />
            <SocialIcon
              url='https://www.linkedin.com/in/diego-martin-mancini/'
              img='/assets/images/linkedin-icon.svg'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
