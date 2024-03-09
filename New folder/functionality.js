// let studentTable = document.getElementById("studentRecord");



let student =[];
let firstEntry = {id:1001, name:"Ravi", age:26};
student.push(firstEntry);



let button = document.getElementById("btn");
button.addEventListener("click",()=>{
    let id = prompt("Enter Id:");
    // let id = student[student.length-1].id+1;
    let name = prompt("Enter Name:").toUpperCase();
    let age = prompt("Enter Age:");

    student.push({id:id, name:name, age:age }); 
    updateProfile();
});



function updateProfile(){
    let tbody = document.querySelector("tbody");
    tbody.innerHTML="";


    function caller(a){
        let row = document.createElement("tr");
        row.innerHTML = `<td>${a.id}</td>  <td>${a.name}</td> <td>${a.age}</td>`;
        tbody.appendChild(row);
    }

    student.forEach(caller);


    

    // student.forEach((a)=>{
    //     let row = document.createElement("tr");
    //     row.innerHTML = `<td>${a.id}</td>  <td>${a.name}</td> <td>${a.age}</td>`;
    //     tbody.appendChild(row);
    // });
   
}


updateProfile();