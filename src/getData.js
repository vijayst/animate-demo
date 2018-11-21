let i = 0;

export default function getData() {
    const data = [
        {
            label: 'A'
        },
        {
            label: 'B'
        },
        {
            label: 'C'
        },
        {
            label: 'D'
        },
        {
            label: 'E'
        },
        {
            label: 'F'
        }
    ];
    data.forEach(d => {
        d.value = Math.round(Math.random() * 100);
    });
    return data;
}