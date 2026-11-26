import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

const Marca = sequelize.define('marca', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false
  }
})



export default Marca