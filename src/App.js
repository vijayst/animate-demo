import React, { useState, useEffect } from 'react';
import getData from './getData';

export default function App() {
    const [data, setData] = useState([]);
    const [key, setKey] = useState(Date.now());
    
    useEffect(() => {
        setData(getData());
    }, []);

    function handleUpdate() {
        setData(getData());
    }

    function handleReset() {
        setData(getData());
        setKey(Date.now());
    }

    return (
        <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleReset}>Reset</button>
            <table key={key}>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => (
                            <tr key={d.label}>
                                <td>{d.label}</td>
                                <td>{d.value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}