import Axios from "axios";
import React,{useEffect, useState} from 'react'

function Planets() {
   
         const [planets, setPlanets] = useState([]);
  
  function getData() {
    Axios.get(`https://swapi.dev/api/planets/`).then((response) => {
      console.log(response.data);
      setPlanets(response.data.results);
    });
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
     
  
      <h3 className="sub-head">STARWAR's PLANETS</h3>
      <div className="main">
        <table className="content-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => {
              return (
                <tr>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );   
     
}

export default Planets
