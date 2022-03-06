const fs = require("fs");

const obj1 = {
     employee1 : {id : 1,
    fullName : "Nayanmoni Baruah",
    fName : "Nayanmoni",
    lName : "Baruah",
    },
    employee2 : {id : 1,
    fullName : "Gaurav Kakoti",
    fName : "Gaurav",
    lName : "Kakoti",
    },
    employee3 : {id : 1,
    fullName : "Pragyanu G Deka",
    fName : "Pragyanu G",
    lName : "Deka",
    },
    employee4 : {id : 1,
    fullName : "Furkan Ahmed",
    fName : "Furkan",
    lName : "Ahmed",
    },

}

const data = JSON.stringify(obj1);

fs.appendFile("userAPI.json",data,(err)=>{
    if(err != null)
        console.log(err);
    else
        console.log("successfuly appended");
})