 let count = 0
 let idcount=document.getElementById("count")
 function increment(){
    count=count+1
    idcount.innerText =count
}


let idsave=document.getElementById("save")
function save(){
   let countStr= count + " - "
   idsave.textContent += countStr
   idcount.innerText=0
   count=0
}

let idreset=document.getElementById("reset")
function reset(){
   idcount.innerText=0
   count=0
}