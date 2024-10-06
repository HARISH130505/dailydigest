import './Home.css'
import DD from './assets/dd.png'
import { Link } from 'react-router-dom';
function Home(){
    return(
        <div className='homeee'>
            <div className='surr'>
            <div>
            <h1 className="qoutes">In a hurry? <br></br> Get the gist of the news here....</h1>
            <Link to="/news">
            <button className='exp'>Explore</button>
            </Link>
            </div>
            <div>
                <img className='dd' src={DD}></img>
            </div>
            </div>
            <div className='about'>
            <div ><h1 className='q'>Busy life? No problem. <br></br> Stay updated with our headlines.</h1>
            <p>Join us at Daily Digest, your one-stop destination for fresh, local news straight from the epicenter of the incident.</p>
            <h1 className='q'>Why choose Us?</h1>
            <div><p><h3 className='points'>➡️ Accurate and reliable:</h3> Our team of experienced journalists delivers news you can trust.</p>
                <p><h3 className='points'>➡️ Engaging content:</h3> We provide in-depth analysis, thought-provoking opinions, and captivating stories.</p>
                <p><h3 className='points'>➡️ Local focus:</h3> We're dedicated to covering the latest news and events in Chennai and Tamil Nadu.</p></div>
            </div>
            </div>
        </div>
    );
}
export default Home;