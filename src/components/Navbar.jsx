import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import axios from 'axios';
import { base_url } from '../utils/constants';

const Navbar = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async() => {
    try{
    const res = await axios.post(`${base_url}/logout`, {}, {
      withCredentials: true
    })
    dispatch(removeUser());
    navigate('/login')
  }
  catch(err){
    console.log(`Error: ${err.message}`);
    
  }
  }

  return (
    <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link to={ user ? '/' : 'login'} className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  <div className="flex-none gap-2">
   
    {user && (
      <>
      <div>
        <p>Welcome, {user.firstName}</p>
      </div>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn mx-5 btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            className=''
            alt="user profile pic"
            src={user.photo} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to='/profile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link to='/connections' className="justify-between">
            Connections
          </Link>
        </li>
        <li>
          <Link to='/requests' className="justify-between">
            Request
          </Link>
        </li>
        <li>
          <Link to='/premium' className="justify-between">
            Premium
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout}><Link>Logout</Link></li>
      </ul>
    </div>
    </>
    )}
  </div>
</div>
  )
}

export default Navbar