import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadCommentsAction } from "../../store/comments/actions";
import { deletePostAction, updatePostAction } from "../../store/posts/actions";
import { PostButton } from './Form'
import ContentEditable from 'react-contenteditable'
import pencil from '../../assets/pencil.svg'

const PostWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    z-index: 100;
    transition: 1s;
`
const Input = styled(ContentEditable)`
    font-size: 18px;
    margin-top: 5px;
    background: url(${pencil}) 99% center no-repeat;
    padding: 15px 50px 15px 0;
    /* outline: rgba(255,255,255,0.9); */
`
const Body = styled.div`
    border-radius: 25px;
    padding: 20px;
    width: 80%;
    height: 80%;
    background: #23313f;
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
`
const Comments = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    max-height: 320px;
    &::-webkit-scrollbar {
        width: 0;
    }
`
const Comment = styled.div`
    margin-bottom: 5px;
    position: relative;
    color: #000;
    padding: 10px 15px 20px;
    background: rgba(141, 123, 21, 0.9);
    min-width: 200px;
    &:first-child {
        margin-top: 20px;
    }
    &::after {
        content: '${props => props.email}';
        position: absolute;
        bottom: 3px;
        right: 20px;
        font-size: 10px;
        color: #fff;
    }
`
const Actions = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: auto;
    margin-top: 20px;
`
const Button = styled(PostButton)`
    margin: 0 15px;
`
const Label = styled.div`
    font-size: 14px;
    font-style: italic;
    color: rgba(141, 123, 21, 0.9);
`
const NoComments = styled.p`
    padding: 10px;
    text-align: center;
`

export const FullPost = (props) => {
    const comments = useSelector(store => store.comments)
    const dispatch = useDispatch()
    const [title, setTitle] = useState(props.history.location.custom.title)
    const [body, setBody] = useState(props.history.location.custom.body)
    const postId = props.match.params.postId.replace(/[^\d]/g, '')

    useEffect(() => dispatch(loadCommentsAction(postId)), [])

    const deletePost = () => {
        window.history.back()
        dispatch(deletePostAction(postId))
    } 

    const updatePost = () => {
        const updPost = {
            id: +postId,
            title,
            body,
            userId: +props.history.location.custom.userId
        }
        window.history.back()
        dispatch(updatePostAction(updPost))
    }

    if (!props.location.custom) window.history.back();
    return (
        <PostWrapper 
            data-overlay={true} 
            onClick={(e) => e.target.dataset.overlay ? window.history.back() : false}
        >
            <Body>
                <Label>Title:</Label>
                <Input
                    html={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <Label>Body:</Label>
                <Input
                    html={body}
                    onChange={e => setBody(e.target.value)}
                />
                <Label>Comments:</Label>
                <Comments>
                    {!comments.lenght && <NoComments>No comments!</NoComments>}
                    {comments.map((comment, i) => (
                        <Comment key={i} email={comment.email}>
                            {comment.name}
                        </Comment>
                    ))}
                </Comments>
                <Actions>
                    <Button onClick={updatePost}>EDIT</Button>
                    <Button onClick={deletePost}>DELETE POST</Button>
                </Actions>
            </Body>
        </PostWrapper>
    )
}