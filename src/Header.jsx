import './Header.css'
import React,{useState,useEffect} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuIcon from '@mui/icons-material/Menu';
import Menubar from './Menubar';
import { Link } from 'react-router-dom';
function Header(){
   const [date,setDate]=useState(new Date());
   const[time,setTime]=useState(new Date());
   const[menuflg,setmenuFlg]=useState(true);
   useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      setTime(new Date());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);
   const formatedDate=date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
   const formatedTime=time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
   function handleMenuClick(){
       setmenuFlg(!menuflg);
   }
   return(
    <div className='h'>
        <nav>
            <div className="dmy">
                   <p className='dt'>{formatedDate} | </p> 
                   <p className='dt'> {formatedTime}</p>
            </div>
            <div>
                <h1 className='title'>DAILY DIGEST</h1>
            </div>
            <ul>
                <li>
                    <Link to="/">
                    <button className='ho'><HomeRoundedIcon/></button>  
                    </Link>
                </li>
                <li> <div className='si'><AccountCircleIcon className='acc'/>Sign In</div></li>
                <li>
                    {menuflg ? <button className='m' onClick={handleMenuClick}><MenuIcon/></button> :<> <button className='m' onClick={handleMenuClick}><MenuIcon/></button> <Menubar/></>} 
                </li>
            </ul>
            
        </nav>
    </div>
   );
}
export default Header;