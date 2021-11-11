module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        'movies',//alias
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allorNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            rating: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            awards: {
                type: DataTypes.INTERGER,
                allowNull: false,
                defoultValue: '0'
            },
            release_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            lenght: {
                type: DataTypes.INTERGER
            },
            genre_id: {
                type: DataTypes.INTEGER,
                
            },
            created_at: {
                type: DataTypes.DATE
            }, 
            updated_at: {
                type: DataTypes.DATE
            },
        },
        {
            timestamps: false,
            
        })
        return Movie
}
