const ValidationError = require('../core/exceptions')

const save = paciente =>{
    let {nombres, apellidos, edad} = paciente;
    nombres = nombres.trim();
    apellidos = apellidos.trim();

    if(nombres.split(' ').length !=2){
        throw new ValidationError("debe tener dos nombres");

    }

    if (nombres.match(/\d/g)){
        throw new ValidationError("no debe tener numeros");
    }

    if (apellidos.split(' ').length !=2){
        throw new ValidationError("debe tener dos apellidos");
    }
    if (apellidos.match(/\d/g)){
        throw new ValidationError("no debe tener numeros");
    }
    if (Number.isInteger(edad)){
        throw new ValidationError("La edad debe ser positiva a 0");
    } else {
        if (edad.match(/\d/g)){
            throw new ValidationError("La edad debe ser positiva a 0");
        } else {
            if (parseInt(edad) < 0){
                throw new ValidationError("La edad debe ser positiva a 0");
            }
        }
    }
}
module.exports = {
    save
}