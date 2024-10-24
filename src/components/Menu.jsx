import ButtonDarkLight from "./ButtonDarkLight";

function Menu() {
  return (
    <div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10'>
      <a href='#about-me' className='hover:text-accentCyan'>
        About Me
      </a>
      <a href='#projects' className='hover:text-accentCyan'>
        Projects
      </a>
      <a href='#hobbies' className='hover:text-accentCyan'>
        Hobbies
      </a>
      <ButtonDarkLight />
    </div>
  );
}

export default Menu;
