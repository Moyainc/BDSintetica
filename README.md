# BDSintética

API REST para la gestión de canchas y reservas de una cancha sintética, desarrollada como proyecto académico para un curso de Node.js y MongoDB.

## Descripción

BDSintética es una aplicación backend orientada a la gestión de reservas para una cancha sintética que cuenta con **3 canchas disponibles**.

El proyecto permite gestionar la información de las canchas y registrar reservas, aplicando una regla de negocio fundamental: **no se permite realizar dos reservas para la misma cancha durante el mismo horario**.

La aplicación fue desarrollada utilizando Node.js, Express y MongoDB, siguiendo una estructura organizada mediante controladores, modelos y rutas.

## Tecnologías utilizadas

### Backend

* **Node.js** — Entorno de ejecución de JavaScript.
* **Express** — Framework utilizado para la creación del servidor y la API REST.
* **Mongoose** — ODM utilizado para trabajar con MongoDB.
* **Morgan** — Middleware para el registro de solicitudes HTTP.
* **Body-parser** — Middleware para procesar el contenido de las solicitudes.

### Base de datos

* **MongoDB** — Sistema de gestión de base de datos NoSQL.
* **MongoDB Atlas** — Servicio utilizado para alojar y establecer la conexión con el clúster de MongoDB.
* **MongoDB Compass** — Herramienta utilizada para visualizar y gestionar la base de datos.

### Pruebas de la API

* **Postman** — Utilizado para realizar y verificar las solicitudes HTTP a los diferentes endpoints de la API.

## Estructura del proyecto

```text
BDSintética/
│
├── controllers/
│   └── reservaController.js
│
├── models/
│   ├── cancha.js
│   └── reserva.js
│
├── routes/
│   ├── canchas.js
│   └── reservas.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

### Descripción de las carpetas

* **controllers/** — Contiene la lógica encargada de gestionar las operaciones relacionadas con las reservas.
* **models/** — Contiene los modelos de datos utilizados por MongoDB mediante Mongoose.
* **routes/** — Define las rutas o endpoints disponibles en la API.
* **server.js** — Archivo principal encargado de iniciar y configurar el servidor.

## Gestión de reservas

El sistema cuenta con **3 canchas** disponibles para realizar reservas.

Una de las principales reglas implementadas es la prevención de conflictos de horario:

> Una cancha no puede tener dos reservas que coincidan en el mismo horario.

Antes de registrar una nueva reserva, el sistema verifica si existe otra reserva que genere un conflicto para la misma cancha.

## Pruebas con Postman

Los diferentes métodos y endpoints de la API fueron verificados mediante **Postman**, realizando solicitudes HTTP para comprobar el correcto funcionamiento de las operaciones disponibles.

Entre las pruebas realizadas se encuentran las operaciones relacionadas con la consulta y gestión de canchas y reservas, así como la validación de la regla que impide registrar reservas conflictivas.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Moyainc/BDSintetica.git
```

Ingresar al directorio del proyecto:

```bash
cd BDSintetica
```

Instalar las dependencias:

```bash
npm install
```

# Configuración

El proyecto utiliza variables de entorno para almacenar la información sensible relacionada con la conexión a MongoDB.

Crear un archivo `.env` en la raíz del proyecto:

```env
MONGO_URI=tu_uri_de_mongodb
PORT=3000
```

Reemplazar `MONGO_URI` con la cadena de conexión correspondiente al clúster de MongoDB Atlas.

**Importante:** el archivo `.env` no debe subirse al repositorio, ya que puede contener credenciales o información privada.

##Ejecución

Para iniciar el servidor:

```bash
node server.js
```

Una vez iniciado, la API estará disponible en el puerto configurado.

## Objetivo

Este proyecto fue desarrollado con fines académicos para poner en práctica conceptos relacionados con:

* Desarrollo de APIs REST.
* Node.js y Express.
* Conexión entre aplicaciones backend y MongoDB.
* Modelado de datos mediante Mongoose.
* Creación y organización de rutas y controladores.
* Validación de reglas de negocio.
* Gestión de reservas y prevención de conflictos de horarios.
* Pruebas de endpoints mediante Postman.
* Uso de MongoDB Atlas y MongoDB Compass.

## Autor

**Moyainc**

Proyecto desarrollado como parte de un curso de Node.js y MongoDB.
