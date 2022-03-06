import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<React.Fragment>
<div className="ok my-5">
    <h1 className="HEADING mt-lg-4 text-center text-black">WEllcom TO REACT TUTORIAL</h1>
</div>
    <div className="container">
  <div className="row">
    <div className="col mt-lg-4">
      <div className="card mt-lg-4">
  <img src="https://picsum.photos/200/200" className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Go somewhere</button>
  </div>
</div>
    </div>
    <div className="col mt-lg-4">
      <div className="card mt-lg-4">
  <img src="https://picsum.photos/200/201" className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Go somewhere</button>
  </div>
</div>
    </div>
    <div className="col mt-lg-4">
      <div className="card mt-lg-4">
  <img src="https://picsum.photos/201/200" className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Go somewhere</button>
  </div>
</div>
    </div>
  </div>
</div>
</React.Fragment>,document.getElementById("root"))
