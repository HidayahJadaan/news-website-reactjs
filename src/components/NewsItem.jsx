
function NewsItem({ news }) {
  return (
    <section className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
      <img src={news.urlToImage} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{news.title.slice(0,50)}</h4>
        <p className="card-text">{news.description? news.description.slice(0,90):
          " no description"}</p>
        <a href={news.url} className="btn-solid theme-primary">Read More </a>
      </div>
    </section>
  )
}

export default NewsItem
