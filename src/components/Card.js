import React, { useEffect, useState } from "react";

export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data.map((element) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="Body">
                      <img
                        style={{
                          height: "20rem",
                          objectFit: "fit",
                          borderRadius: "1.5rem 1.5rem 0 0",
                        }}
                        src={element.show.image.medium}
                        className="card-img-top"
                        alt="..."
                      />
                      <div
                        className="card-body bg-light text-light px-3 mb-3"
                        
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="card-title text-dark mt-2">
                            {element.show.name}
                          </h6>
                          <text className="card-text text-secondary">
                            Language:-{element.show.language}
                          </text>
                        </div>
                        <div className="card-text text-secondary">
                          link:-<a className="">{element.show.url}</a>
                        </div>
                        <div className="text-center">
                          <a
                            style={{ marginTop: "1rem" }}
                            className="btn btn-info text-light"
                            href="card-1"
                            onClick={(e) =>
                              localStorage.setItem(
                                "url",
                                element.show._links.self.href
                              )
                            }
                          >
                            Go somewhere
                          </a>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {`  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:wght@700&    
            display=swap');
              .card-body{
                font-family: 'Roboto', sans-serif;
                border-radius: 0 0 1.5rem 1.5rem;
              }
              .Body{
                border-radius: 1.5rem;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
              }
              .btn{
                width : 10rem;
                border-radius: 1.5rem;
              }
        `}
      </style>
    </>
  );
}
