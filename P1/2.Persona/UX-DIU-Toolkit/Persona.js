/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.PJ";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Juan Bolívar",
				Photo: "man.jpg",
				Quote: "Vivir hasta que duela",
				Age: 28,
				Occupation: "Funcionario de prisiones",
				Family: "Con pareja desde hace 3 años",
				Location: "Canarias (Las Palmas de Gran Canaria)",
				Character: "Cuidar animales y el rock",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Pasar más tiempo con su pareja Elvira",
						"Conocer más acerca del mundo animal",
						"Explorar nuevas culturas, tanto musicales como sociales"],
				Frustrations: [
					"No saber como llevar una relación a distancia",
				 	"Pasar mas tiempo con sus seres queridos",
					"No conseguir avances en su aprendizaje musical (guitarra)"
				],
				Bio: "Juan es una persona nacida y criada en la provincia de Granada. Pertenece a una familia adinerada, donde su padre es representante de menaje de hostelería y diversos. Su madre es veterinaria aunque se encuentre ya jubilada. Juan ha estudiado un grado superior de auxiliar administrativo y comenzó la carrera de Administración y Dirección de Empresas, la cual no finalizó debido a una gran desilusión sobre lo esperado en la carrera. Tras esto, decidió realizar las oposiciones a funcionario de prisiones en las cuales obtuvo una plaza en las Islas Canarias, por lo que tuvo que mudarse allí. Además tiene una gran pasión por los animales, algo que su madre le inculcó desde su infancia, por lo que decidió pertenecer a una protectora de animales para poder ayudarlos en todo lo que este en su mano. Tiene una gran pasión por el rock y desde los 26 años comenzó a aprender a tocar la guitarra. Por último mantiene una relación de 3 años con Elvira que actualmente estudia y vive en Granada, por lo que su relación actualmente es a distancia desde hace 6 meses.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Pasar más tiempo con sus seres queridos, hacer todo lo posible por mejorar el trato del humano con los animales y conseguir aumentar sus capacidades musicales.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Aliona Ekaterina",
				Photo: "woman.jpg",
				Quote: "Если вы можете мечтать об этом, вы можете это получить (Si lo puedes soñar, lo puedes lograr)",
				Age: 38,
				Occupation: "Costurera",
				Family: "Soltera",
				Location: "Stára Ládoga, Rusia",
				Character: "No tiene ataduras que la aten a su pueblo y tener nuevas experiencias.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Conocer una persona con la que crear una familia",
						"Conocer lugares nuevos", 
						"Aprovechar el tiempo como no lo ha hecho hasta ahora"],
				Frustrations: ["Debido a la pérdida de su única familia, se siente sola",
							   "Tiene la creencia de haber desaprovechado parte de su vida",
							   "Nunca ha tenido un objetivo claro"],
				Bio: "Aliona es una mujer de 38 años que reside actualmente en una pueblo cercano a Stáraya Ládoga(Rusia). Se ha criado en una ambiente muy familiar y protegido, lo que ha produjo una excesiva protección y falta de metas y objetivos en la vida. Tuvo una relación formal a los 25 años, la cual no acabo consolidándose para formar una familia. Alrededor de un año Aliona falleció su madre, el único familiar vivó. Este suceso le aporto una gran herencia familiar, sin embargo le produjo un fuerte vacio existencial que decidió llenar eliminado todas sus ataduras con su pueblo, comenzando a explorar nuevos lugares, experiencias, pensamientos , etc",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "No malgastar el tiempo en cosas innecesarias. Formar una familia y comenzar a ser un poco más egoísta, centrándose un poco más en si misma en lugar de en los demás." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])