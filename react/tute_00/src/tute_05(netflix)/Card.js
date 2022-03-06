function Card(props){
    return (<div classNameName="cards">
         <div className="card">
         <img 
            src={props.crd_img}
            alt="myimg" 
            className="card__img" />
        <div className="card__info">
            <span className="card__category"> {props.crd_title} </span>
            <h3 className="card__title"> {props.crd_nam} </h3>
            <a href={props.crd_link} target="_blank" rel="noreferrer">
                <button> Watch Now</button>
            </a>
        </div>
    </div>
</div>)
}


// Card component with 
// props as poerty and 
// prop.attribute

export default Card;