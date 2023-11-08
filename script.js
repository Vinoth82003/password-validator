console.log('script.js');
console.clear();

let input = '';

var upperRegex = /[A-Z]/;
var lowerRegex = /[a-z]/;
var degitRegex = /\d/;
var symbolRegex = /\W/;
var lengthRegex = /.{8}/;

function validate(){

    if(upperRegex.test(input)){
        document.querySelector(".upper").classList.add('active');
    }else{
        document.querySelector(".upper").classList.remove("active");
    }

    if(lowerRegex.test(input)){
        document.querySelector(".lower").classList.add('active');
    }else{
        document.querySelector(".lower").classList.remove("active");
    }

    if(degitRegex.test(input)){
        document.querySelector(".digit").classList.add('active');
    }else{
        document.querySelector(".digit").classList.remove("active");
    }

    if(symbolRegex.test(input)){
        document.querySelector(".symbol").classList.add('active');
    }else{
        document.querySelector(".symbol").classList.remove("active");
    }

    if(lengthRegex.test(input)){
        document.querySelector(".length").classList.add('active');
    }else{
        document.querySelector(".length").classList.remove("active");
    }
}
document.querySelector("#input").addEventListener('input', ()=>{

    input = document.getElementById("input").value;
    validate();

});
