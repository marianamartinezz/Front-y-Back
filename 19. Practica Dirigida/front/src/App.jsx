import { useState, useEffect } from 'react';
import './App.css';

import { useMarca } from './context/MarcaContext.jsx';
import { useModelo } from './context/ModeloContext.jsx';

function App() {

  const marcasApi = useMarca()
  const modelosApi = useModelo()

  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);


  useEffect(() => {
    const handleOnLoad = async () => {
      const rawMarcas = await marcasApi.findAll();
      setMarcas([...rawMarcas]);
      const rawModelos = await modelosApi.findAll();
      setModelos([...rawModelos]);
    }

    handleOnLoad();
  }, [])

  return (
    <>
      <h1>Mantenimiento de Marcas y Modelos</h1>
      <h2>Lista de Marcas</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Pais</th>
          </tr>
        </thead>
        <tbody>
          {
            marcas && marcas.map(m => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.nombre}</td>
                <td>{m.pais}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <h2>Lista de Modelos</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {
            modelos && modelos.map(m => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.nombre}</td>
                <td>{m.marca.nombre}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <br/>
      <button>AGREGAR MODELO</button>

      
    </>
  );
}

export default App;
