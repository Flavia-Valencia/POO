class ConversionTemperatura {
    constructor(temperatura, escala) {
        this.temperatura = temperatura;
        this.escala = escala;

    }

    fahrenheitAcelsius(){
        return ((this.temperatura - 32) * 5 / 9).toFixed(2);
    }
    celsiusAfahrenheit(){
        return ((this.temperatura * 9 / 5) + 32).toFixed(2);
    }
    kelvinAfahrenheit(){
        return ((this.temperatura - 273.15) * 9 / 5 + 32).toFixed(2);
    }
    kelvinAcelsius(){
        return (this.temperatura - 273.15).toFixed(2);
    }

    convertir() {
        switch (this.escala) {
            case "fahrenheit":
                console.log(`${this.temperatura}°F en Celsius: ${this.fahrenheitAcelsius()}°C`);
                break;
            case "celsius":
                console.log(`${this.temperatura}°C en Fahrenheit: ${this.celsiusAfahrenheit()}°F`);
                break;
            case "kelvin":
                console.log(`${this.temperatura}K en Fahrenheit: ${this.kelvinAfahrenheit()}°F`);
                console.log(`${this.temperatura}K en Celsius: ${this.kelvinAcelsius()}°C`);
                break;
            default:
                console.log("Escala no valida");
        }
    }
}


const temperatura1 = new ConversionTemperatura(100, "fahrenheit");
const temperatura2 = new ConversionTemperatura(40, "celsius");
const temperatura3 = new ConversionTemperatura(400, "kelvin");
const temperatura4 = new ConversionTemperatura(26,"Hola")

temperatura1.convertir();
temperatura2.convertir();
temperatura3.convertir();
temperatura4.convertir();