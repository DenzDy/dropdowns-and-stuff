import './style.css';
import './reset.css';

document.getElementById("dropdown-onclick").addEventListener("click", function(){
    document.getElementById("dropdown-display").classList.toggle("display");
});