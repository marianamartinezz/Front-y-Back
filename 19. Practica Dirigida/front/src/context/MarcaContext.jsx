/* eslint-disable react-refresh/only-export-components */
import api from '../services/api.js'
import { createContext, useContext } from 'react';

const MarcaContext = createContext(null);

export const MarcaProvider = ({ children }) => {

    const findAll = async () => {
        return await api.get('/marcas');
    };

    const create = async (marca) => {
        return await api.post('/marcas', { ...marca });
    };

    return (
        <MarcaContext.Provider value={{ findAll, create }}>
            {children}
        </MarcaContext.Provider>
    );
};

export const useMarca = () => useContext(MarcaContext);

export default MarcaContext;
