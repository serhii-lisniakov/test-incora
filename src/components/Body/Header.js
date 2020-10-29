import React from 'react'
import styled from 'styled-components'
import { HeaderWrapper } from '../LeftBar/Header'

const BodyHeader = styled(HeaderWrapper)`
    letter-spacing: 2px;
    @media (max-width: 475px) {
        justify-content: flex-end;
    }
`

export const Header = ({name}) => <BodyHeader>{name}</BodyHeader>