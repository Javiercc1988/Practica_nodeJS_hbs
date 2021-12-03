const http = require("http");

http.createServer((request, response) => {

    response.write('Hola Mundo!')
    response.end()// Indicamos al servidor que hemos terminado de responder.

  })
  .listen(8080); // Indicamos el puerto que queremos usar para escuchar el localhost

console.log("Escuchando el puerto:", 8080);
