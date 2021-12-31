
import styled from 'styled-components'

export const ContainerItem = styled.div`
    background-image: url(${props => props.img})
    background-attachment: fixed;
    background-position: center;
    background-repeat: none;
    // img {
    //     width: 100%;
    // }
`