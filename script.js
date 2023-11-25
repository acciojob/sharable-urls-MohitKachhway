// your code here
let form = document.querySelector("form");
// console.log(form)
function fun(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let heading =document.getElementById("url");
    if(name&&year){
        heading.innerText= `https://localhost:8080/?name=${name}&year=${year}`
    }else if(name){
        heading.innerText= `https://localhost:8080/?name=${name}`
    }else
    heading.innerText= `https://localhost:8080/?year=${year}`
}
form.addEventListener("submit",fun);