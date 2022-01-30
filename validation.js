console.log("validation form");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName=false;
let validEmail=false;
let validPhone=false;
// console.log(name,email,phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let reg=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    console.log(reg,str);
    if(reg.test(str))
    {
        console.log("name is valid")
        name.classList.remove('is-invalid');
        validName=true;
    }
    else{
        
        console.log("name is not valid");
        name.classList.add('is-invalid');
        validName=false;
    }
});
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    let reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(reg,str);
    if(reg.test(str))
    {
        console.log("email is valid")
        email.classList.remove('is-invalid');//dynamically adding class
        validEmail=true;
    }
    else{
        
        console.log("email is not valid");
        email.classList.add('is-invalid');
        validEmail=false;
    }
});
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let reg=/^([0-9]){10}$/;
    let str=phone.value;
    console.log(reg,str);
    if(reg.test(str))
    {
        console.log("phone is valid")
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else{
        
        console.log("phone is not valid");
        phone.classList.add('is-invalid');
        validPhone=false;
    }
});

let submit=document.getElementById('submit');

submit.addEventListener('click',(e)=>{
e.preventDefault();
console.log('clicked submit');
if (validName && validEmail && validPhone) {
    console.log('Name,Email and Phone are valid');
    let success=document.getElementById('success');
success.classList.add('show');//show is a class for showing the green bar at top for success
failure.classList.remove('show');
} else {
    console.log('Name,Email or Phone is not valid');
    let failure=document.getElementById('failure');
failure.classList.add('show');
success.classList.remove('show');
}



});