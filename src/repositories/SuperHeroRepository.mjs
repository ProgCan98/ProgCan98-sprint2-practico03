import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }
  async obtenerTodos() {
    return await SuperHero.find({});
  }
  async buscarPorAtributo(atributo, valor) {
    return await SuperHero.find({ [atributo]: valor });
  }
  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 }, // Buscar superhéroes con edad mayor a 30
      planetaOrigen: 'Tierra', // Filtrar por planeta Tierra
      $expr: { $gte: [{ $size: '$poderes' }, 2] }, // Filtrar superhéroes con al menos 2 poderes
    }); //$gt: "greater than" (mayor que)
  }
}

export default new SuperHeroRepository();

// Aqui se implementan los metodos definidos en la interfaz, interactuando directamente con MongoDB a traves de Mongoose para realizar operaciones de datos. La centralizacion de estas operaciones en el repositorio mejora la organizacion y garantiza que el acceso a los datos se realice de manera controlada y uniforme.
