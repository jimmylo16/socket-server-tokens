//referencias al html
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');

const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');
    btnCrear.disabled=false;

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
    btnCrear.disabled=true; // si no estoy conectado, no puedo hacer click
});

socket.on('ultimo-ticket', (ultimo) => {
    lblNuevoTicket.innerText='Ticket' + ultimo;
});

btnCrear.addEventListener( 'click', () => {
    
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerText=ticket;
    });

}); 

console.log('Nuevo Ticket HTML');