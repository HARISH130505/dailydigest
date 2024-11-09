import React,{useState,useEffect} from "react";
import './Categories.css'
function Politics(){
      const [articles,setArticles]=useState([]);

      useEffect(()=>{
        const api = async () => {
            try{
                const response =await fetch("https://newsapi.org/v2/everything?q=politics&apiKey=16f3f5c96bd6433e874d91d869b810b9");
    
                if(!response.ok){
                    throw new Error("Could'nt fetch the resource");
                }
                const data = await response.json();
                setArticles(data.articles || []);
                console.log(articles);
            }
            catch(error){
              
                console.error(error);
            }
        }
        api();
      },[]);
      return(
        <div className="news">
          {
            articles.map((article)=>(
              <div className="box" key={article.url} >
                  <div className="cont">
                  <img className="art" src={article.urlToImage}></img>
                  <hr></hr>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
              </div>
            ))
          }
        </div>
      );    
}
export default Politics;