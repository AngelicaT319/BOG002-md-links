const { default: axios } = require("axios");
const mdLinks = require("../index.js");

describe("mdlinks", () => {
  it("mdlinks es una funcion", () => {
    expect(typeof mdLinks).toBe("object");
  });
});

test("Resuelve en un array con la data del archivo", () => {
  return mdLinks.api.leerArchivos("./prueba.md").then((data) => {
    expect(data).toStrictEqual([
      {
        path: "./prueba.md",
        link: "https://github.com/hola-workshopper/learnyounode",
        text: "learnyounode",
      },
      {
        path: "./prueba.md",
        link: "https://docs.npmjs.com/getting-started/what-is-npm",
        text: "NPM",
      },
      {
        path: "./prueba.md",
        link: "https://docs.npmjs.com/getting-started/what-is-npm",
        text: "NPM",
      },
    ]);
  });
});

// describe("mdLinks", () =>{
//   test("deberia mostrar el numero de archivos", ()=>{
//     expect(mdLinks.api.statusLinks([1])).toStrictEqual(1)
//   })  
// })
 jest.mock("axios");
 it("Deberia retornar status links", ()=>{
const resp = [{element: status}];

axios.get.mockResolvedValue(resp);

return status.All().then(data => expect(data).toEqual(status));
 }) 

