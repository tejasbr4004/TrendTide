import React from "react";
import './style.css';

export default function Newslists(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3 h-100 cardshadow">
            <div className="card h-100">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }> 
                    <span className="badge rounded-pill" style={{backgroundColor:"purple"}}> {source} </span>
                </div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark" style={{position:"absolute",bottom:"10px",backgroundColor:"purple"}}>Read More</a>
                </div>
            </div>
        </div>
    )
}