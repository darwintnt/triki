function RevisarTurnoContador(valor_turno){
	contador_turno = 0;
	for (i=0; i<3; i++){
		for (j=0; j<3; j++){
			if (tablero[i][j] == valor_turno) contador_turno++;
		}
	}
	return contador_turno;
}


function MovimientoDiferente(x, y){
	diferente = false;

	if (turno == "player"){
		if ( x != player_seleccion_x ) diferente = true;
		if ( y != player_seleccion_y ) diferente = true;
	}
	else{
		if ( x != machine_seleccion_x ) diferente = true;
		if ( y != machine_seleccion_y ) diferente = true;
	}

	return diferente;
}

function RevisarFila(x,value){
	contador_value=0;
	for(i=0;i<3;i++){
		if(tablero[i][x]==value) contador_value++;
	}
	return contador_value;

}

function RevisarColumna(y,value){
	contador_value=0;
	for(i=0;i<3;i++){
		if(tablero[y][i]==value) contador_value++;
	}
	return contador_value;

}

function RevisarDiagonales(d,value){
	contador_value=0;
	if(tablero[(1+d)][0]==value) contador_value++;
	if(tablero[1][1]==value) contador_value++;
	if(tablero[(1-d)][2]==value) contador_value++;

	return contador_value;
}

function RevisarLinea(){
	if(turno=="machine") value=1;
	else value=2;

	triki=false;

	if(RevisarFila(0,value) == 3) triki=true;
	if(RevisarFila(1,value) == 3) triki=true;
	if(RevisarFila(2,value) == 3) triki=true;
	if(RevisarColumna(0,value) == 3) triki=true;
	if(RevisarColumna(1,value) == 3) triki=true;
	if(RevisarColumna(2,value) == 3) triki=true;
	if(RevisarDiagonales(1,value) == 3) triki=true;
	if(RevisarDiagonales(-1,value) == 3) triki=true;

	if(triki==true) MostrarMensaje(value);

}

function RevisarBloqueo(x,y){

	if(RevisarFila(y,1)==1 && RevisarFila(y,2)==2) return true;
	if(RevisarColumna(x,1)==1 && RevisarColumna(x,2)==2) return true;
	if((x==0 && y==2) || (x==1 && y==1) || (x==2 && y==0)){
		if(RevisarDiagonales(1,1) == 1 && RevisarDiagonales(1,2)==2) return true;
	}
	if((x==0 && y==0) || (x==1 && y==1) || (x==2 && y==2)){
		if(RevisarDiagonales(-1,1) == 1 && RevisarDiagonales(-1,2)==2) return true;
	}

	return false;
}