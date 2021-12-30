
import styled from 'styled-components'

export const ContainerItem = styled.div`
    background-image: url(${props => props.img})
    img {
        width: 100%;
    }
`