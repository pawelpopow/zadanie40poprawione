
var button = document.querySelector('button') ;
button.onclick = function  () {
    var nameInput = document.getElementById('formname').value;  
    var p = document.getElementById('name');
    p.textContent = nameInput;
    var surnameInput = document.getElementById('formdname').value; 
    var surnameparagraf = document.getElementById('surname');
    surnameparagraf.textContent = surnameInput;
    var surnameInput = document.getElementById('formphone').value; 
    var phoneparagraf = document.getElementById('phone');
    phoneparagraf.textContent = surnameInput;
    alert ("Właśnie kliknąłeś button");
    
}

console.log(button);

