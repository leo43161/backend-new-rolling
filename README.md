# Backend Rolling News

Rolling News es el proyecto final de los alumnos del curso FullStack de Rolling Code School.
El proyecto consiste en la creacion de un sitio web sobre noticias, el BackEnd tiene que proveer de informacion al FrontEnd y ademas de controlar altas, bajas, modificaciones y guardarlas en la base de datos.

# Autores
### August Fercar<br/>
### Fabri Oller<br/>
### Franco Luna<br/>
### Hernan Sanchez<br/>
### Leonardo Palavecino<br/>
### Mariana Granara<br/>

## Autores
August Fercar<br/>
Fabri Oller<br/>
Franco Luna<br/>
Hernan Sanchez<br/>
Leonardo Palavecino<br/>
Mariana Granara<br/>


## Pasos para clonar el repositorio, todos los comandos van sin comillas!!

### 1. `Primero paso`

Ejecutar 'git clone https://github.com/leo43161/backend-new-rolling.git' en su terminal 

### 2. `Segundo paso`

Ejecutar 'npm install' tambien en la terminal

### 3. `Tercer paso`

Para correr el proyecto usar 'npm start'

## Scripts disponibles

En el proyecto puede ejecutar los siguientes comandos:

### `npm install`

Se debera intalar todas las dependencias necesarias para el correcto funcionamiento del codigo utilizando dicho comando.

### `npm run dev` 

Este comando inicia el proyecto en la terminal.<br/>

Inicia el puerto, los midleware, se conecta con la base de datos y observa los cambios e informa de errores.

### `npm run start`

Ejecuta el proyecto iniciandolo en el puerto 4000, ejecuntado los middlewares y conectandose con la base de datos 


## Consultal API disponibles

Aquí se listaran las direcciones que se deben utilizar para poder extraer la informacion de la base de datos:

### USUARIOS

- **Para traer** los usuario se debe utilizar el metodo *GET* en: *`https://rolling-news.herokuapp.com/users`*

- **Para agregar** un usuario se debe utilizar el metodo *POST* en: *`https://rolling-news.herokuapp.com/users/singup`*

- **Para hacer un login** a un usuario se debe utilizar el metodo *POST* en: *`https://rolling-news.herokuapp.com/users/singin`*

## NOTICIAS GENERALES y NOTICIAS DESTACADAS

- **Para traer** todas las noticias se debe utilizar el metodo *GET* en: *`https://rolling-news.herokuapp.com/news`*

- **Para agregar** una noticia se debe utilizar el metodo *POST* en: *`https://rolling-news.herokuapp.com/news`*

-------------------------------

- **Para editar** una noticia se debe utilizar el metodo *PUT* en: *`https://rolling-news.herokuapp.com/news/{_id de noticia}`*

- **Para traer** una noticia se debe utilizar el metodo *GET* en: *`https://rolling-news.herokuapp.com/news/{_id de noticia}`*

- **Para eliminar** una noticia se debe utilizar el metodo *DELETE* en: *`https://rolling-news.herokuapp.com/news/{_id de noticia}`*

## CATEGORIAS

- **Para traer** todas las categorias se debe utilizar el metodo *GET* en: *`https://rolling-news.herokuapp.com/categorias`*

- **Para agregar** a categorias se debe utilizar el metodo *POST* en: *`https://rolling-news.herokuapp.com/categorias`*

-------------------------------

- **Para editar** una categoria se debe utilizar el metodo *PUT* en: *`https://rolling-news.herokuapp.com/categorias/{_id de categoria}`*

- **Para traer** una categoria se debe utilizar el metodo *GET* en: *`https://rolling-news.herokuapp.com/categorias/{_id de categoria}`*

- **Para eliminar** una categoria se debe utilizar el metodo *DELETE* en: *`https://rolling-news.herokuapp.com/categorias/{_id de categoria}`*