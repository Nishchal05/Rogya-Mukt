const helper=()=>{
    const colle = document.getElementById('collect').value; // Use lowercase 'value'

if (colle === 'depression'||colle==='Depression') {
    location.href =("depression.html");
} 
else if (colle==='pain'||colle==='joint pain') {
  location.href=("joint_pain.html")
} 
  
else {
    alert('Sorry only depression and pain related information are there');
}
  }
  // const login=document.querySelector("#login");
  // login.addEventListener("click",()=>{
  //   location.href="login.html";
  // })
const app=document.querySelector("#navi2");
app.addEventListener(("click"),()=>{
  alert('Not functional right now');
})