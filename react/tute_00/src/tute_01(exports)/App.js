// const fname = "Nayan";

// const lname = "Baruah";

// function func_01(){
//     let num1 = "20";
//     return num1;
// }

// function func_02(){
//     let num2 = "20"
//     return num2;
// }

// export default fname;

// export {lname,func_01,func_02};

import React from "react";
import sum,{diff,product,division} from './calc'

function App(){return (<>
    <h1>the sum of 2 and 3 is : {sum(3,2)}</h1>
    <h1>the diff of 3 and 2 is : {diff(3,2)}</h1>
    <h1>the product of 2 and 3 is : {product(2,3)}</h1>
    <h1>the division of 4 by 2 is : {division(4,2)}</h1>
</>);}

export default App;