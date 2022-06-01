let botonLogin = document.getElementById("botonlogin").addEventListener("click", function (){
    guardarLocal()
});

function guardarLocal(){
    let login = document.getElementById("botonlogin").value;
    console.log(login);
    localStorage.setItem("login", login);
}    
document.getElementById("mostrar").innerHTML = localStorage.getItem("botonlogin");