class persona3{
    constructor(nombre, persona){
        this.nombre = nombre
        this.persona = persona
    }

    protin(){
        return console.log(`${this.nombre} es un personaje de viedeojuegos`);
    }
}

class personin3 extends persona3{
    protin(){
        return console.log(`${this.nombre} se enfrenta a nix con el persona ${this.persona}`);
    }
}

class personon3 extends persona3{
    protin(){
        return console.log(`${this.nombre} derrota a nix  con el persona ${this.persona}  y se muere del cansancio`);
    }
}

let makoto = new personin3(`mokoto`,`thanatos`)
let makoto_yuki = new personon3(`mokoto yuki`,`messiah`)
makoto.protin();
makoto_yuki.protin();