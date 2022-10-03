const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const btnChk = document.getElementById("btnChk")

const setMessage = function(){
    p1.innerText="value changed by button click"
}

btnChk.addEventListener("mouseover", function(){
     p2.innerText="On Mouse Over"
    p2.style.backgroundColor="purple"
    console.log("my mama");
},true);

btnChk.addEventListener("mouseleave", function(){
    p2.innerText="On Mouse Leave"
   p2.style.backgroundColor="chocolate"
   console.log("my papa");
},true);
