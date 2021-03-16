/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.PJ";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Juan Bolívar",
                Photo: "man.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere pasar tiempo con su pareja, ademas de acercarse al mundo animal",
                touch1: "Ordenador",
                feel1: "4",
                con1: "Coincidir con su pareja y su familia a la vez, además de no tener claro lo que busca en el viaje",
                ima1: "cartoon-writting2.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Buscar herramientas para tomar ideas de que hacer, en base a sitios a los que le gustaría ir",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Tiene demasiadas ofertas a la hora de elegir la página adecuada",
                ima2: "cartoon-PCSurprised.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Buscar el itinerario sobre el lugar al que va a viajar",
                touch3: "Ordenador",
                feel3: "1",
                con3: "No le aparece ningún resultado acorde a lo que debería aparecer en un itinerario completo.",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Una vez encontrada la herramienta para planificar día a día el itinerarios, planificarlo en base a sus gustos.",
                touch4: "Ordenador",
                feel4: "4",
                con4: "Encontrar actividades que sean de su agrado.",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Añadir todas las actividades a realizar durante el viaje.",
                touch5: "Ordenador",
                feel5: "4",
                con5: "No todas las actividades tienen la información suficiente para escogerlas (descripción, precios...)",
                ima5: "cartoon-thinking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Tras realizar el itinerario, buscar una forma de compartir el itinerario con su familia y pareja.",
                touch6: "ordenador",
                feel6: "2",
                con6: "Difícil acceso a la extracción del itinerario. (Poco intuitivo)",
                ima6: "cartoon-looking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Aliona Ekaterina",
				Photo: "woman.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Vivir nuevas experiencias dentro de los lugares que busca visitar",
                touch1: "Móvil",
                feel1: "5",
                con1: "Encontrar alguna plataforma que le permitan realizar esta función.",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar una plataforma/web que le permita realizar un itinerario.",
                touch2: "Móvil",
                feel2: "3",
                con2: "Encontrar la página ideal sin tener un criterio claro.",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Una vez ha entrado en la web, encontrar un itinerario para su destino",
                touch3: "Móvil (interfaz web)",
                feel3: "2",
                con3: "La página no es responsive, no se adapta a las dimensiones de un teléfono móvil, por lo que le es muy complicado de manejar.",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Tras conseguir introducir su localización, la página no ofrece ningún resultado.",
                touch4: "Móvil (interfaz web)",
                feel4: "2",
                con4: "Conseguir localizar donde se encuentra el itinerario que le ofrece la página.",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras no encontrar el itinerario, intenta contactar con un asistente de la plataforma.",
                touch5: "Móvil (interfaz web)",
                feel5: "1",
                con5: "No encuentra la forma de contacto humano o telefónico, solo a través de un formulario.",
                ima5: "cartoon-crying.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Buscar una nueva plataforma en la que diseñar su itinerario de forma más intuitiva y fácil.",
                touch6: "Móvil (interfaz web)",
                feel6: "2",
                con6: "No haber obtenido los resultados adecuados y tener que comenzar de nuevo con el proceso de búsqueda",
                ima6: "cartoon-KO.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



