import { Marca, Modelo } from '../models/relaciones.js'
import RepositoryBase from './RepositoryBase.js'

const repository = new RepositoryBase(Modelo);

repository.findAll = async () => {
  try {
    const includeCompleto = {
      model: Marca,
      attributes: ['id', 'nombre']
    }

    return await Modelo.findAll({
      include: includeCompleto
    });
  } catch (error) {
    console.log(error)
  }
}

export default repository;