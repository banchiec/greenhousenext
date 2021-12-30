
import styled from 'styled-components'

export const ContainerItem = styled.div`
    background-image: url(${props => props.img})
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    // img {
    //     width: 100%;
    // }
`