let container_div = document.querySelector("#container");
console.log(container_div);

const birthday = document.getElementById("ageselector");
const butn = document.getElementById("buttn");
let result = document.querySelector("#enterage");

function calculateAge(){
    let date_of_birth = birthday.value;
    let current_year = new Date();
    let birth_year = new Date(date_of_birth);
//    if you not enter the dob.
     if(date_of_birth === "") {
         alert("please enter your age");
           }
        //    stage 2
     else if(birth_year.getMonth() > current_year.getMonth()){
    let age = current_year.getFullYear() - birth_year.getFullYear();
    let current_age = age - 1;
    result.innerText = `your age is ${current_age} year old`;
   
}
else{
    let age = current_year.getFullYear() - birth_year.getFullYear();
    // console.log(current_year);
    // console.log(birth_year);
    // console.log(age);

result.innerText = `your age is ${age} year old`;
}
}
butn.addEventListener("click", calculateAge);








