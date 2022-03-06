// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css"

// // // ReactDom.render('what to show',
// // //                 'where to show',
// // //                 'callback function');

// // ReactDom.render(<h1>Hello world</h1>,
// //                 document.getElementById("root")); 

// // // ReactDom.render(
// // //     React.createElement('h1',null,"Hello world"),
// // //     document.getElementById('root')
// // // )

// // // var h1 = document.createElement('h1');
// // // h1.innerHTML = "Hello World";

// // // document.getElementById("root").appendChild(h1);

// // **************************************************** //
// // **************************************************** //

// // multiple jsx elements we can use React.Fragment = <></> or [ , , ] array seperated by comma
// // ReactDom.render([
// //                    <h1>Hello world</h1>,
// //                    <h2>I am nayan</h2>
// //                 ],
// //                     document.getElementById("root")); 

// // // ****************Chalenge*********************** //
// // ReactDom.render(<React.Fragment>
// //                    <h1>I am nayan</h1>
// //                    <h2>List of 5 best Series</h2>
// //                    <ol>
// //                        <li>dark</li>
// //                        <li>Extra curriculam</li>
// //                        <li>My Holo Love</li>
// //                        <li>My first-2 love</li>
// //                        <li>Mr Robot</li>
// //                    </ol>
// //                 </React.Fragment>,
//                     // document.getElementById("root")); 

// // **************************************************** //
// // // **************************************************** //

// // const flname = "Nayanmoni Baruah";
// // ReactDom.render(<>
// //     <h1> my name is {flname}</h1>
// //     <p>my lucky number is {Math.random()}</p>
// // </>,document.getElementById("root"))

// // // **************************************************** //
// // // **************************************************** //
// // // **************************************************** //

// // const fname = "Nayanmonu";
// // const lname = "Baruah";

// // const heading = {
// //     color: "#fa9191",
// //     textTransform:"capitalize"
// // }

// // const today = new Date().toLocaleDateString();
// // const tim = new Date().toLocaleTimeString();
// // const img1 = "https://picsum.photos/200/300";
// // const img2 = "https://picsum.photos/300/300";

// // ReactDom.render(<>
// //     <h1>{`my name is ${fname} ${lname}`}</h1>
// //     <h2>{`the sum of 2 and 5 is ${5 + 2}`}</h2>
// //     <h2>{`the sum of 2 and 5 is ${5 + 2}`}</h2>
// //     <p>{`todays date is : ${today}`}</p>
// //     <p>{`todays time is : ${tim}`}</p>
// //      {/* *********** attributes************** */}
// //      <p contentEditable="true">Helllo world</p>
// //     <img src={img1} alt="img1"/>
// //     <a href={img1}><img src={img2} alt="img1"/></a>
// //     {/* *********** css ************** */}

// //     <h1 className="heading">Hello from nayan</h1>

// //     {/* *********** inline-css ************** */}
// //     <h1 
// //         style={{
// //             color: "#fa9191",
// //             textTransform:"capitalize"
// //         }}>Hello from nayan</h1>

// //     {/* *********** inline-css ************** */}
// //     <h1 
// //         style={heading}>Hello from nayan</h1>


// // </>,document.getElementById("root"));

// // // **************************************************** //
// // // ******************Challenge************************* //
// // // **************************************************** //
// const fname = "Nayanmoni Baruah"
// const today = new Date().toLocaleDateString();
// const tim = new Date().toLocaleTimeString();

// const cssStyle = { } // created an oject to hold css style

// const gret = (tim) =>{
//     if(tim>12){
//         cssStyle.color = "black";
//          return "Good night"; 
//     }
//     else {
//         cssStyle.color = "yellow";
//         return "Good Morning";
// }
// }

// const greet = gret();



// ReactDom.render(<>
//     <div className="div_00">
//         <p className="div_00-p">Today's date is: {today}</p>
//         <br/>
//         <p className="div_00-p">Current time is: {tim}</p> 
//         <p className="div_00-p"><span style={cssStyle}>{greet}</span> {fname}</p> 
//     </div>
// </>,document.getElementById("root"))