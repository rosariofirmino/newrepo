import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import history from './history';
import {LineSeries, PointSeries} from "reaviz";
import LineChart from "reaviz";

function Vis() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(()=>{
    fetch("http://localhost:3001/api")
      .then((result)=> result.json())
      .then((json) => setData(json));
  }, []);
  return (
<div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light"> Resulting Table: </h1>
            
              {data.tuples?.map((postDetail,index)=>(
                <div key={index}>
                <p>{postDetail.date}:{postDetail.measurement}</p>
                </div>
              ))}


          </div>
          <Link to="/"><Button>
              home
            </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Vis;
