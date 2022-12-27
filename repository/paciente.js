//nuestra data
const pacientes = [{
    id: 1,
    nombres: 'Pedro',
    apellidos: 'Fernandez',
    edad: 16
},
{
    id: 2,
    nombres: 'John',
    apellidos: 'jhoest',
    edad: 19
},
{
    id: 3,
    nombres: 'George',
    apellidos: 'fref',
    edad: 26
},
{
    id: 4,
    nombres: 'Paul',
    apellidos: 'gene',
    edad: 23
},

{
    id: 5,
    nombres: 'Ringo',
    apellidos: 'star',
    edad: 27
},
{
    id: 6,
    nombres: 'Hugo',
    apellidos: 'Cid',
    edad: 22
}
]


const getAll = () => pacientes

const getById = (id) => pacientes.find(pacientes => pacientes.id == id);

module.exports ={
    getAll,
    getById
}