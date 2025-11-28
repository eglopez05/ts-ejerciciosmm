class Auto {

    acelerar(velocidadActual: number, incremento: number): number {
        return velocidadActual + incremento;
    }

    frenar(velocidadActual: number, decremento: number): number {
        let nueva = velocidadActual - decremento;
        return nueva < 0 ? 0 : nueva;
    }

    recorrer(distancia: number, tiempo: number): number {
        return distancia / tiempo;
    }
}
