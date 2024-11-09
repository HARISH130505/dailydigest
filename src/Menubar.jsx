import { Link } from 'react-router-dom';
import './Menubar.css'
function Menubar(){
    return(
        <div className="menu">
        <h1 className='cat'>CATEGORIES</h1>
        <ul className='mb'>
            <li> <Link to="/ent" className='l'>ENTERTAINMENT</Link></li>
            <li> <Link to="/health" className='l'>HEALTH & DISEASES</Link></li>
            <li> <Link to="/politics" className='l'>POLITICS</Link></li>
            <li> <Link to="/sports" className='l'>SPORTS</Link></li>
            <li>FOODS</li>
            <li>SCIENCE & TECHNOLOGY</li>
            <li>INDIAN</li>
            <li>FOREIGN</li>
        </ul>
        </div>
    );
}
export default Menubar;