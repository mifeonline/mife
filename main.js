const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        

        let mensaje = document.getElementById('mensaje').value;
        let numero= 541159436971;
        
var win= window.open(`https://wa.me/${numero}?text=
Hola%20soy%20*${nombre}*%0A

*Mensaje:*%0A${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)