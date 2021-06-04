const mdLinks = require('../md-links');


describe('mdLinks', () => {
  expect(typeof mdLinks).toBe(Object)

  // it('debe leer un archivo', () => {    
  //   return expect(mdLinks.leerArchivos("./prueba.md")).resolves.toBe([
  //     {
  //       path: './prueba.md',
  //       link: 'https://github.com/hola-workshopper/learnyounode',
  //       text: 'learnyounode'
  //     },
  //     {
  //       path: './prueba.md',
  //       link: 'https://docs.npmjs.com/getting-started/what-is-npm',
  //       text: 'NPM'
  //     },
  //     {
  //       path: './prueba.md',
  //       link: 'https://docs.npmjs.com/getting-started/what-is-npm',
  //       text: 'NPM'
  //     }
  //   ])
  //  });

});
