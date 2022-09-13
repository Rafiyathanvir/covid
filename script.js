var div=document.createElement("div")
div.setAttribute("id","div")
div.style.textAlign="center";

var input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","country")
//input.style.marginLeft="675px";
document.body.append(input)
var button=document.createElement("button")
button.setAttribute("type","button")
button.classList.add("btn","btn-primary");
button.innerHTML="Search"
button.addEventListener("click",foo);

var active=document.createElement("div")
active.setAttribute("id","active")
active.style.fontSize="30px";
var recovery=document.createElement("div")
recovery.setAttribute("id","recovery")
recovery.style.fontSize="30px";
var death=document.createElement("div")
death.setAttribute("id","death")
death.style.fontSize="30px";

div.append(input,button,active,recovery,death)
document.body.append(div)

async function foo(){
    let countryname=document.getElementById("country").value
    console.log(countryname)
    let url=`https://api.covid19api.com/dayone/country/${countryname}`
    var res=await fetch(url);
    var res1=await res.json();
        console.log(res1)
        let index=res1.length-1
        let index1=res1.length-2
        let index2=res1.length-3
        console.log(res1[index].Active);
        active.innerHTML=`total active case in${countryname} :${ res1[index].Active}`
        recovery.innerHTML=`total recovery case in ${countryname}: ${ res1[index].Recovered}`
        death.innerHTML=`total deaths case in ${countryname}: ${ res1[index].Deaths}`

    
}