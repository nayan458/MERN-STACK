{/* <script>
        const container = document.querySelector('#cont');

        const request = new XMLHttpRequest();
        request.open('GET',"https://restcountries.eu/rest/v2/name/nepal");
        request.send();

        // to get the response

        request.addEventListener('load', function(){
            // const data = this.responseText;
            // console.log(data);
            const [Dta] = JSON.parse(this.responseText)
            console.log(Dta);
            // console.log(Dta.capital);
            const htmlDta = `
                <div id="flag" class="img"><img class="img" src="${Dta.flag}" alt="img"></div>
                <hr>
                <br><div class="cntryNam" id="ctn"><h3>${Dta.name}</h3></div>
                <br><div id="cptl"><h3>${Dta.capital}</h3></div>
                <br><div id="lan"><h3>${Dta.nativeName}</h3></div>
            `;
            container.insertAdjacentHTML('afterbegin',htmlDta)
        });
    </script> */}

/************************************************ JSON  *******************************/

// // JSON.stringify turns a javaScript object into JSON text and
// // stores that JSON text in a string, eg;

// const myBio = {
//     fullName : {
//         fName : "Nayan",
//         lName : "Baruah",
//     },
//     myAge : 21,
//     gender : "male",
//     education : {
//         school : "Modern English  School",
//         college : "K.C.Das Commerce College",
//     }
// }
// console.log(myBio);
// console.log("\n");
// console.log(typeof(myBio));
// console.log("\n");
// let object_string = JSON.stringify(myBio);
// console.log("\n");
// console.log(object_string);
// console.log("\n");
// console.log(typeof(object_string));
// console.log("\n");

// // JSON.parse turns a string of JSON text into a JavaScript object, eg:

// const object_string_object = JSON.parse(object_string);
// console.log(object_string_object);
// console.log(typeof(object_string_object));

/****************** PROMISE(fetch method)  *****************************/

// 2condition => succ => fail

// fetch('https://restcountries.eu/rest/v2/name/nepal')

// milaga => sahi hai => Fulfilled
// nai milaga => internet error. server error => Rejected

// Fulfilled
// Rejected

// 90% promise consumed and 10% create

// fetch()
// Fulfilled
// Rejected
// then then then

{/*    <script>
        const joke = document.querySelector('#joke');
        const btn = document.querySelector('#btn');

        const setHader= {
            headers : {
                Accept : "application/json",
            }
        }
        const crackJoke=()=>{
                fetch('https://icanhazdadjoke.com',setHader)
                .then((res) => res.json())                    // we get response
                .then((data)=>joke.innerHTML = data.joke)     // we extract data from response
                .catch((error)=>console.log(error))
        }
        btn.addEventListener('click',crackJoke);
        crackJoke();
    </script>  */}

    // to get data in JSON format we net to set headers Accept to "application/json"
    // /* * */setHader = { headers:{Accept:"application/json"}} 
    
    // /* * */num1.jason() 
    //mention json format(that means we need the request in JSON form)(*it doesnt converts)

/*********************** async await ***********************/

{/* <script>// 21638 
    // 22300GET https://icanhazdadjoke.com/
    </script> */}
    

{/* <script>
         const joke = document.querySelector('#joke');
        const btn = document.querySelector('#btn');

        // async function crackJoke(){}

        const crackJoke = async() =>{
            try{
                const setHadr = {
                    headers: {
                        Accept : "application/json"
                    }
                }
                const res = await fetch('https://icanhazdadjoke.com',setHadr)
                const data = await res.json();
                joke.innerHTML = data.joke;
            }catch(err){
                console.log(`the erro is ${err}`);
                joke.innerHTML = `${err}`;
            }
        }

        btn.addEventListener('click',crackJoke);
        crackJoke();
</script> */}
