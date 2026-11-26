/* eslint-disable react-refresh/only-export-components */
import api from '../services/api.js'
import { createContext, useContext } from 'react';

const ModeloContext = createContext(null);

export const ModeloProvider = ({ children }) => {

    const findAll = async () => {
        return await api.get('/modelos');
    };

    const create = async (marcaId, nombre) => {
        return await api.post('/modelos', { marcaId, nombre });
    };

    return (
        <ModeloContext.Provider value={{ findAll, create }}>
            {children}
        </ModeloContext.Provider>
    );
};

export const useModelo = () => useContext(ModeloContext);

export default ModeloContext;
