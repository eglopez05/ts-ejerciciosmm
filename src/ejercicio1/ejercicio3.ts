class CuentaBancaria {
    
    private _saldo: number; 

    constructor(saldoInicial: number = 0) {
        if (saldoInicial < 0) {
            this._saldo = 0; 
            console.error("El saldo inicial no puede ser negativo.");
        } else {
            this._saldo = saldoInicial;
        }
        console.log(`🎉 Cuenta creada con $${this._saldo.toFixed(2)}.`);
    }

    
    public depositar(cantidad: number): void {
        if (cantidad > 0) {
            this._saldo += cantidad; 
            console.log(`✅ Depósito: $${cantidad.toFixed(2)}. Nuevo saldo: $${this._saldo.toFixed(2)}.`);
        } else {
            console.error("Error contraseña incorrecto o saldo en negativo.");
        }
    }

    
    public mostrarSaldo(): number {
        console.log(`💰 Saldo actual: $${this._saldo.toFixed(2)}`);
        return this._saldo;
    }
}


const miCuenta = new CuentaBancaria(100);

miCuenta.mostrarSaldo(); 


miCuenta.depositar(50); 
miCuenta.depositar(20.50); 

console.log("Demostración de proteccion");

miCuenta.depositar(-10); 
miCuenta.mostrarSaldo(); 