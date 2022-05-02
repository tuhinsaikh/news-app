// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

let country = document.getElementById("sidebar").children;
function searchCountry(){
   // console.log(this.id)
    let country_code = "in";
    country_code = this.id;
    let x = countryNews(country_code)
    x.then((res)=>{
        appendData(res)
        //console.log(res)
    })
}
for(let el of country){
        el.addEventListener('click',searchCountry)
   }

   defData()
function defData(){
    let country_code = "in";
    let x = countryNews(country_code)
    x.then((res)=>{
        appendData(res)
        //console.log(res)
    })
}
import {countryNews} from "./fetch.js"

let results = document.getElementById("results");
 function appendData(data){
     //console.log(data)
    
    results.innerHTML = null;
   data.articles.forEach((el) => {
       //console.log(el)
      
    let news_div = document.createElement("div");
    news_div.setAttribute("class","news");
    news_div.addEventListener("click",function(){
        newsstor(el)
    })

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let title = document.createElement("h3");
    title.innerText = el.title;

    let descr = document.createElement("p");
    descr.innerText = el.description;

    news_div.append(image,title,descr)
    results.append(news_div)

   });   
 }
 function newsstor(el){
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href = "news.html"
}

let search = (e)=>{
    if(e.key==="Enter"){
        let search = document.getElementById("search_input").value;
        console.log(search)
        localStorage.setItem("search",search)
        window.location.href = "search.html"
    }
}
document.getElementById("search_input").addEventListener("keydown",search);
 
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
