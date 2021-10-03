 let count = 0
 let idcount=document.getElementById("count")
 function increment(){
    count=count+1
    idcount.innerText =count
}

let a=0
let idsave=document.getElementById("save")
function save(){
   let countStr= count + " - "
   idsave.textContent += countStr
   idcount.innerText=0
   a=a+1
   count=0
}