import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ListWrapper = styled.div`
    background: #23313f;
    border-bottom-left-radius: 25px;
    height: calc(99vh - 70px);
    overflow-y: scroll;
    padding-bottom: 20px;
    padding-top:10px;
    &::-webkit-scrollbar {
        width: 4px;
        position: absolute;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
    }
    &:hover::-webkit-scrollbar {
        
    }
`
const UserWrapper = styled.div`
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: .3s;
    position: relative;
    letter-spacing: 1px;
    &:hover {
        background: #2d3e50;
        color: #ffe600;
    }
    &::after {
        content: 'Posts →';
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 10px;

    }
`

const UsersList = () => {
    const users = useSelector(store => store.users)

    return (
        <>
            <ListWrapper>
                {users.map((user, i) => {
                    return (
                        <Link key={i} to={`/user${user.id}`}>
                            <UserWrapper>{user.name}</UserWrapper>
                        </Link>
                    )
                })}
            </ListWrapper>
        </>
    )
}

export default withRouter(UsersList)