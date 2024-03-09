let form = document.getElementById("myform");
let result = document.getElementById("carbox");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let name = document.getElementById("pname").value;
    let email = document.getElementById("pemail").value;
    let age = document.getElementById("page").value;


    
    let radio = document.querySelector('input[name="Gender"]:checked').value
    const checked = document.getElementById("checkbox").checked;



    // let gender =
    // document.querySelector('input[name="Gender"]:checked')?.value || "Not specified";




    let subscribe = checked ? "Subscribed" : "Un-Subscribed";
    result.innerHTML = 
    `Name: ${name} <br/> Email: ${email} <br/> Age: ${age} <br/> Gender: ${radio} <br/> Subscriptions: ${subscribe}`;
})


