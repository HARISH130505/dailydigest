
import './Menubar.css'
function Menubar(){
    return(
        <div className="menu">
        <h1 className='cat'>CATEGORIES</h1>
        <ul className='mb'>
            <li>ENTERTAINMENT</li>
            <li>POLITICS</li>
            <li>FOODS</li>
            <li>SPORTS</li>
            <li>SCIENCE & TECHNOLOGY</li>
            <li>HEALTH & DISEASES</li>
            <li>INDIAN</li>
            <li>FOREIGN</li>
        </ul>
        </div>
    );
}
export default Menubar;