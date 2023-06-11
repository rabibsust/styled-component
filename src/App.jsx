import H1 from "./components/Title"
import { DefaultButton } from "./components/Buttons"
import { ExtendedButton } from "./components/Buttons"
import styled from "styled-components"

function App() {
    return(
        <div>
            <Wrapper>
                <H1 color="blue">I am using styled component</H1>
                <p>This is testing paragraph for checking styled component</p>
                <DefaultButton>Click Me!</DefaultButton>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
h1 {
    text-align: center;
    color: violet;
}
p {
    font-size: 40px;
}

button {
    background-color: pink;
    padding: 4px 8px;
    border: none;
}
`

export default App
