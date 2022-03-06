const bio = {
    name : "nayan",
    age : 21,
    pason : "hagura"
};

console.log(bio.pason);


/////// JSON METHODS ///////

/* JSON.stringify */
const jsonData = JSON.stringify(bio);

console.log(jsonData);

// console.log(jsonData.paspon); // udefine error!

/* JSON.parsed */

const objData = JSON.parse(jsonData);
console.log(objData);