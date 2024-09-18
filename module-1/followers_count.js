let count = 0;
function followers_count(){
    count++;
    document.getElementById('countDisplay').innerText = `You have ${count} followers`;
    check_followers_count()
}

function check_followers_count(){
    if(count > 10){
        document.getElementById('special-msg').innerText = "You have a lot of followers - Congrats";
    }
    else{
        document.getElementById('special-msg').innerText = "You need more followers";
    }
}