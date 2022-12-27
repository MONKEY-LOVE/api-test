const router = require('express').Router();
const pacienteRepository = require('../repository/paciente');
const pacienteValidator = require('../validators/paciente');
const ValidationError = require('../core/exceptions')

router.post('/', (req,res) =>{
    const {body : paciente} = req
    try{
        pacienteValidator.save(paciente);
        res.status(201).send({id: 1, ...paciente});
    }
    catch(error){
        if(error instanceof ValidationError){
            res.status(404).send({error : error.message})
            return;
        }
        res.status(500).send();
    }
});

router.delete('/:pacienteId', (req, res) => {
    const {params: {pacienteId}} = req
    const paciente = pacienteRepository.getById(pacienteId)
    if(paciente){
        res.status(200).send(`al ` + [paciente.nombres] + `  lo eliminaron`);
    }else{
     res.status(404).send('no se encontró el paciente');
    }
})

router.put('/:pacienteId', (req, res) => {
    const {params: {pacienteId}} = req
    const paciente = pacienteRepository.getById(pacienteId)
    if(paciente){
        res.status(200).send(`al ` + [paciente.nombres] + `  lo actualizaron`);
    }else{
     res.status(404).send('no se encontró el paciente');
    }
})

router.get('/:pacienteId', (req,res) =>{
    const { params : {pacienteId} } = req
    console.log(`El panciente solicitado es ${pacienteId}`)
    const paciente = pacienteRepository.getById(pacienteId)
    if(paciente){
        res.status(200).send(paciente);
    }else{
     res.status(404).send('no se encontró el paciente');
    }
 
 })
 
 router.get('/', (req,res) =>{
     res.send(pacienteRepository.getAll());
 })

 module.exports = router;

 