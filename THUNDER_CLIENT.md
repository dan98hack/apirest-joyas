# Uso de Thunder Client con la API de Joyas

## Introducción

Este documento explica cómo utilizar la extensión Thunder Client de VS Code para probar la API REST de joyas. Thunder Client es una herramienta ligera para realizar pruebas de API directamente desde VS Code, similar a Postman pero integrada en el editor.

## Requisitos previos

1. Tener instalado VS Code
2. Instalar la extensión Thunder Client desde el marketplace de VS Code
3. Tener el servidor de la API en ejecución (`npm run dev`)

## Importar la colección

1. Abre VS Code
2. Haz clic en el icono de Thunder Client en la barra lateral izquierda
3. Haz clic en "Collections" en el panel de Thunder Client
4. Haz clic en el botón de importar (flecha hacia abajo)
5. Selecciona el archivo `thunder-collection_API Joyas.json` de este proyecto

## Endpoints disponibles en la colección

La colección incluye ejemplos para todos los endpoints de la API:

### 1. Obtener todas las joyas
- **Método**: GET
- **URL**: http://localhost:3000/joyas
- **Descripción**: Devuelve todas las joyas disponibles en la base de datos

### 2. Agregar nueva joya
- **Método**: POST
- **URL**: http://localhost:3000/joyas
- **Headers**: Content-Type: application/json
- **Body**:
  ```json
  {
    "nombre": "Anillo de Oro",
    "descripcion": "Anillo de oro de 18 quilates con diamante",
    "precio": 1200,
    "peso": 5.5,
    "stock": 10
  }
  ```
- **Descripción**: Agrega una nueva joya a la base de datos

### 3. Buscar joya por nombre
- **Método**: GET
- **URL**: http://localhost:3000/joyas/nombre/Anillo de Oro
- **Descripción**: Busca una joya específica por su nombre

### 4. Actualizar joya por nombre
- **Método**: PUT
- **URL**: http://localhost:3000/joyas/nombre/Anillo de Oro
- **Headers**: Content-Type: application/json
- **Body**:
  ```json
  {
    "datosActualizados": {
      "precio": 1500,
      "stock": 15
    }
  }
  ```
- **Descripción**: Actualiza los datos de una joya existente

### 5. Eliminar joya por nombre
- **Método**: DELETE
- **URL**: http://localhost:3000/joyas/nombre/Anillo de Oro
- **Descripción**: Elimina una joya de la base de datos

## Consejos para usar Thunder Client

1. **Variables de entorno**: Puedes crear variables de entorno para almacenar la URL base y reutilizarla en todas las solicitudes.

2. **Pruebas automatizadas**: Thunder Client permite agregar pruebas para verificar respuestas, códigos de estado, etc.

3. **Organización**: Puedes organizar tus solicitudes en carpetas para mantener todo ordenado.

4. **Historial**: Thunder Client guarda un historial de tus solicitudes recientes para facilitar el acceso.

## Solución de problemas comunes

- **Error de conexión**: Asegúrate de que el servidor esté en ejecución con `npm run dev`
- **Error 404**: Verifica que las rutas sean correctas
- **Error en el cuerpo de la solicitud**: Asegúrate de que el JSON sea válido y tenga todos los campos requeridos