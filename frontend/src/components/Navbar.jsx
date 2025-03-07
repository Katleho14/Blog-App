import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
<h1 className="text-xl font-extrabold"><Link to ="/">Squirrel Blog</Link></h1>
<div className="flex justify-center items-center space-x-0">
<p><BsSearch/></p>
<input type="text" placeholder="Search a post" className="border-none focus:outline-none px-3"/>
</div>
<div className="flex items-center justify-center space-x-2 md:space-x-4">
<h3><Link to ="/">Login</Link></h3>
<h3><Link to ="/">Register</Link></h3>
</div>

    </div>
  )
}

export default Navbar