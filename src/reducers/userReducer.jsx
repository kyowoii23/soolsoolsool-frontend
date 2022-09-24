// dispatch({type: 'ADD', data: '추가할 데이터'}) 의 형태

export function userReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return [...state, action.data]
        default:
            return state
    }
}