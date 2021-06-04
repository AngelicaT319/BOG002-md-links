const mdLinks = require("./index");

 function leerArchivos (rutaArchivo){
   mdLinks.api.leerArchivos(rutaArchivo)
  .then((links) => {
     console.log(links);
  })
  .catch(console.error);
 }

function validateLinks (rutaArchivo, validate){
  mdLinks.api.leerArchivos(rutaArchivo, validate)
  .then((links) => {
    mdLinks.api.validateLinks(links).then((result) => {
      console.log(result);
    });
  })
  .catch(console.error);
}

function irDirectorio (ruta){
  mdLinks.api.irDirectorio(ruta)
  .then((links) => {
    console.log(links);
    
  })
  .catch(console.error);
}

function statusLinks (rutaArchivo, validate){
  mdLinks.api.leerArchivos(rutaArchivo, validate)
  .then((links) => {
    mdLinks.api.validateLinks(links).then((result) => {
      console.log(mdLinks.api.statusLinks(result));
    });
  })
  .catch(console.error);
}

module.exports.irDirectorio = irDirectorio;
module.exports.validateLinks = validateLinks;
module.exports.statusLinks = statusLinks;