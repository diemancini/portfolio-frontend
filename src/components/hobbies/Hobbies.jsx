import { Link } from "react-router-dom";

function Hobbies() {
  return (
    <>
      <div>Hobbies</div>
      <Link to='/' className='hover:text-accentCyan'>
        Back to Home
      </Link>
    </>
  );
}

export default Hobbies;
