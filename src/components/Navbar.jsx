
import {Link} from "react-router-dom";


const Navbar = () => {
  

  return (
    <nav
     
      className="fixed top-0 left-0 w-full bg-pink-600 text-white p-4 shadow-lg z-40"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div>
          <img className="w-12 " src="/Ks.png" alt="" />
        </div>
        <div className="text-xl font-bold">KinkSukh</div>
        
        <div>
          <ul className="flex space-x-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
