import React from 'react'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background: #23313f;
    min-height: 70px;
    position: relative;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffe600;
    letter-spacing: 1px;
`

export const Header = () => <HeaderWrapper>USERS</HeaderWrapper>