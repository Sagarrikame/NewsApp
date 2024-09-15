import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  const [articles, setarticles]=useState([])
  const [loading, setLoading]=useState(false)
  const [page, setPage]=useState(1)
  const [totalResults, setTotalResults]=useState(0)
    
  document.title=`${capitalizeFirstLetter(props.category)} - News Monkey`;

  const update =async()=>{
    props.setprogress(0)
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true)
    props.setprogress(30)
      let data = await fetch(url);
      let parsedData = await data.json();
      props.setprogress(70)
      setarticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      
    props.setprogress(100)
  }
  useEffect(()=>{
    update();
  },[])
  
//   handlePrevClick=async()=>{
//     setPage(page - 1)
//     update();    
//   }

//   handleNextClick=async()=>{
//     setPage(page + 1)
//     update();    
// }

const fetchMoreData = async() => {
  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
  setPage(page + 1)
      let data = await fetch(url);
      let parsedData = await data.json();
      setarticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
};
    
    return (
      <div>
        <h1 className="text-center" style={{marginTop:"90px"}}>NewsMonkey- top {capitalizeFirstLetter(props.category)} Headlines </h1>
          {loading && <Spinner/>}
          
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}
        >
      <div className="container">

          <div className="row my-4">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    describtion={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    url={element.url}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            {/* <div className="container d-flex justify-content-between">
              <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
              <button type="button" disabled={Math.ceil(this.state.totalResults/props.pagesize)<this.state.page + 1} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
            </div> */}
          </div>
          </div>
          </InfiniteScroll>

        </div>
      
    );
  
}

News.defaultProps={
  country: 'in',
  category: 'general',
  pagesize: 6
}
News.propTypes={
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number
}
export default News;
