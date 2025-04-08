// Aqui se establece una interfaz donde define metodos CRUD estandar y sirve como contrato para asegurar que cualquier clase que implemente la interfaz cuente con estos metodos

class IRepository {
  obtenerPorId(id) {
    throw new Error("Método 'obtenerPorId()' no implementado");
  }
  obtenerTodos() {
    throw new Error("Método 'obtenerTodos()' no implementado");
  }
  buscarPorAtributo(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo()' no implementado");
  }
  obtenerMayoresDe30() {
    throw new Error("Método 'obtenerMayoresDe30()' no implementado");
  }
  crearSuperheroe() {
    throw new Error("Método 'crearSuperheroe()' no implementado");
  }
}

export default IRepository;

// Esto proporciona una abstraccion de los metodos CRUD que deben ser implementado por cualquier repositorio. Esto asegura que todas las clases de repositorio mantengan consistencia en sus metodos, mejorando la mantenibilidad y facilitando cambios futuros en la implementación.
