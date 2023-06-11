import styled from "styled-components"

const H1 = styled.h1`
color: ${(props) => props.color || 'green'};
font-size: 4rem;
font-weight: 700;`

export default H1;