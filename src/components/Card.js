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
      <div className="container mt-5 ">
        <div className="row">
          {data.map((element) => {
            return (
              <div className="col-md-4">
                <div className="rounded" style={{ width: "25rem" }}>
                  <div className="card-body">
                    <img
                      style={{
                        height: "30rem",
                        objectFit: "fit",
                        borderRadius: "1.5rem 1.5rem 0 0",
                      }}
                      src={element.show.image.medium}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body bg-dark text-light px-4 mb-5" style={{ height: "14rem" }}>
                      <div className=" d-flex align-items-center justify-content-between">
                        <h5 className="card-title">{element.show.name}</h5>
                        <p className="card-text">
                          Language:-{element.show.language}
                        </p>
                      </div>
                      <div className="">
                        link:-<a className="card-text">{element.show.url}</a>
                      </div>
                      <div className="text-center">
                        <a
                          style={{ marginTop: "1rem" }}
                          className="btn btn-primary"
                          href="card-1"
                          onClick={(e)=>localStorage.setItem("url",element.show._links.self.href)}
                        >
                          Go somewhere
                        </a>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {` .card-body{
                border-radius: 0 0 1.5rem 1.5rem;
              }
              `}
      </style>
    </>
  );
}
