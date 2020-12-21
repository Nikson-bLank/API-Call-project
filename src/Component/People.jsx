import React, { useState, useEffect} from 'react'
import Axios from "axios";

function People() {
 
             const [characs, setCharac] = useState([]);
  
  function getData() {
    Axios.get("https://swapi.dev/api/people/").then((response) => {
      console.log(response.data);
      setCharac(response.data.results);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     

      <h3 className="sub-head">STARWAR's CHARACTERS</h3>
      <div className="main">
        <table className="content-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
            </tr>
          </thead>
          <tbody>
            {characs.map((charac) => {
              return (
                <tr>
                  <td>{charac.name}</td>
                  <td>{charac.height}</td>
                  <td>{charac.mass}</td>
                  <td>{charac.hair_color}</td>
                  <td>{charac.skin_color}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
    
}

export default People
