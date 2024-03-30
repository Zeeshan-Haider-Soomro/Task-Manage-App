function button1(){
    window.location.href="index1.html"
}
// function login(){
//     window.location.href="index2.html"
// }
let dbEmail = "zh7774440@gmail.com"
let dbPassword = "zeeshansoomro"
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");

function login(){
    if(userEmail.value === dbEmail && userPassword.value === dbPassword){
    alert("login")
    window.location.href="index2.html"
}
    else{
    alert("incorrect")
}
}

function addTask() {
    let userText = document.querySelector("#task-input");
    if (userText.value == "") {
        alert("Please enter Task title!");
    }
    else {
    let task = document.querySelector(".card-body");
    task.innerHTML += ` <h3 class = "ms-3 text-white"><span><i class="fa-regular fa-square-check text-warning"></i></span> ${userText.value} </h3>`;
    userText.value="";}
}

function addDetails() {
    let userDetail = document.querySelector("#task-detail");
    if (userDetail.value == "") {
        alert("Please enter Task details!");
    }
    else {
        let taskDetail  = document.querySelector(".card-body");
        taskDetail.innerHTML += ` <h6 class = "ms-5 text-white">${userDetail.value}</h6>`
        userDetail.value=""}
}
