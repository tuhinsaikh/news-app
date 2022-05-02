let countryNews = async (country_code) =>{
    console.log(country_code)
    try{
        const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`
        let res = await fetch(url)
        let data = await res.json()
        //console.log(data)
        return data;
        // appendData(data,results)
    }
    catch(err){
        console.log(err)

    }
}

 export {countryNews}

 let searchData = async ()=>{
    let query = localStorage.getItem("search");
    console.log(query)
    try{
        const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
        let res = await fetch(url)
        let data = await res.json()
        //console.log(data)
        return data;
        // appendData(data,results)
    }
    catch(err){
        console.log(err)

    } 
}
searchData()
export {searchData};