import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import  Navbar from './components/Navbar';
import SignUp from './components/SignUp';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    {/* <SignUp /> */}
    <Routes>
      <Route exact path="/SignUp" element={<SignUp />}/>

      
    </Routes>
    </>
  );
}

export default App;
