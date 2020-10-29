import React from 'react'
import { Header } from './Header'
import ContactsList from './ContactsList'
import styled from 'styled-components'

export const LeftBarWrapper = styled.div`
    width: 30%;
    min-width: 300px;
    border-right: 1px solid #000;
    transition: .3s;
    z-index: 10;
    @media (max-width: 768px) {
        position: absolute;
        left: -300px;
    }
    &.active {
        left: 0;
    }
    @media (max-width: 376px) {
        width: 100%;
        left: -100%;
    }
`
const LeftBarButton = styled.div`
    background: #ffe600;
    opacity: 0.5;
    width: 70px;
    cursor: pointer;
    height: 70px;
    display: none;
    position: absolute;
    left: calc(100% + 2px);
    transition: .3s;
    @media (max-width: 768px) {
        display: block;
    }
    z-index: 9;
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-70%, -50%) rotate(135deg);
        transition: .5s;
        width: 10px;
        height: 10px;
        border-top: 3px solid #000;
        border-left: 3px solid #000;
    }
    &:hover {
        opacity: 1; 
    }
    &.active {
        width: calc(100vw - 300px);
        opacity: 1;
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        @media (max-width: 376px) {
            width: 50px;
            left: calc(100% - 50px);
        }
    }
`

export const LeftBar = () => {

    const showBar = () => {
        document.getElementsByClassName(LeftBarWrapper.styledComponentId)[0].classList.toggle('active')
        document.getElementsByClassName(LeftBarButton.styledComponentId)[0].classList.toggle('active')
    }

    return (
        <LeftBarWrapper>
            <LeftBarButton onClick={showBar} />
            <Header />
            <ContactsList />
        </LeftBarWrapper>
    )
}