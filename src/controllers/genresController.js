const db = require("../database/models")

module.exports= {

    list: (req,res) => {
        db.genres.findAll()

        .then(generos => {
            res.render('genresList', {genres: generos})//genres xq dice eso en el ejs
        })


        .catch(err => {
            console.log("error", err)
        })
    },


    
    detail: (req,res) => {
        db.genres.findByPk(+req.aparamas.id)

        .then(genero => {
            res.render('genreDetail',{genre: genero})
        })
        
        .catch(err => {
            console.log("error", err)
        })
    }
}