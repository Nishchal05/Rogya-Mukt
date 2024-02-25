let username = document.querySelector("#user");
let button = document.querySelector("button");
const passcode = ["chirag","nishchal"];
const pass = ["1234","5678"];

button.addEventListener("click", () => {
    // Check if the username element exists
   //  if (!username) {
   //      alert("Username element not found");
   //      return;
   //  }

    let enteredUsername = username.value;
    let enteredPassword = document.querySelector("#pass").value;
    const Password=()=>{
        for(let i of pass){
            if(i===enteredPassword){
                location.href="therapy.html";
            }
        }
       }
    for(let i of passcode){
        if(i===enteredUsername){
            Password();
        }
    }
});

