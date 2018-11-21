import getData from './getData';

const initialData = [
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

export default function barchartReducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return {
                key: Date.now(),
                data: getData(initialData)
            };
        case 'UPDATE':
            return {
                ...state,
                data: getData(state.data)
            };
        case 'SORT': {
            let { data } = state;
            data = data.slice();
            data.sort((a, b) => a.value - b.value);
            return {
                ...state,
                data
            };
        }
        default:
            return state;
    }
}