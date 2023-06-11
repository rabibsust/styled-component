import H1 from "./components/Title"
import { DefaultButton } from "./components/Buttons"
import { ExtendedButton } from "./components/Buttons"

function App() {
    return(
        <div>
            <H1 color="blue">I am using styled component</H1>
            <p>This is testing paragraph for checking styled component</p>
            <DefaultButton>Click Me!</DefaultButton>
            <DefaultButton background="red">Click Me!</DefaultButton>
            <ExtendedButton background="blue">Test Extended Button</ExtendedButton>
        </div>
    )
}

export default App
