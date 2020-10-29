export const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_COMMENTS':
            return action.payload
        default: return state
    }
}