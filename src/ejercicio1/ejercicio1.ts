
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}


const persona1 = new Persona("Juan", 22);
const persona2 = new Persona("María", 30);
const persona3 = new Persona("Pedro", 18);

persona1.presentarse();
persona2.presentarse();
persona3.presentarse();
