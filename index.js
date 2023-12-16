/*let username = window.prompt('whats your title')
document.getElementById('he').innerHTML = username */
let number = 0
let geert = 0
let index = 0;
let index2 = 0





function CreateCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    CreateCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}
document.getElementById('GETbutton').onclick  = function(){
    index = getCookie('userName')
    index2 = getCookie('passID');  
    number = 'hello ' + index;
    geert = 'your password is : ' + index2;
    document.getElementById('e').innerHTML = number;
    document.getElementById('j').innerHTML = geert;

}
document.getElementById('ID2').onclick  = function(){
CreateCookie('passID',document.getElementById('pass').value,30);
CreateCookie('userName',document.getElementById('name').value,30);
}
document.getElementById('Logout').onclick = function(){deleteCookie('passID');deleteCookie('userName');}