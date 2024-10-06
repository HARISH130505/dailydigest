import './Subscribe.css'
function Subscribe(){
    return(
        <div className="sub">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div>
            <input placeholder="Name"></input>
            <input placeholder="E-mail"></input>
            <button className="btn">SUBSCRIBE</button>
            </div>
        </div>
    );
}
export default Subscribe;