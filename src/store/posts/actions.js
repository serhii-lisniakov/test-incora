export const loadPostsAction = (id) => async dispatch => {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                        .then(res => res.json())
                        .catch(err => alert(err))
    dispatch({
        type: 'LOAD_POSTS',
        payload: posts 
    })
}

export const postNewPostAction = (newPost) => async dispatch => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .then((json) => dispatch({
        type: 'POST_NEWPOST',
        payload: json
    }))
    .catch(err => alert(err))
    
}

export const deletePostAction = (postId) => async dispatch => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .catch(err => alert(err))
    dispatch({
        type: 'DELETE_POST',
        payload: postId
    })
}

export const updatePostAction = (updPost) => async dispatch => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${updPost.id}`, {
        method: 'PUT',
        body: JSON.stringify(updPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .catch(err => alert(err))
    dispatch({
        type: 'UPDATE_POST',
        payload: updPost
    })
}