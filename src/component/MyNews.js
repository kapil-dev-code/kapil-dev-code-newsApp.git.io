import React from "react";
import MyNewsCards from "./MyNewsCards";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";//for infinite scroll

export default function MyNews(props) {
  const [state, setState] = useState({
    articels: [],

    loading: false,
  });
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const myfun = async () => {
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&&category=${props.category}&pageSize=${props.pageSize}&apiKey=c27c928906d9451dbfe9383539527611`;
    let response = await fetch(url);
    let parsedJsonData = await response.json();
    //console.log(parsedJsonData.articles);
    setState({
      articels: parsedJsonData.articles,

      loading: false,
    });
    setTotalResults(parsedJsonData.totalResults);
  };
  async function fetchMoreData(){
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&&category=${props.category}&pageSize=${props.pageSize}&apiKey=c27c928906d9451dbfe9383539527611`;
    let response = await fetch(url);
    let parsedJsonData = await response.json();
    //console.log(parsedJsonData.articles);
    setState({
      articels:state.articels.concat(parsedJsonData.articles),
      

      loading: false,
    });
    setTotalResults(parsedJsonData.totalResults);
    
  };

  useEffect(() => {
    myfun();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //{for useEffect dependency warnings}

  return (
    <>
      <h1 className="text-center text-secondary" style={{ margin: "80px 0px 40px 0" }}>
        Today Headlines
      </h1>
    {/* for infinte scroll search react infinite scrooll */}
      <InfiniteScroll
        dataLength={state.articels.length}
        next={fetchMoreData}
        hasMore={state.articels.length !== totalResults}
        loader={<h4 className="text-center my-2">Loading...</h4>}
      >
        <div className="container my-3">
          <div className="row">
            {state.articels.map((num) => {
              return (
                <div className="col-md-4 col-lg-3 col-sm-6" key={num.url}>
                  <MyNewsCards
                    title={num.title ? num.title.slice(0, 42) : ""}
                    description={
                      num.description ? num.description.slice(0, 78) : ""
                    }
                    url={num.url}
                    urlToImage={
                      num.urlToImage
                        ? num.urlToImage
                        : "https://media.istockphoto.com/photos/searching-missing-piece-picture-id1095522328"
                    }
                    dateAndTime={num.publishedAt}
                    author={num.author}
                    source={num.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
