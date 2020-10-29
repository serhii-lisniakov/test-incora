import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import chatBg from '../../assets/chatbg.jpg'
import { loadPostsAction } from '../../store/posts/actions'
import { Route, Link } from 'react-router-dom'
import { FullPost } from './Post'

const PostsWrapper = styled.div`
    flex-grow: 1;
    padding: 10px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    background: url(${chatBg}) center center;
    background-size: cover;
    transition: .5s;
    border-bottom-right-radius: 25px;
    &::-webkit-scrollbar {
        width: 4px;
        visibility: hidden;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
    }
`
const Post = styled.div`
    padding: 20px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 15px;
    background: rgba(141, 123, 21, 0.9);
    min-width: 130px;
    box-shadow: 0 0 10px 0 #0000002f;
    position: relative;
    transition: .5s;
    display: flex;
    @media (max-width: 475px) {
        flex-direction: column;
    }
`
const PostContent = styled.div`
    flex-grow: 1;
`
const PostTitle = styled.div`
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`
const PostBody = styled.div`
    padding-top: 10px;
    padding-right: 20px;
`
const PostDetails = styled(Link)`
    border: none;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    background: none;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: .3s;
    padding-left: 20px;
    display: flex;
    align-items: center;
    margin-left: auto;
    &:hover {
        color: #000;
    }
    @media (max-width: 475px) {
        border-left: none;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        margin-top: 10px;
        padding-top: 10px;
        justify-content: center;
    }
`

export const Posts = ({userId}) => {
    const dispatch = useDispatch()
    const posts = useSelector(store => store.posts)
    useEffect(() => dispatch(loadPostsAction(userId)), [])

    return (
        <PostsWrapper>
            <Route path={`/user${userId}/:postId`} component={FullPost}/>
            <Route path={`/user${userId}`} render={() => (
                <>
                    {posts.map((post, i) => (
                        <Post key={i}>
                            <PostContent>
                                <PostTitle>{post.title}</PostTitle>
                                <PostBody>{post.body}</PostBody>
                            </PostContent>
                            <PostDetails to={{
                                pathname: `/user${userId}/post${post.id}`,
                                custom: {
                                    id: post.id,
                                    title: post.title,
                                    body: post.body,
                                    userId
                                }
                            }}>DETAILS</PostDetails>
                        </Post>
                    ))}
                </>
            )}/>
        </PostsWrapper>
    )
}