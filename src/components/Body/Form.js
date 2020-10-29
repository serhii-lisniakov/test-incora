import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { postNewPostAction } from '../../store/posts/actions'

const InputWrapper = styled.div`
    padding: 15px 30px;
    margin-top: auto;
    border-bottom-right-radius: 25px;
    background: #23313f;
    position: relative;
    `
const PostForm = styled.form`
    background: #23313f;
    padding: 15px;
    position: absolute;
    bottom: -300px;
    left: 0;
    width: 100%;
    transition: .3s;
    display: flex;
    &.active {
        bottom: calc(100% - 25px);
    }
`
const PostsWrapper = styled.div`
    flex-grow: 1;
    margin-right: 20px;
`
const PostInputWrapper = styled.div`
    position: relative;
    &::after {
        position: absolute;
        content: '${props => props.empty ? '' : 'Must be non-empty'}';
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        color: red;
        font-size: 10px;
    }
`
const PostInput = styled.input`
    width: 100%;
    height: 36px;
    padding: 4px 30px 4px 15px;
    background: transparent;
    border: 1px solid ${props => props.empty ? '#fff' : 'red'};
    border-radius: 10px;
    outline: none;
    transition: .2s;
    color: #fff;
    caret-color: #ffe600;
    margin-top: 10px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
    &:focus {
        border: 1px solid #ffe600;
    }
`
export const PostButton = styled.button`
    padding: 4px 15px;
    background: transparent;
    display: block;
    color: #fff;
    margin-left:auto;
    border: 1px solid #fff;
    cursor: pointer;
    transition: .3s;
    letter-spacing: 1px;
    margin-top: 10px;
    &:hover {
        background: #fff;
        color: #000;
    }
`
const PanelButton = styled(PostButton)`
    margin-right: auto;
    padding-right: 30px;
    position: relative;
    &::after {
        position: absolute;
        content: '↑';
        right: 10px;
        transition: .3s;
    }
    &.active::after {
        transform: rotate(180deg)
    }
`

export const Form = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const [isEmpty, setEmpty] = useState(true)

    const showPanel = (e) => {
        e.target.classList.toggle('active')
        e.target.innerHTML = e.target.classList.contains('active') ? 'HIDE' : 'ADD'
        document.getElementsByClassName(PostForm.styledComponentId)[0].classList.toggle('active')
    }

    const newPost = (e) => {
        e.preventDefault()

        const newPost = {
            title,
            body,
            userId: window.location.href.substr(-1),
        } 

        if (title.trim().length && body.trim().length) {
            dispatch(postNewPostAction(newPost))
            setTitle('')
            setBody('')
        } else {
            setEmpty(!isEmpty)
            setTimeout(() => setEmpty(prev => !prev), 2000)
        }
    }

    return (
        <InputWrapper>
            <PostForm onSubmit={e => newPost(e)}>
                <PostsWrapper>
                    <PostInputWrapper empty={isEmpty}>
                        <PostInput
                            empty={isEmpty}
                            placeholder='Enter the title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </PostInputWrapper>
                    <PostInputWrapper empty={isEmpty}>
                        <PostInput 
                            empty={isEmpty}
                            placeholder='Enter the body'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        />      
                    </PostInputWrapper>
                </PostsWrapper>
                <PostButton type='submit'>ADD</PostButton>
            </PostForm>
            <PanelButton onClick={e => showPanel(e)}>ADD</PanelButton>
        </InputWrapper>
    )
}