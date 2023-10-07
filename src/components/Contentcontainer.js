import { React, useState, useEffect } from "react";
import "./style.css";
import Sideoptions from "./Sideoptions";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import Newslists from "./Newslists";
import PropTypes from 'prop-types';



function Contentcontainer(props) {

  const [headnews, setheadnews] = useState([]);
  const [pagelen, setpagelen] = useState(1);
  const [apiresult, setapiresult] = useState(0);
  const [loader, setloader] = useState(true);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 



  const fetchheadnews = async () => {
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pagelen}&pageSize=${props.pageSize}`;
    setloader(true);
    const response = await fetch(apiurl);
    props.setProgress(30);
    const data = await response.json();
    props.setProgress(60);
    setheadnews(data.articles);
    setapiresult(data.totalResults);
    setpagelen(pagelen + 1);
    setloader(false);
    console.log(data);
    props.setProgress(100);
  };

  useEffect(() => {
    fetchheadnews();
  }, []);


  const fetchMoreData = async () => {
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pagelen}&pageSize=${props.pageSize}`;
    setpagelen(pagelen + 1);
    const response = await fetch(apiurl);
    const data = await response.json();
    setheadnews(headnews.concat(data.articles));
    setapiresult(data.totalResults);
      console.log(data);
  };

  return (
    <div>
      <div className="container1">
        <div className="sidelists">
          <div className="sideflex">
            <Sideoptions />
          </div>
        </div>
        <div className="maincontainer">
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '40px' }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loader && <Spinner />}
                <InfiniteScroll
                    dataLength={headnews.length}
                    next={fetchMoreData}
                    hasMore={headnews.length !== apiresult}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {headnews.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newslists title={element.title ? element.title : "Unknown"} description={element.description ? element.description : "No description is provided"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
 
Contentcontainer.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

Contentcontainer.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default Contentcontainer;