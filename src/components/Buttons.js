import styled from "styled-components"

export const DefaultButton = styled.button`
background-color: ${(props) => props.background || '#645cfc'};
border: none;
padding: 10px;
color: white;
border-radius: 4px;
`

export const ExtendedButton = styled(DefaultButton)`
display: block;
width: 100%;
`