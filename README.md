# API REST de Joyas

API REST desarrollada con Node.js, Express y MongoDB para gestionar un inventario de joyas.

## Descripción

Este proyecto implementa una API REST que permite realizar operaciones CRUD sobre una colección de joyas almacenadas en una base de datos MongoDB.

## Características

- Consulta de todas las joyas disponibles
- Agregar nuevas joyas al inventario
- Buscar joyas por diferentes criterios
- Eliminar joyas del inventario

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Instalación

1. Clonar el repositorio:
   ```
   git clone https://github.com/tu-usuario/apirest-joyas.git
   cd apirest-joyas
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Configurar la base de datos:
   - Asegúrate de tener MongoDB instalado y en ejecución
   - Modifica el archivo `app/config/configuracion.js` con tus datos de conexión

4. Iniciar el servidor:
   ```
   npm run dev
   ```

## Endpoints

- `GET /joyas`: Obtiene todas las joyas
- `POST /joyas`: Agrega una nueva joya
- `GET /joyas/:key/:value`: Busca una joya por un criterio específico
- `DELETE /joyas/:key/:value`: Elimina una joya por un criterio específico

## Autor

Daniel Alexander Lopez Urrutia

## Licencia

ISC