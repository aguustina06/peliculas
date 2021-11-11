const { sequelize } = require('../database/models')
const db = require('../database/models')

const {Op} = db.sequelize.Op

module.exports= {
    
    list: (req,res) => {
        db.movies.findAll()
        .then(peliculas => {
            res.render('moviesList', {movies: peliculas})
        })
        .catch(err => {
            console.log("error al requerir las peliculas", err)
        })     
    },

    detail: async (req,res) => {
        try {
            const pelicula = await db.movies.findByPK(+req.params.id)

            res.render('moviesDetail', {movie: pelicula})//nombre de la peli con su datos

        } catch (error) {
            console.log("error al requerir las peliculas", error)
        }

    },

    // movies/new
    new: (req,res) => {
        db.movies.findAll({
            order: [['release_date', 'DESC']]
            
        })
        .then( peliculas => {
            
            res.render('newestMovies', {movies: peliculas})
        })

        .catch(err => {
            console.log("error al requerir las peliculas", err)
        })
    },

    // movies/recomended recomendar 5
    recomended: (req,res) => {
        db.movies.findAll({

            where: {
                
                rating: {[Op.gte]: 8},
                awards: {[Op.gt]: 2}
            },

            order: [['rating', 'DESC']]


            

            /*order: [['rating', 'DESC']], //ordenamos de forma desc

            limit: 5*/
    })

    .then(peliculas => {
        
        res.render('recommendedMovies', {movies: peliculas})
    })
},
        
}

