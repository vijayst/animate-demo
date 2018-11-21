import React, { useReducer, useEffect } from 'react';
import barchartReducer from './barchartReducer';
import Barchart from './Barchart';

export default function App() {
    const [{ key, data }, dispatch] = useReducer(barchartReducer, {});
    
    useEffect(() => {
        dispatch({ type: 'INIT' });
    }, []);

    function handleUpdate() {
        dispatch({ type: 'UPDATE' });
    }

    function handleSort() {
        dispatch({ type: 'SORT' });
    }

    return (
        <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleSort}>Sort</button>
            <Barchart chartKey={key} data={data} />
        </div>
    );
}