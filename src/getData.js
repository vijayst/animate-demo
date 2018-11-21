export default function getData(data) {
    data = data.slice();
    data.forEach(d => {
        d.value = Math.round(Math.random() * 100);
    });
    return data;
}