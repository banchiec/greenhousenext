import styled from "styled-components";
export const ContainerProfile = styled.div`
	display: flex;
	flex-direction: column;
	div {
		padding: 0;
		margin: 0;
		border: 1px solid green;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: right;
		h2{
			border: 0;
			padding: 0;
			margin: 0;
		}
	}
    svg{
		margin: 0;
		padding: 0;
        width: 23px;
        color: #00722E;
        height: 30px;
        margin: 0 10px 0 10px;
    }
`