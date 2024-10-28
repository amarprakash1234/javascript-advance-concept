// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector('button');

// btn.addEventListener('click', async () => {

//     let fact = await getFact();
//     console.log(fact);

//     let img = document.querySelector('img');
//     img.setAttribute("src", fact);
// });


// async function getFact() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch {
//         return "No Fact found"
//     }
// }


// let btn = document.querySelector('button');

// btn.addEventListener('click', async () => {

//     let fact = await getFact();
//     let p = document.querySelector('p');
//     p.innerHTML = fact;
// });





// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch {
//         return "No Fact found"
//     }
// }



// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log('Something Wrong');
//     });

// async function getFact() {

//     let res1 = await fetch(url);
//     let data1 = await res1.json();
//     console.log(data1.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
    

// }
// getFact();

// console.log("Hello World!!");

// function saveToDB(data) {
//     return  new Promise((resolve, reject) => {
//         let x = Math.floor(Math.random()*10);

//         if(x > 4) {
//             resolve("Data was saved!");
//         } else {
//             reject("Data was not saved");
//         }
//     });
// }


// saveToDB("Amar Prakash")
//     .then((result) => {
//         console.log("About Data1 : ", result);
//         return saveToDB("ApnaCollege");
//     })
//     .then((result) => {
//         console.log("About Data2 : ", result);
//         return saveToDB("Rishikesh Kumar");
//     })
//     .then((result) => {
//         console.log("About Data3 : ", result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });












