class Arthur{
    constructor(enfermedad){
        this.enfermedad = enfermedad
    }

    enfermedin(){
        return console.log(`${this.enfermedad} es un personaje de viedeojuegos`);
    }
}

class arthurcap2 extends Arthur{
    enfermedin(){
        return console.log(`arthur cobra un dinero y contrae ${this.enfermedad}`);
    }
}

class arthurcap6 extends Arthur{
    enfermedin(){
        return console.log(`arthur se muere debido a el  ${this.enfermedad}`);
    }
}
 

let tuberculosis = new arthurcap2(`tuberculosis`);
let tuberculosis_avanzado = new arthurcap6(`tuberculosis avanzado`);
tuberculosis.enfermedin();
tuberculosis_avanzado.enfermedin();