import React, { useEffect, useState } from "react";

export default function Index() {
  let [data, setData] = useState('');
  let [img,setImg ] = useState('');
  useEffect(() => {
    fetch(localStorage.getItem('url'))
      .then((res) => res.json())
      .then((data) => {
        let {medium} = data.image;
        setData(data);
        setImg(medium)
      })
      .catch((err) => console.log(err));
    }, []);
    console.log(data)
  return (
    <div>
      <div className="mainCard">
        <h1 className='container mt-5 mb-3' style={{fontFamily: "Poppins"}}>{data.name}</h1>
        <div className='container d-flex justify-content-between'>
        <div className="card border-0 mb-3" style={{maxWidth: '54rem'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
                <p className="card-text"><small className="text-muted"> ended:- {data.ended}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h2 className="card-title">Show Info</h2>
             <p className="card-text"><strong>Network: {data.network?data.network.country.timezone:""}</strong></p>
            <p className="card-text"><strong>Status: {data.status}</strong></p>
            <p className="card-text"><strong>Show Type: {data.type}</strong></p>
            <p className="card-text"><strong>Genres: {data.genres?data.genres.join(','):""}</strong></p>
            Official site:<a className="card-text"><strong> {data.url}</strong></a> 
          </div>
        </div>
        </div>
        </div>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@600&        display=swap');
             .mainCard{
              font-family: 'Roboto', sans-serif;
             }
          `}
        </style>
    </div>
  )
}
