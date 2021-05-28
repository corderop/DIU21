# DIU - Practica 4, entregables

Para realizar evaluar el diseño de dos tipos de proyectos diferentes cuyas ideas principales es semejante, hemos decidido realizar un A/B testing con la simulación de dos personas ficticias. Esta simulación se ha hecho con personas semejantes a estas aplicando una serie de tareas y finalmente realizando un cuestionario SUS a estas, con el objetivo de obtener una puntuación mediante la cual se pueda evaluar cada una de las alternativas. 

## Caso 1

El primero de los casos es el nuestro propio, la aplicación **Tranger**. Para esta hemos creado dos personas ficticias de forma aleatoria. A partir de estas creaciones, hemos buscado personas con perfiles parecidos, para aplicar el proceso.

| #id.usuario | Sexo/edad | Ocupación         | Experiencia internet | Plataforma         | Perfil cubierto                    | TEST | SUS score |
|-------------|-----------|-------------------|----------------------|--------------------|------------------------------------|------|-----------|
| 352         | Hombre    | Desempleado       | Media                | Windows / Android  | Amigable, Fotógrafo, Asustado      | A    | 75        |
| 533         | Mujer     | Comercial         | Media                | Windows/ Iphone    | Trabajadora, Bailar, Feliz         | A    | 80        |

Para la evaluación, las tareas propuestas a realizar por el usuario son las siguientes: 

- Registro e inicio de sesión
- Búsqueda de un itinerario de un tema específico
- Duplicación de un itinerario
- Consulta de opiniones
- Solicitud de ayuda

| Participant      | Task 1 | Task 2 | Task 3 | Task 4 | Task 5 |
|------------------|:------:|:------:|:------:|:------:|:------:|
|         1        |    √   |   √    |    -   |   √    |    -   |
|         2        |    √   |   √    |    √   |   √    |    √   |
|      Success     |    2   |    2   |    1   |    2   |   1    |
| Completion Rates |  100%  |  100%  |  50%  |   100%  |   50%  |

Una vez realizadas las tareas realizamos se le aplica el cuestionario SUS a los usuarios, obteniendo los resultados siguientes:

|    | PREGUNTAS                                                                                |  1 | 2 | 3 | 4 | 5 |
|----|------------------------------------------------------------------------------------------|:--:|:-:|:-:|:-:|:-:|
| 1  | Creo que me gustará visitar con frecuencia este website                                  |    |   | 1 | 1 |   |
| 2  | Encontré el website innecesariamente complejo                                            |  1 | 1 |   |   |   |
| 3  | Pensé que era fácil utilizar este website                                                |    |   |   | 1 | 1 |
| 4  | Creo que necesitaría del apoyo de un experto para recorrer el website                    |    | 1 |   | 1 |   |
| 5  | Encontré las funciones del website bastante bien integradas                              |    |   |   | 2 |   |
| 6  | Pensé que había demasiada inconsistencia en el website                                   |    | 2 |   |   |   |
| 7  | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |    |   | 1 |   | 1 |
| 8  | Encontré el website muy grande al recorrerlo                                             |  1 | 1 |   |   |   |
| 9  | Me sentí muy confiado en el manejo del website                                           |    |   | 1 | 1 |   |
| 10 | Necesito aprender muchas cosas antes de manejarme en el website                          |    | 2 |   |   |   |
|    |                                                                         Valoración final | 77.5 |   |   |   |   |

A la hora de analizar los resultados hemos decidido utilizar la escala *Adjective* debido a que es una escala no demasiado exigente para ver buenos resultados, y que permite separar buenos resultados de excelentes, al igual que malos de nefastos. Se puede ver un nivel de estudio más específico utilizando esta escala.  

![escala sus](./sus-scale-adj.jpg)

Con una puntuación media de **77.5**, entraría dentro del apartado de bueno. Esto nos hacer ver que el diseño es correcto pero tiene algunos apartados por pulir. El diseño es correcto pero se debería buscar diseños más fáciles de comprender para el usuario, aumentando así la comodidad de la visita a la plataforma, buscando alternativas más cotidianas para el usuario.

## Caso 2

El análisis del caso B será del producto [**Senderismo Gastronómico en Granada**](https://github.com/MiguelangelX72/DIU21/). Al igual que en el caso anterior, hemos creado dos personas ficticias de forma aleatoria. A partir de estas creaciones, hemos buscado personas con perfiles parecidos, para aplicar el proceso. 

| #id.usuario | Sexo/edad | Ocupación         | Experiencia internet | Plataforma         | Perfil cubierto                    | TEST | SUS score |
|-------------|-----------|-------------------|----------------------|--------------------|------------------------------------|------|-----------|
| 221         | Mujer     | Jubilada          | Baja                 | Windows / Android  | Familiar,  Hablar idioma, Enfadada | B    | 50        |
| 515         | Hombre    | Director de banco | Alta                 | Mac / Iphone       | Trabajador, estudiar, disgustado   | B    | 70        |

Para la evaluación, las tareas propuestas a realizar por el usuario son las siguientes: 

- Registro e inicio de sesión en la página
- Búsqueda de una ruta específica
- Reserva de bares alrededor de la ruta (caso 2)
- Solicitud de ayuda en la página
- Cancelación de una reserva.

| Participant      | Task 1 | Task 2 | Task 3 | Task 4 | Task 5 |
|------------------|:------:|:------:|:------:|:------:|:------:|
|         1        |    √   |   √    |    -   |   √    |    -   |
|         2        |    √   |   √    |    √   |   √    |    √   |
|      Success     |    2   |    2   |    1   |    2   |   1    |
| Completion Rates |  100%  |  100%  |  50%  |   100%  |   50%  |

Una vez realizadas las tareas realizamos se le aplica el cuestionario SUS a los usuarios, obteniendo los resultados siguientes:

|    | PREGUNTAS                                                                                |  1 | 2 | 3 | 4 | 5 |
|----|------------------------------------------------------------------------------------------|:--:|:-:|:-:|:-:|:-:|
| 1  | Creo que me gustará visitar con frecuencia este website                                  |    | 1 |   | 1 |   |
| 2  | Encontré el website innecesariamente complejo                                            |  1 |   | 1 |   |   |
| 3  | Pensé que era fácil utilizar este website                                                |    |   | 1 | 1 |   |
| 4  | Creo que necesitaría del apoyo de un experto para recorrer el website                    |  1 | 1 |   |   |   |
| 5  | Encontré las funciones del website bastante bien integradas                              |    | 2 |   |   |   |
| 6  | Pensé que había demasiada inconsistencia en el website                                   |    |   | 2 |   |   |
| 7  | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |    |   |   | 2 |   |
| 8  | Encontré el website muy grande al recorrerlo                                             |    |   |   | 2 |   |
| 9  | Me sentí muy confiado en el manejo del website                                           |    |   |   | 2 |   |
| 10 | Necesito aprender muchas cosas antes de manejarme en el website                          |  1 |   |   |   |   |
|    |                                                                         Valoración final | 60 |   |   |   |   |

A la hora de analizar los resultados hemos decidido utilizar la escala *Adjective* debido a que es una escala no demasiado exigente para ver buenos resultados, y que permite separar buenos resultados de excelentes, al igual que malos de nefastos. Se puede ver un nivel de estudio más específico utilizando esta escala.  

![escala sus](./sus-scale-adj.jpg)

Con una puntuación media de **60**, entraría dentro del apartado de *OK*. Esto nos hace ver que el diseño no es malo pero tiene varios puntos que corregir.

En primer lugar, ambos usuarios han destacado que algunas funciones de la plataforma no están suficientemente especificadas como por ejemplo el apartado de “Carrito de la Compra”. Debido a que no se realiza ninguna acción de comprar dentro de la aplicación sino acciones de reserva.

Además los usuarios han destacado negativamente el que la aplicación sea demasiado extensa en su recorrido. En lugar de recomendar bares y rutas en la página inicial, bajo nuestro punto de vista se podrían proponer los bares  tras la selección de las rutas. Además se podría eliminar algunos de los componentes, como por ejemplo el siempre mostrado título de la aplicación y su logo.

Por último, hemos detectado un problema con los colores del diseño de la aplicación. Debido a que no se muestra una armonía o “encaje” entre las diferentes gamas de colores que se usan.

A parte de estos problemas hemos considerado que es un app bastante completa y bien diseñada, aunque como todo proyecto siempre se pueden pulir determinados detalles.

Para este caso se ha realizado un [informe de usabilidad](./Usability-test.pdf)

## Conclusiones

Creemos que la propuesta B necesita mejorar algunos aspectos, como evitar la sobrecarga de información en la plataforma, aclarar los apartados dentro de la aplicación y buscar una mejor armonía de colores, aunque consideramos que la aplicación tiene un gran potencial, por su idea de negocio y planteamiento de diseño con respecto a otras alternativas actuales. 
