let string = "";
let btns = document.querySelectorAll(".btn");
let one = document.querySelector(".one");
let two = document.querySelector(".two");

btns.forEach((btn) =>{
    btn.addEventListener("click",(e)=>{
        // console.log(e.target.innerHTML);
        
        if(btn.getAttribute("id") === "="){
            string = eval(string);
            one.innerHTML  = string;
        }else if(btn.getAttribute("id") === "ac"){
            string = "";
            one.innerHTML = string;  
        }else if (btn.getAttribute("id") === "del"){
            string = string.slice(0,string.length-1);
            one.innerHTML = string;
        }else{
            string += btn.getAttribute("id");
            one.innerHTML = string;
        }
    })
})