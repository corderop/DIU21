# DIU21
Prácticas Diseño Interfaces de Usuario 2020-21 (Tema: Turismo) 

Grupo: DIU1_01PJ.  Curso: 2020/21 
Updated: 13/05/2021

**Proyecto**: 

<img width="400" src="./P3/imagenes/tranger.png" />

**Descripción**: 

Nuestro proyecto llamado Tranger consiste en una plataforma de creación de itinerarios alternativos. Dichos itinerarios pueden ser de diferentes temáticas(cultural, gastronómicos,deportivos,etc) , además se proporcionará una comunidad de la plataforma para consultar las experiencias de los usuarios en estos itinerarios o actividades. Por último se proporciona un guía turístico nativo del lugar que se visita para proporcionar una expercienca más intima y formativa de la actividad.

**Conoce nuestro trabajo**

https://user-images.githubusercontent.com/31637109/118174813-95864780-b42f-11eb-8f3d-2a631d21447e.mp4

Miembros
 * :bust_in_silhouette: Pablo Cordero Romero :octocat: [corderop](https://github.com/corderop)     
 * :bust_in_silhouette: Jairo Luis Abril Moya :octocat: [JairoLuisAbrilMoya](https://github.com/JairoLuisAbrilMoya)

----- 


# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

En primer lugar, pensamos en analizar la competencia en base a distintas aplicaciones, comparándolas con una de las que más llamativas de cara al usuario y la cual ofrecía algo diferente a su competencia. Esta era **Inspirock**, de la cuál nos gustó que estaba basa en la creación de itinerarios en un determinado lugar y durante unas fechas. 

[Pulsa aquí para ver como hemos analizado las diferentes alternativas](./P1/1.CompetitorAnalysis/Tabla_competitorAnalysis.png)

![Método UX](img/Persona.png) 1.b Persona
-----

Para analizar la plataforma anteriormente mencionada decidimos plantear dos tipos de personas que podrían interesarse y tener confrontaciones con el uso de la aplicación. Planteamos dos personas ficticias: Juan Bolívar y Aliona Ekaterina.

[Pulsa aquí para ver las características de Juan Bolívar](./P1/2.Persona/persona_hombre.png)

[Pulsa aquí para ver las características de Aliona Ekaterina](./P1/2.Persona/persona_mujer.png)

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

Tras plantear los dos personas, queríamos realizar una simulación de uso de estas personas en la aplicación Inspirock. Hemos querido localizar los puntos débiles y puntos fuertes del funcionamiento y diseño de esta y de dicha forma plantear una mejor solución, evitando los errores de esta.

[Pulsa aquí para ver el Journey Map de Juan Bolívar](./P1/3.JourneyMaps/journeyMap_man.png)

[Pulsa aquí para ver el Journey Map de Aliona Ekaterina](./P1/3.JourneyMaps/journeyMap_woman.png)

![Método UX](img/usabilityReview.png) 1.d Usability Review
----

Una de las cosas más importantes del diseño de una aplicación debe ser como de usable es esta aplicación de cara a diferentes puntos claves. Bajo un análisis de estándares de usabilidad, hemos llegado a la conclusión de que **Inspirock** no es aplicación perfecta en cuanto experiencia de usuario, pero cumple bastante bien con lo esencial, encontrándola bastante equilibrada. 

**Valoración final de Inspirock**: 70/100

[Pulsa aquí para ver el documento de review de usabilidad](./P1/Usability-review-realizado.pdf)

## Paso 2. UX Design  

![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid / EMpathy map / POV
----

### Idea de proyecto en base a lo analizado 

En base a los resultados obtenidos tras el análisis, hemos encontrado una línea de trabajo a seguir en el planteamiento de **Tranger**, nuestra propuesta de aplicación, sobre algunas ideas de las aplicaciones analizadas, a partir de las cuales crear nuevas propuestas para nuestra aplicación.

#### Malla receptora de información 

En ella presentamos una planteamiento visual sobre las principales ideas que queremos potenciar y mejorar de las alternativas previas, además de proponer nuevas para el tipo de aplicación que buscamos conseguir.

[Pulsa aquí para ver la malla receptora completa](./P2/recursos/malla-receptora.png)

#### Mapa de empatía

A continuación, hemos realizar un análisis sobre los intereses que tendrán los personajes ficticios previamente propuestos, conforme a nuestra propuesta de aplicación.

[Pulsa aquí para ver los mapas de empatía más detalladamente](./P2#mapa-de-empatía)

![Método UX](img/ScopeCanvas.png) 2.b ScopeCanvas
----

A partir de las ideas planteadas, buscamos llevarlas más al mundo real encontrando las necesidades que pueden surgir, los propósitos que nos tomamos en base a estas, cuales serán nuestros objetivos de cara al diseño de la aplicación y como esto se llevará a la realidad en **Tranger**.

![](./P2/recursos/propuesta-de-valor.png)


![Método UX](img/Sitemap.png) 2.b Análisis de funcionalidades
-----

Una vez definido las ideas a seguir para realizar la aplicación, definimos las principales funcionalides de nuestra aplicación, conociendo los principales puntos a trabajar en nuestra app. También definimos como de importantes y prioritarias son cada una de estas. 

Tras un análisis de todas estas actividades hemos determinado que las funcionalidades más importantes son las relacionadas con las gestión de itinerarios, como es su creación, adición de actividades, etc. 

[Pulsa aquí para ver las funcionalidades junto con su importancia](P2#task-analysis)

![Método UX](img/labelling.png) 2.c Secciones del sitio y conceptos principales
----

Una vez teníamos las funcionalidades queríamos definir la estructura de estas para crear una visión sólida de toda la aplicación y los flujos de uso de esta.

![](./P2/recursos/sitemap.png)

Con las funcionalidades y las estructura de estas, decidimos definir aspectos importantes de nuestra aplicación de cara a simplificar o facilitar la comprensión de dichas ideas dentro de nuestro diseño. Los conceptos más importantes son:


| **Etiqueta**    | **Objetivo**                                                                                                                                                                                              |
|:---------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Comunidad       | Aquí se encontrarán todos los itinerarios creados por otras personas junto con sus valoraciones. Se podrán copiar para tratarlos como uno propio en la sección de itinerarios.                            |
| Itinerario      | Conjunto de actividades a realizar en un viaje o visita a un lugar o localización.                                                                                                                        |
| Actividades     | Actividad realizada en un itinerario. Podrían ser eventos, lugares a visitar, planes...                                                                                                                   |
| Ayuda           | Apartado que proporciona una opción de consulta sobre dudas de nuestra plataforma o incluso guía del uso de ella.                                                                                         |
| Opinión         | Comentario escrito sin puntuación de un usuario acerca de un itinerario completo, enfocado a que se compartan experiencias entre usuarios.                                                                |
| Valorar         | Acción que permite obtener una ponderación del nivel de satisfacción del usuario dentro de la actividad, se realiza principalmente con un sistema de estrellas (1 estrella= malo; 5 estrellas=muy bueno). |
| Guía turística  | Guía acerca de una actividad, disponible en audio y texto, para ofrecer al usuario una mejor experiencia realizando esta actividad.                                                                       |
| Tutorial de uso | Indicaciones en pantalla para el usuario sobre las diferentes secciones y acciones principales de la app.                                                                                                 |
| Temática        | Clasificación del itinerario o actividad según su tipo o hacia quien esté orientada. Algunos ejemplos son: gastronómico, arquitectónico, cultural...                                                      |
| Reservar        | Indicar una fecha para realizar esa actividad, para que esta sea reservada por los organizadores.                                                                                                         |
| Registro        | Acción para la creación de un usuario. A este se le solicitará el correo electrónico, así como una contraseña para acceder.                                                                               |


![Método UX](img/Wireframes.png) 2.d Wireframes
-----

Para plasmar la idea de como sería nuestra aplicación creamos unos bocetos que muestra como queremos enfocar el resultado final.

#### Inicio y login

![](./P2/recursos/bocetos/bocetos1.png)

#### Itinerario

![](./P2/recursos/bocetos/bocetos2.png)

#### Actividades

![](./P2/recursos/bocetos/bocetos3.png)

#### Ayuda

![](./P2/recursos/bocetos/bocetos4.png)

#### Comunidad

![](./P2/recursos/bocetos/bocetos5.png)

## Paso 3. Mi UX-Case Study (diseño)


![Método UX](img/moodboard.png) 3.a Moodboard
-----

Para el logotipo hemos querido utilizar el color principal planteador en el [diseño visual](./P3/imagenes/moodboard.png) y hacerlo sobre un fondo sólido. Esto entre otras cosas nos permitirá adaptarlo a diferentes formatos y resoluciones, así como usarlo en negativo. Por otra parte, quisimos reflejar en el la temática de la aplicación representando la forma de un país en él. 

![Método UX](img/landing-page.png)  3.b Landing Page
----

La captación de nuevos clientes la planteamos mediante una landing page, que podrá utilizarse en varios ámbitos, buscando clientes indecisos o aquellos que no conocen la aplicación. 

![](P3/imagenes/Landingpage.png)

![Método UX](img/guidelines.png) 3.c Guidelines
----

Hemos querido enfocar la aplicación a dispositivos móviles, ya que con el auge de la telefonía móvil, sería mucho más fácil llegar a un público más amplio. Para esto hemos seguido patrones altemente probados en móviles como son los presentados por Google con [Material Design](https://material.io/), centrándonos principalmente en estos dispositivos y en como son usados.

[Pulsa aquí para ver en más detalle los guidelines seguidos](./P3#patrones-de-diseño-y-guidelines)

![Método UX](img/mockup.png)  3.d Mockup
----

Siguiendo los patrones de diseño y las ideas planteadas en todo el proceso, hemos realizado unos mockups que permitirán guiar una fase de desarrollo posterior. Esta es la primera alternativa de diseño presentada de los principales componentes de la aplicación:

|                  |                   |                   |                   |
|------------------|-------------------|-------------------|-------------------|
![](P3/imagenes/layout/1.png) | ![](P3/imagenes/layout/2.png) | ![](P3/imagenes/layout/3.png) | ![](P3/imagenes/layout/4.png) |
![](P3/imagenes/layout/5.png) | ![](P3/imagenes/layout/6.png) | ![](P3/imagenes/layout/7.png) | ![](P3/imagenes/layout/8.png) |

3.e Case Study
----

Puedes obtener una visión más reducida (136 segundos) de nuestro estudio y de **Tranger** en el siguiente video: 

https://user-images.githubusercontent.com/31637109/118174813-95864780-b42f-11eb-8f3d-2a631d21447e.mp4


## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Caso asignado
----

[Senderismo Gastronómico en Granada](https://github.com/MiguelangelX72/DIU21/) es una aplicación para buscar trayectos guiados de senderismo por Granada. No solo trata de senderismo, si no que combina esto con paradas gastronómicas en bares de la zona. En base a una ruta, permite reservar los bares a los que se va a ir. Entre otras características, permite llevar un control calórico, tanto de la ruta como de las comidas realizadas. Permite realizar pagos antes de visitar los lugares y está adaptada para diferentes idiomas.

![Método UX](img/usability-testing.png) 4.b User Testing
----

Hemos seleccionado a 4 personas distinas, generadas de forma aleatoria:
 

| #id.usuario | Sexo/edad | Ocupación         | Experiencia internet | Plataforma         | Perfil cubierto                    | TEST | SUS score |
|-------------|-----------|-------------------|----------------------|--------------------|------------------------------------|------|-----------|
| 352         | Hombre    | Desempleado       | Media                | Windows / Android  | Amigable, Fotógrafo, Asustado      | A    | 75        |
| 533         | Mujer     | Comercial         | Media                | Windows/ Iphone    | Trabajadora, Bailar, Feliz         | A    | 80        |
| 221         | Mujer     | Jubilada          | Baja                 | Windows / Android  | Familiar,  Hablar idioma, Enfadada | B    | 50        |
| 515         | Hombre    | Director de banco | Alta                 | Mac / Iphone       | Trabajador, estudiar, disgustado   | B    | 70        |


![Método UX](img/Survey.png). 4.c Cuestionario SUS
----

**Caso A**

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

Con una puntuación media de **77.5**, entraría dentro del apartado de bueno de la [escala utilizada en el análisis](./P4/sus-scale-adj.jpg). Esto nos hacer ver que el diseño es correcto pero tiene algunos apartados por pulir. El diseño es correcto pero se debería buscar diseños más fáciles de comprender para el usuario, aumentando así la comodidad de la visita a la plataforma, buscando alternativas más cotidianas para el usuario.

**Caso B**

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

Con una puntuación media de **60**, entraría dentro del apartado de *OK*. Esto nos hace ver que el diseño no es malo pero tiene varios puntos que corregir. Estos puntos están explicados detalladamente en la [documentación del análisis](./P4).


![Método UX](img/usability-report.png) 4.d Usability Report
----

Para el caso B se ha realizado un [informe de usabilidad](./Usability-test.pdf)

Con las puntuaciones obtenidas, se considera mejor propuesta a Caso 1 "Tranger" con una puntuación de 77,5 mientras que el  Caso 2 "Senderismo Grastronómico en Granada" tendría una puntuación de 60. Aunque esto puede deberse también al tipo de usuario usado para el test A/B, ya que la muestra de usuarios es pequeña, bajo nuestro punto de vista la aplicación A tiene un mejor diseño e idea de proyecto, ya que la función que se propone en la aplicación B es un tipo de tarea común dentro de muchos foros de interés sobre senderismo.

Además hemos visualizado varios errores de diseño que podrían llevar al usuario a un mal uso o confusión dentro de la aplicacíón. Otra cosa a destacar es que el mercado al que va dirigida la propuesta B es muy reducido debido a que, como su nombre indica, solo está dirigida a gente de Granada.


## Paso 5. Evaluación de Accesibilidad  


![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report 
----

>>> Indica qué pretendes evaluar (de accesibilidad) sobre qué APP y qué resultados has obtenido 

>>> 5.a) Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 
>>> 5.b) Uso de simuladores de accesibilidad 

>>> (uso de tabla de datos, indicar herramientas usadas) 

>>> 5.c Breve resumen del estudio de accesibilidad (de práctica 1) y puntos fuertes y de mejora de los criterios de accesibilidad de tu diseño propuesto en Práctica 4.



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  













