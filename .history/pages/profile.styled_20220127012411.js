import styled from "styled-components";
export const ContainerProfile = styled.div`
	display: flex;
	flex-direction: column;
	.control_panel_icon {
		padding: 0;
		margin: 0;
		display: flex;
		border: 1px solid green;
		flex-direction: row;
		align-items: center;
		justify-content: right;
		h4{
			padding: 0;
			margin: 0;
		}
	}
    svg{
		padding: 0;
        width: 30px;
        color: #00722E;
        height: 30px;
        margin: 10px 20px 10px 10px;
    }
`