import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";

export default function Index() {
  let [data, setData] = useState('');
  let [ratingValue, setRatingValues] = useState('');
  let [img,setImg ] = useState('');
  useEffect(() => {
    fetch(localStorage.getItem('url'))
      .then((res) => res.json())
      .then((data) => {
        let {medium} = data.image;
        setData(data);
        // console.log("this values",data.rating.average);
        setRatingValues(data.rating.average);
        setImg(medium)
      })
      .catch((err) => console.log(err));
    }, []);

    const styles = {
      card_body: {
        borderRadius: "0 0 0 2rem"
      },
      body_part: {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        borderRadius: "0 2rem 0 2rem"
      },
      head1: {
        fontSize: "44px",
        fontWeight: "300",
        lineHeight: "44px"
      },
      head: {
        fontWeight: "300"
      },
      Img: {
        width: "100%",
        objectFit: "fit",
        borderRadius: "0 2rem 0 2rem",
        
      },
      Btn: { 
        marginTop: "1rem",
        width : "10rem",
        borderRadius: "1.5rem",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.15)"
      },
      Text_body: {
        paddingLeft: "1rem"
      },
      card: {
        width: "100%",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.15)"

      }
    }
  return (
    <div>
      <div className="mainCard container">
        <h1 className='container mt-5 mb-3' style={styles.head1}>{data.name}</h1>
        <div className='row container-fluid'>
        <div className="card border-0 rounded-lg mb-3 col-md-12 col-lg-8" style={{maxWidth: '54rem'}}>
          <div className="row g-0">
            <div className="col-md-4 col-xl-3">
              <img style={styles.Img} src={img} className="" alt="..."/>
            </div>
            <div className="col-md-8 col-xl-9">
              <div className="card-body" style={styles.Text_body}>
              <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
                <p className="card-text"><small className="text-muted"> ended :- {data.ended}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
        <div className="card rounded bg-light border-0" style={styles.card}>
          <div className="card-body">
            <h2 className="card-title" style={styles.head}>Show Info</h2>
            <p className=""><strong className="fw-bold">Network:</strong> {data.network?data.network.country.timezone:""}</p>
            <p className=""><strong>Status:</strong> {data.status}</p>
            <p className=""><strong>Show Type:</strong> {data.type}</p>
            <p className=""><strong>Genres:</strong> {data.genres?data.genres.join(' | '):""}</p>
            <p><strong>Official Site: </strong><a href={data.officialSite} className="" target="_blank"> {data.officialSite}</a> </p>
             <StarRating rating={ratingValue} maxRating={9} />
          </div>
        </div>
        </div>
        </div>
        </div>
        <style>
          {`
              

             .mainCard{
              font-family: "Open Sans", serif;
              p{
                font-size:15px;
                line-height:24px;
                font-weight: 400;
                color: rgb(10, 10, 10);
                font-family: "Roboto", serif;
              }
             }
          `}
        </style>
    </div>
  )
}
