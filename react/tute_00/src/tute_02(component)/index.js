// import React from "react";
// import ReactDOM from "react-dom";
// import img1 from './Img'

// function Card(props){
//     return (<div classNameName="cards">
//          <div className="card">
//          <img 
//             src={props.crd_img}
//             alt="myimg" 
//             className="card__img" />
//         <div className="card__info">
//             <span className="card__category"> {props.crd_title} </span>
//             <h3 className="card__title"> {props.crd_nam} </h3>
//             <a href={props.crd_link} target="_blank" rel="noreferrer">
//                 <button> Watch Now</button>
//             </a>
//         </div>
//     </div>
// </div>)
// }

// ReactDOM.render(<>
//     <Card 
//         crd_img = {img1}
//         crd_title = "A Netflix original series"
//         crd_nam = "Dark"
//         crd_link = "https:/wwwnetflixcomintitle809906668source=35"
//         />
//     <Card 
//         crd_img = {img1}
//         crd_title = "A Netflix original series"
//         crd_nam = "Dark"
//         crd_link = "https:/wwwnetflixcomintitle809906668source=35"
//         />
//     <Card 
//         crd_img = {img1}
//         crd_title = "A Netflix original series"
//         crd_nam = "Dark"
//         crd_link = "https:/wwwnetflixcomintitle809906668source=35"
//         />

// </>,document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";


import App from './App'

ReactDOM.render(<App />,document.getElementById('root'),()=>console.log("hagura app"));