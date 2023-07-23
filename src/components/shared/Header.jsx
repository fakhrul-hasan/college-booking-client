import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery('');
  };
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost normal-case text-2xl"><span className="text-blue-900">Mind</span> <span className="text-teal-400">Escape</span></a>
    <NavLink to='/' className='mr-4'>Home</NavLink>
    <NavLink to='/' className='mr-4'>Colleges</NavLink>
    <NavLink to='/' className='mr-4'>Admission</NavLink>
    <NavLink to='/' className=''>My College</NavLink>
  </div>
  <div className="flex-none gap-2">
    <div className="flex items-center">
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search college" className="input input-bordered w-24 md:w-auto" /><button className="bg-teal-400 hover:bg-teal-600 h-12 px-4 text-white cursor-pointer" onClick={handleSearch}>Search</button>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Header;