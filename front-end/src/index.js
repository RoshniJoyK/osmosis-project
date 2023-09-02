
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.js';
import Assets from './Assets.js';
import Footer from './Footer.js';

import Work from './Work';
import Section2 from './Section2';
import Section3 from './Section3';
import workData from './workData';
import Section2data from './Section2data';
import Section3data from './Section3data.js';


// import React, { Component } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
const works= workData.map(function(work){
  return (
    <>
    <Work
    {...work}
    />
    </>
  )
})

const section2s= Section2data.map(function(section2){
  return (
    <>
    <Section2
    {...section2}
    />
    </>
  )
})

const section3s= Section3data.map(function(section3){
  return (
    <>
    <Section3
    {...section3}
    />
    </>
  )
})
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route path="loginpage" element={<Login />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(
//   <BrowserRouter>
//       <App />
//   </BrowserRouter>, 
//   document.getElementById('root')
// )

root.render(
  <>
  
    <Header/>

    <Assets/>
        <>
        <br/>
       <div class="mainhead"><h5>Growing In The Profession</h5></div>
      
       </>
    
    
            <div class="cardcol">
              {works}
    </div>

    <>
    <br/>
       <div class="mainhead"><h5>Managing The Profession</h5></div>
       
       </>
       
       <div class="cardcol">
              {section2s}
    </div>

    <>
    <br/>
       <div class="mainhead"><h5>Soft Skills For Project Management</h5></div>
       
       </>

       <div class="cardcol">
              {section3s}
    </div>

    <Footer/>

    </>
    
);


