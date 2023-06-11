import styled from "styled-components"

const Newcom = ({ className }) => {
    return (
        <div className={ className }>
            <h2>Heading 2</h2>
            <button>Click Me!</button>
        </div>
    )
}

const Wrapper = styled(Newcom)`
text-align: center;
h2 {
    color: green;
    font-weight: 600;
    font-size: 2.5rem;
}

button {
    padding: 10px;
    background-color: violet;
    border: none;
    color: white;
    border-radius: 4px;
}
`

export default Wrapper;