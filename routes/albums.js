const router = require('express').Router();
const albumRepository = require('../repository/albums');

router.get('/:albumId', (req,res) =>{
    const { params : {albumId} } = req
    console.log(`El album solicitado es ${albumId}`)
    const album = albumRepository.getById(albumId)
    if(album){
        res.status(200).send(album);
    }else{
     res.status(404).send('no se encontró el album');
    }
 
 })
 
router.get('/', (req,res) =>{
    res.send(albumRepository.getAll());
})

module.exports = router;