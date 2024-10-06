import DD from './assets/dd.png'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
function Footer(){
    return(
        <div>
        <div className='foot'>
            <div className='ss'>
            <img className='digest' src={DD}></img>
            <div>
            <InstagramIcon className='sm'/>
            <FacebookIcon className='sm'/>
            <XIcon className='sm'/>
            </div>
            <br></br>
            
            </div>
            <div className='more'>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
                <h4>Privacy Policy</h4>
                <h4>Subcription</h4>
                <h4>Terms of Use</h4>
                <h4>Disclaimer</h4>
                <h4>Newsletters</h4>
                <h4>Code of Ethics</h4>
                
            </div>
        </div>
        <div className='cr'>
            <p>&copy;{new Date().getFullYear()} Daily Digest</p>
            <p>All Rights Are Reserved</p>
        </div>
        </div>
       );
}
export default Footer;