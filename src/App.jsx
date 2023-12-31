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
                <DefaultButton background="red">Click Me!</DefaultButton>
                <ExtendedButton background="blue">Test Extended Button</ExtendedButton>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
text-align: center;
h1 {
    color: violet;
}
p {
    font-size: 40px;
}
`

export default App
