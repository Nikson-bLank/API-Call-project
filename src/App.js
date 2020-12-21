import React from "react";
import { Route, Switch } from "react-router-dom";
import Films from "./Component/Films";
import "./App.css"
import Navbar from "./Component/Navbar";
import People from "./Component/People";
import Planets from "./Component/Planets";




export default function App() {
 
  return (<>
 <Navbar/>
 <Switch>
   <Route exact path="/films" component={Films}  />
   <Route exact path="/people" component={People}  />
   <Route exact path="/planets" component={Planets}  />
 </Switch>
  
  </>
    )
    
}
