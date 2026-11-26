import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

const Modelo = sequelize.define('modelo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Modelo