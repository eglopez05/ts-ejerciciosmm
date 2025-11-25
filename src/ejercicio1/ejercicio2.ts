
class Persona {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
class Estudiante extends Persona {
  curso: string;
  constructor(nombre: string, edad: number, curso: string) {
    super(nombre, edad);
    this.curso = curso;
  }
  imprimirCurso() {
    console.log(`Estoy en el curso: ${this.curso}`);
  }
}
const estudiante1 = new Estudiante("Danilo", 20, "Desarrollo de software");
estudiante1.presentarse();     
estudiante1.imprimirCurso();   
