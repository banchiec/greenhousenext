
import styled from 'styled-components'

export const ContainerItem = styled.div`
    img {
        width: 100%;
        z-index: -1;
    }
    div{
        border: 1px solid green;
        position: absolute;
        top: 30px;
        left: 50%;
        z-index: 1;
    }
`