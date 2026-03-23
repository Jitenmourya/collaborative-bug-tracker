document.getElementById("bugForm")
.addEventListener("submit", async function(e){

e.preventDefault();

let title=document.getElementById("title").value;
let desc=document.getElementById("description").value;
let priority=document.getElementById("priority").value;

await fetch("http://localhost:3000/bugs",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({title,desc,priority})
});

loadBugs();

this.reset();

});

async function loadBugs(){

let res = await fetch("http://localhost:3000/bugs");
let data = await res.json();

let list = document.getElementById("bugList");
list.innerHTML="";

data.forEach(bug=>{
let li=document.createElement("li");
li.innerHTML = bug.title+" - "+bug.desc+" - "+bug.priority;
list.appendChild(li);
});

}

loadBugs();