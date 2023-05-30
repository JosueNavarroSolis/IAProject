import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import { Inicio } from './Inicio/Inicio';





export function App() {
  return (
      <Router>
          <div className="App" >
            
              <Routes>

                <Route exact path="/" element={<Inicio />}/>

                </Routes>
                
            </div>
      </Router>
  );
}
