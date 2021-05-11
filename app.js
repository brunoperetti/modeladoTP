var el = document.getElementById('loginBtn');
if(el){
  el.addEventListener('click', crearEscuela, false);
}

//document.getElementById("log1").addEventListener("click", crearEscuela);


function crearEscuela (){
    fetch('http://localhost:8080/api/escuela', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    }, 
    body: JSON.stringify({
        'codigoUnicoEstablecimiento': document.getElementById("codigo").value,
        'clave': document.getElementById("psw").value
    })
    
})
.then(response => response.json())
.then(data => console.log(data));
window.location = "http://www.yoururl.com"; 
}
