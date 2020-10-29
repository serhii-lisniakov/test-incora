export const loadUsersAction = () => async dispatch => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
                        .then(res => res.json())
    dispatch({
        type: 'LOAD_USERS',
        payload: users 
    })
}