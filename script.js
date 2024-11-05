// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn2 = document.querySelector('#btn2');

// btn2.addEventListener('click', async () => {

//     let fact = await getFact2();
//     console.log(fact);

//     let img = document.querySelector('img');
//     img.setAttribute("src", fact);
// });


// async function getFact2() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch {
//         return "No Fact found"
//     }
// }


// let btn1 = document.querySelector('#btn1');

// btn1.addEventListener('click', async () => {

//     let fact = await getFact1();
//     let p = document.querySelector('p');
//     p.innerHTML = fact;
// });





// let url = "https://catfact.ninja/fact";

// async function getFact1() {
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


// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         console.log(res.json());
//     })
//     .catch((err) => {
//         console.log("ERROR : ", err);
//     });



// document.all[7].style.color = "red";

// let x = document.querySelectorAll("p");

// console.log(x);

// x[2].style.color = "red";

// let y = document.getElementById("hw");

// y.style.color = "yellow";

// let para = document.querySelector(".hello");

// console.log(para.classList);

// para.classList.add("javaScript");

// console.log(para.classList);

// para.classList.remove("hello");

// console.log(para.classList);

// console.log(para.classList.contains("py"));

// let div = document.querySelector("div");

// console.log(div.children);

// let btn = document.querySelector("button");

// let para = document.querySelector("p");

// for(btn of btns) {
//     btn.addEventListener("click", () => {
//         console.log("Hello World!")
//     });
//     btn.addEventListener("click", () => {
//         console.log("Hello Duniya!")
//     });
// }

// btn.addEventListener("click", () => {
//     console.log(this);
// });

// btn.addEventListener("click", function() {
//     console.log(this);
// });

// para.addEventListener("keydown", function() {
//     para.style.backgroundColor = "yellow";
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(evt) {
//     console.log("Key was pressed!")
//     console.log(evt.key);
//     console.log(evt.code);
// });

// inp.addEventListener("keyup", function(evt) {
//     console.log("Key was released!")
//     console.log(evt.key);
//     console.log(evt.code);
// });

// let form = document.querySelector("form");
// let username;
// form.addEventListener("submit", function(evt) { 
//     evt.preventDefault();
//     // alert("Form submitted!");
//     // let inp = document.querySelector('input');
//     // username = inp.value;
//     // inp.value = "";
//     // console.log(username);
//     // console.log(form.elements); // or this.elements
// })

// let inp = document.querySelector("#user");
// let para = document.querySelector("p");

// inp.addEventListener("change", function(evt) {
//     console.log("Input Changed!");
//     console.log("Final Value = ", this.value);
// })

// inp.addEventListener("input", function(evt) {
//     para.innerText = this.value;
// })
// let url = "https://catfact.ninja/fat";

// function promiseExample() {
//     return new Promise((resolve, reject) => {
//         resolve("Hello World!");
//     });
// }


// async function check() {
//     // let res = await promiseExample();
//     // console.log(res);

//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log(data1);
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2);
    

//     console.log("Hello World!");
// }
// check();


// console.log("Hello World!");


// async function hello() {
//     console.log("Hello!");
// }
















