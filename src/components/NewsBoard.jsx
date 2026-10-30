import { useEffect, useState } from "react"
import NewsItem from './NewsItem';

function NewsBoard({category}) {
  const[articles, setArticles] = useState([]);

useEffect(()=>{

  let API_KEY=import.meta.env.VITE_API_KEY;
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
 const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  }

  fetch(url, API_OPTIONS)
  .then(response => response.json())
  .then(data=>setArticles(data.articles));



},[category]);
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
   
   {
    articles.map((news, index)=>{
return <NewsItem key={index} news={news}/>
    })
   }
   
   
    </div>
  )
}

export default NewsBoard
