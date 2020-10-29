import React from 'react'
import { Header } from './Header'
import { Posts } from './Posts'
import { Form } from './Form'
import styled from 'styled-components'

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    transition: .5s;
    @media (max-width: 768px) {
        width: 100%;

    }
`
const BodyEmptyWrapper = styled(BodyWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.2);
`

export const Body = ({user}) => {
    return (
        <BodyWrapper>
            <Header name={user.name}/>
            <Posts userId={user.id}/>
            <Form/>
        </BodyWrapper>
    )
}

export const BodyEmpty = () => <BodyEmptyWrapper>Select a user</BodyEmptyWrapper>