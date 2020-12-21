import React, {useState, useEffect} from "react"
import Axios from "axios"
// import {Link } from "react-router-dom"



export default  function Films(){
    
    const [films, setFilms] = useState([]);
  
    function getData() {
      Axios.get(`https://swapi.dev/api/films/`).then((response) => {
        console.log(response.data);
        setFilms(response.data.results);
      });
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <>
      
  
        <h3 className="sub-head">STARWAR FILMS</h3>
        <div className="main">
          <table className="content-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Release Date</th>
                <th>Director</th>
                <th>Producers</th>
                
              </tr>
            </thead>
            <tbody>
              {films.map((film) => {
                return (
                  <tr>
                    <td>{film.title}</td>
                    <td>{film.release_date}</td>
                    <td>{film.director}</td>
                    <td>{film.producer}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  
} 