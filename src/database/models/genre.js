//const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, Datatype) => {
    const Genre = sequelize.define(
        'genres',{
            id: {
                type: DataTypes.INTERGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name : {
                type: DaataTypes.STRING,
                allowNull: false,
                unique: true
            },
            ranking : {
                type: DataTypes.INTERGER,
                
                allowNull: false,
                unique: true
            },
            active: {
                type: DataTypes.BOOLEAN,
                
                allowNull: false,
                dafaultValue: '1'
            }
        },
        {
            timestamps : false
        }
    )
    return Genre
}


//no estamos creando, que datos tiene y restricciones la tabla