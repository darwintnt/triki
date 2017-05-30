var tablero = new Array(3);
var turno;
var machine_seleccion_x;
var machine_seleccion_y;
var player_seleccion_x;
var player_seleccion_y;

function BorrarCelda(x,y){
	tablero[x][y]=0;
	cell=document.getElementById("c" + x + y);
	cell.innerHTML="";
}

function LimpiarTablero(){
	for(i=0;i<3;i++)
		for(j=0;j<3;j++){
			BorrarCelda(i,j);
		}
}

function PintarCelda(x,y){
	cell=document.getElementById("c" + x + y);
	cell.innerHTML="<img src=" + turno + ".png></img>";

	if(turno=="machine"){
		tablero[x][y]=1;
		machine_seleccion_x = x;
	    machine_seleccion_y = y;
	}
	else{
		tablero[x][y]=2;
		player_seleccion_x = x;
	    player_seleccion_y = y;
	}

	RevisarLinea();

	if(turno == "machine") turno = "player";
	else turno = "machine";
		 
}

function RevisarCelda(x,y){
	player = RevisarTurnoContador(2);
	if (player==3){
		if(tablero[x][y]==2){
			player_seleccion_x = x;
			player_seleccion_y = y;
			BorrarCelda(x,y);
		}
	}
	else{
		if (tablero[x][y] == 0 && MovimientoDiferente(x,y)) CeldaSeleccionada(x,y);
	}
}

function CeldaSeleccionada(x,y){
	PintarCelda(x,y);
	BuscarMovimiento();
}


function OcultarMensaje(){
	panel_mensaje = document.getElementById("mensaje");
	panel_mensaje.style.display="none";

}

function MostrarMensaje(ganador){
	panel_mensaje = document.getElementById("mensaje");
	panel_mensaje.style.display="block";

	if(ganador==1) string_notificacion = "Perdiste :P";
	else string_notificacion = "Has Ganado :)";

	mensaje_notificacion=document.getElementById("notificacion");
	mensaje_notificacion.innerHTML=string_notificacion;

	if(ganador==1) string_boton = "Intenta Nuevamente";
	else string_boton = "Quiero Jugar";

	mensaje_boton=document.getElementById("boton");
	mensaje_boton.innerHTML=string_boton;

}


function Autoplay(){
	OcultarMensaje();
	for(i=0;i<3;i++) tablero[i] = new Array(3);
	turno="machine";
	machine_seleccion_x = 4;
	machine_seleccion_y = 4;
	player_seleccion_x = 4;
	player_seleccion_y = 4;
	LimpiarTablero();
	BuscarMovimiento();
}

Autoplay();

