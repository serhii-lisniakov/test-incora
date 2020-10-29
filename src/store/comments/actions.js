export const loadCommentsAction = (id) => async dispatch => {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                        .then(res => res.json())
                        .catch(err => console.error(err))
    dispatch({
        type: 'LOAD_COMMENTS',
        payload: comments
    })
}