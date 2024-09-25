class CuentaBancaria {
    // Atributo estático
    static numeroCuentas = 0
  
    // Constructor para inicializar los atributos
    constructor(saldo, numero) {
      this.saldo = saldo       
      this.numero = numero     
      CuentaBancaria.numeroCuentas++ 
    }
    // Métodos públicos
  
    // Devuelve el saldo actual
    getSaldo() {
      return this.saldo
    }
  
    // Ingresa una cantidad en la cuenta
    ingresar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad
      } else {
        console.log("Cantidad inválida para ingresar.");
      }
    }
  
    // Retira una cantidad de la cuenta
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad
      } else {
        console.log("Cantidad inválida para retirar.")
      }
    }
  
    // Devuelve el número total de cuentas
    static getNumeroCuentas() {
      return CuentaBancaria.numeroCuentas;
    }
  }
  
  // Ejemplo de uso
  let cuenta1 = new CuentaBancaria(1000, "12345");
  console.log(cuenta1.getSaldo());    // 1000
  cuenta1.ingresar(500);
  console.log(cuenta1.getSaldo());    // 1500
  cuenta1.retirar(200);
  console.log(cuenta1.getSaldo());    // 1300
  console.log(CuentaBancaria.getNumeroCuentas()); // 1