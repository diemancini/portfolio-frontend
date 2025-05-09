import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <div>AboutMe</div>
      <Link to='/' className='hover:text-accentCyan'>
        Back to Home
      </Link>
    </>
  );
}

export default AboutMe;
