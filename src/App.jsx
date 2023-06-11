import styled from "styled-components"

const H1 = styled.h1`color: green; font-size: 4rem; font-weight: 700;`

const DefaultButton = styled.button`
background-color: #645cfc;
border: none;
padding: 10px;
color: white;
border-radius: 4px;
`

function App() {
    return(
        <div>
            <H1>I am using styled component</H1>
            <p>This is testing paragraph for checking styled component</p>
            <DefaultButton>Click Me!</DefaultButton>
        </div>
    )
}

export default App
