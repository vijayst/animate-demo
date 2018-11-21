import React from 'react';

export default function Barchart(props) {
    return <table>
        {props.data && props.data.map(d => (
            <tr>
                <td>{d.label}</td>
                <td>{d.value}</td>
            </tr>
        ))}
    </table>;
}