import ButtonDarkLight from "./ButtonDarkLight";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10'>
      <Link to='../about-me' className='hover:text-accentCyan'>
        About Me
      </Link>
      <Link to='../projects' className='hover:text-accentCyan'>
        Projects
      </Link>
      <Link to='../hobbies' className='hover:text-accentCyan'>
        Hobbies
      </Link>
      <ButtonDarkLight />
    </div>
  );
}

export default Menu;
