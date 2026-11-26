import Marca from "./marca.js";
import Modelo from "./modelo.js";

Marca.hasMany(Modelo, { foreignKey: "marcaId"});
Modelo.belongsTo(Marca, { foreignKey: "marcaId"});

export { Marca, Modelo }