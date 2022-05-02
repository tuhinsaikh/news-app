// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();



 function appendData(){
     //console.log(data)
     let results = document.getElementById("detailed_news");
     let news = JSON.parse(localStorage.getItem("news"))
    results.innerHTML = null;
    
      
    let news_div = document.createElement("div");
    news_div.setAttribute("class","news");

    let image = document.createElement("img");
    image.src = news.urlToImage;

    let title = document.createElement("h3");
    title.innerText = news.title;

    let descr = document.createElement("p");
    descr.innerText = news.content;

    news_div.append(image,title,descr)
    results.append(news_div)

   };   
 appendData()