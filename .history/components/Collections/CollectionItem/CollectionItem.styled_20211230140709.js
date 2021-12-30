
import styled from 'styled-components'

export const ContainerItem = styled.div`
    background-image: url(${props => props.background})
    img {
        width: 100%;
        z-index: -1;
    }
    div{
        border: 1px solid green;
        left: 50%;
        z-index: 1;
    }
`