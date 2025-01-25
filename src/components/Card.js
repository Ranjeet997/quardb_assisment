import React, { useEffect, useState } from "react";

export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((result) => {
        // result.forEach(element => {
        //   if(element.show.image != null){
        //     console.log('this is result values ',element.show.image);
        //   }
          
        // });
        setData(result);

      })
      .catch((err) => console.log(err));
    }, []);

    // console.log('this is data values ',data.show.image);

    const styles = {
      card_body: {
        borderRadius: "0 0 0 2rem"
      },
      body_part: {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        borderRadius: "0 2rem 0 2rem"
      },
      Img: {
        height: "25rem",
        objectFit: "fit",
        borderRadius: "0 2rem 0 0",
      },
      Btn: { 
        marginTop: "1rem",
        width : "10rem",
        borderRadius: "1.5rem",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }
    }


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data.map((element) => {
            return (
              (element.show.image != null) ?
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3" style={{borderRadius: "1.5rem"}}>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="Body" style={styles.body_part}>
                      <a href="/card_2" onClick={(e) =>
                              localStorage.setItem(
                                "url",
                                element.show._links.self.href
                              )
                            }>
                      <img
                        style={styles.Img}
                        src={element.show.image.medium}
                        className="card-img-top"
                        alt="..."
                      /></a>
                      <div
                        className="text-card card-body bg-light text-light px-3 mb-3"
                        style={styles.card_body}
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
                          link:-<a className="" href={element.show.url} target="_blank">{element.show.url}</a>
                        </div>
                        <div className="text-center">
                          <a
                            style={styles.Btn}
                            className="btn btn-info text-light"
                            href="/card_2"
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
              : <div className="d-none"></div>
            );}
          )}
        </div>
      </div>
    </>
  );
}
