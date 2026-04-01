# Middleware de Catálogo y Precios

## Descripción
Microservicio en Node.js que consume una API externa, transforma datos y aplica reglas de negocio.

## Tecnologías
- Node.js
- Express
- Axios
- Dotenv

## Instalación
npm install

## Ejecución
Copiar el archivo `.env.example` y renombrarlo a `.env`
node app.js

## El servidor arrancara en 
http://localhost:3000/api/products

## Endpoint
GET /api/products

## Lógica de negocio
- Se aplica un impuesto del 16% al precio
- Se agrega campo isLowStock (stock < 10)
- Ordenado por precio descendente

## Variables de entorno
API_URL=https://dummyjson.com/products/search?q=phone
PORT=3000

## Ejemplo de respuesta

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "iPhone 13",
      "price": 1000,
      "finalPrice": 1160,
      "stock": 5,
      "brand": "Apple",
      "category": "smartphones",
      "isLowStock": true
    }
  ]
}

## Arquitectura

El proyecto está organizado en capas:

- **Routes:** Define los endpoints
- **Controllers:** Maneja la lógica de entrada/salida
- **Services:** Consume la API externa y procesa datos

Esto permite una mejor separación de responsabilidades y escalabilidad.

## Manejo de errores

- Si la API externa falla, el servicio retorna un arreglo vacío.
- Se registra el error en consola para debugging.
- Se evita que el sistema se caiga (resiliencia).

## Autor

Desarrollado por Alvaro Elihu Rosas Luna