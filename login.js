//stpe one
document.getElementById('btn-submit').addEventListener('click',function(){
    //stpe two
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
// stpe third
    const passwordfil = document.getElementById('user-password');
    const password = passwordfil.value;
    // stpe four
    if(email === "mdrashed503420@gmail.com" && password === "503420"){
        window.location.href='bank.html'
    }else{alert('you are lorng password')}
})