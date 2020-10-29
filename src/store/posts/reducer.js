export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return action.payload
        case 'POST_NEWPOST': 
            return [ action.payload, ...state ]
        case 'DELETE_POST':
            return state.filter(post => post.id !== +action.payload)
        case 'UPDATE_POST':
            return state.map(post => post.id === action.payload.id ? action.payload : post)
        default: return state
    }
}