import React from 'react'


// const num = {    *{
//       margin: 0%;
//       padding: 0%;
//       font-size: 20px;
//     }
//     h1{
//       font-size: 40px;
//       text-align: center;
//     }
//     .imag{
//       display: inline-block;
//       text-align: center;
//       width: 33%;
//       float: left;
//     }
//     figure{
//       overflow: hidden;
//       margin: 0 10px;
//     }
//     h3{
//       color: #000;
//     }
//     p{
//       padding: 0 10px;
//     }
//     .imag img{
//       display: block;
//       width: 100%;
//       height: auto;
//       cursor: pointer;
//     }
//     .imag #zoom-IN img{
//       transform: scale(1);
//       transition: 0.3s ease-in-out;
//     }
//     .imag #zoom-IN:hover img{
//         transform: scale(1.2);
//     }
//     figcaption{
//       padding: 20px;
//       display: flex;
//       justify-content: center;
//     }
//   }


const Crd=(props)=>{
    return(<>
        <div className="imag">
        <div id="zoom-IN">
          <figure>
            <img 
                alt="" 
                srcset={props.srcset} 
                src={props.src} />
          </figure>
          <figcaption>
            <div>
              <p>{props.title}</p>
              <br />
              <p>₹{props.price}</p>
            </div>
            <div>
              
            </div>
          </figcaption>
        </div>
      </div>
    </>)
}

export default Crd 
