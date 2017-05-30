function BuscarMovimiento(){

	machines=RevisarTurnoContador(1);
	if(machines>1){
		completa = false;

		//Formar Linea machine para ganar
		if (completa == false) completa = FilaCompleta(0,1);
		if (completa == false) completa = FilaCompleta(1,1);
		if (completa == false) completa = FilaCompleta(2,1);
		if (completa == false) completa = ColumnaCompleta(0,1);
		if (completa == false) completa = ColumnaCompleta(1,1);
		if (completa == false) completa = ColumnaCompleta(2,1);
		if (completa == false) completa = DiagonalCompleta(1,1);
		if (completa == false) completa = DiagonalCompleta(-1,1);

		//Cortar linea del rival
		if (completa == false) completa = FilaCompleta(0,2);
		if (completa == false) completa = FilaCompleta(1,2);
		if (completa == false) completa = FilaCompleta(2,2);
		if (completa == false) completa = ColumnaCompleta(0,2);
		if (completa == false) completa = ColumnaCompleta(1,2);
		if (completa == false) completa = ColumnaCompleta(2,2);
		if (completa == false) completa = DiagonalCompleta(1,2);
		if (completa == false) completa = DiagonalCompleta(-1,2);

		if (completa==false){
		//Si no se cumple lo anterior
				if(machines==3){
				BuscarCelda=false;

				while(BuscarCelda==false){
				x=Math.round(Math.random()*2);
				y=Math.round(Math.random()*2); 
				if(tablero[x][y] == 1 && RevisarBloqueo(x,y)==false) 
					BuscarCelda = true;
				}
					machine_seleccion_x = x;
					machine_seleccion_y = y;
					BorrarCelda(x,y);
			}
			MovimientoAleatorio();
		}

	}
	else{
		MovimientoAleatorio();
	}
	
}

function MovimientoAleatorio(){
	CeldaDisponible=false;
	while(CeldaDisponible==false){
		x=Math.round(Math.random()*2);
		y=Math.round(Math.random()*2); 
		if(tablero[x][y] == 0 && MovimientoDiferente(x,y)) CeldaDisponible = true;
	}
	PintarCelda(x,y);
}

function FilaCompleta(x,valor_turno){
	//si hay dos en linea
	if(RevisarFila(x,valor_turno)==2){
		//Busca cual casilla falta para completar la linea
		Casilla_Final=false;
		for(i=0;i<3;i++){
			if(tablero[i][x]==0){
				Casilla_Final=true;
				Casilla_Final_x=i;
				Casilla_Final_y=x;
			}
		}
		//si la casilla que falta esta vacia
		if(Casilla_Final==true){
			//si hay 3 fichas
			if(RevisarTurnoContador(valor_turno)==3){
				//valida a quien se le quiere completar la linea
				//si es machine -> arma linea
				if(valor_turno==1){
					//buscar posición perdida y borrarla
					Buscar_Perdida=false;

					for(i=0;i<3 && Buscar_Perdida==false;i++){
						if(i!=x){
							for(j=0;j<3 && Buscar_Perdida==false; j++){
								if(tablero[j][i]==1){
									Buscar_Perdida=true;
									Buscar_Perdida_x=j;
									Buscar_Perdida_y=i;
								}
							}
						}
					}
					machine_seleccion_x = Buscar_Perdida_x;
					machine_seleccion_y = Buscar_Perdida_y;
					BorrarCelda(Buscar_Perdida_x,Buscar_Perdida_y);
				}
				//sino -> bloquear linea
				else{
					//buscar ficha de la maquina que no bloquea y se borra
					BuscarCelda=false;

						while(BuscarCelda==false){
							x=Math.round(Math.random()*2);
							y=Math.round(Math.random()*2); 
							if(tablero[x][y] == 1 && RevisarBloqueo(x,y)==false) BuscarCelda = true;
						}
						//Borra la celda
						machine_seleccion_x = x;
						machine_seleccion_y = y;
						BorrarCelda(x,y);
					}
				
			}
			
			//Pintar ultima celda
			PintarCelda(Casilla_Final_x,Casilla_Final_y);
			//retornar true
			return true;
		}
		// sino returnar false
		return false;
	}
	//sino retornar false
	return false;

}

function ColumnaCompleta(x,valor_turno){
	//si hay dos en linea
	if(RevisarColumna(x,valor_turno)==2){
		//Busca cual casilla falta para completar la linea
		Casilla_Final=false;
		for(i=0;i<3;i++){
			if(tablero[x][i]==0){
				Casilla_Final=true;
				Casilla_Final_x=x;
				Casilla_Final_y=i;
			}
		}
		//si la casilla que falta esta vacia
		if(Casilla_Final==true){
			//si hay 3 fichas
			if(RevisarTurnoContador(valor_turno)==3){
				//valida a quien se le quiere completar la linea
				//si es machine -> arma linea
				if(valor_turno==1){
					//buscar posición perdida y borrarla
					Buscar_Perdida=false;
					for(i=0;i<3 && Buscar_Perdida==false;i++){
						if(i!=x){
							for(j=0;j<3 && Buscar_Perdida==false; j++){
								if(tablero[i][j]==1){
									Buscar_Perdida=true;
									Buscar_Perdida_x=i;
									Buscar_Perdida_y=j;
								}
							}
						}
					}
					machine_seleccion_x = Buscar_Perdida_x;
					machine_seleccion_y = Buscar_Perdida_y;
					BorrarCelda(Buscar_Perdida_x,Buscar_Perdida_y);
				}
				//sino -> bloquear linea
				else{
					//buscar ficha de la maquina que no bloquea y se borra
					BuscarCelda=false;
					
						while(BuscarCelda==false){
							x=Math.round(Math.random()*2);
							y=Math.round(Math.random()*2); 
							if(tablero[x][y] == 1 && RevisarBloqueo(x,y)==false) BuscarCelda = true;
						}
						machine_seleccion_x = x;
						machine_seleccion_y = y;
						BorrarCelda(x,y);
					}
				
			}			
			//Pintar casilla
			PintarCelda(Casilla_Final_x,Casilla_Final_y);
			//retornar true
			return true;
		}
		// sino returnar false
		return false;
	}
	//sino retornar false
	return false;
}

function DiagonalCompleta(x,valor_turno){
//si hay dos en linea
	if(RevisarDiagonales(x,valor_turno)==2){
		//Busca cual casilla falta para completar la linea
		Casilla_Final=false;

		if(tablero[1][1]==0){
			Casilla_Final_x = 1;
			Casilla_Final_y = 1;
			Casilla_Final = true;
		}
		if(tablero[1-x][2]==0){
			Casilla_Final_x = (1-x);
			Casilla_Final_y = 2;
			Casilla_Final = true;
		}
		if(tablero[1+x][0]==0){
			Casilla_Final_x = (1+x);
			Casilla_Final_y = 0;
			Casilla_Final = true;
		}

		//si la casilla que falta esta vacia
		if(Casilla_Final==true){
			//si hay 3 fichas
			if(RevisarTurnoContador(valor_turno)==3){
				//valida a quien se le quiere completar la linea
				//si es machine -> arma linea
				if(valor_turno==1){
					//buscar posición perdida y borrarla
					Buscar_Perdida=false;

					for(i=0;i<3 && Buscar_Perdida==false;i++){
							for(j=0;j<3 && Buscar_Perdida==false; j++){
								if((i!=1 || j!=1) 
									&& (i!= (1-x) || j!=2) 
									&& (i!= (1+x) || j!=0)
									&& tablero[i][j]==1){
									Buscar_Perdida=true;
									Buscar_Perdida_x=i;
									Buscar_Perdida_y=j;
								}
							}
						
					}
					//borrar posición
					machine_seleccion_x = Buscar_Perdida_x;
					machine_seleccion_y = Buscar_Perdida_y;
					BorrarCelda(Buscar_Perdida_x,Buscar_Perdida_y);
				}
				//sino -> bloquear linea
				else{
					//buscar ficha de la maquina que no bloquea y se borra
					BuscarCelda=false;			
						
						while(BuscarCelda==false){
							x=Math.round(Math.random()*2);
							y=Math.round(Math.random()*2); 
							if(tablero[x][y] == 1 && RevisarBloqueo(x,y)==false) BuscarCelda = true;
						}
						//Borrar celda
						machine_seleccion_x = x;
						machine_seleccion_y = y;
						BorrarCelda(x,y);
					
				}
			}			
			//Pintar casilla
			PintarCelda(Casilla_Final_x,Casilla_Final_y);
			//retornar true
			return true;
		}
		// sino returnar false
		return false;
	}
	//sino retornar false
	return false;

}