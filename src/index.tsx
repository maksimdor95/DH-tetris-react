import React, {FC} from 'react'
import ReactDOM from 'react-dom'

// Деструктуризация 
// const a = {
//     b:1
// }
// const {b} = a

// Props 
// const Hello = (props) => {
// return <h1>{props.children}</h1>
// };

interface HelloProps {
    name: string
}

const Hello: FC<HelloProps> = ({children, name }) => <h1>{children}, {name}</h1>;

const Header = () => <h1>Header!</h1>;

const Main = () => {
    const clickHandler = () => {
        console.log('Click to main')
    }
    return <main className="main-section" onClick={clickHandler} style={{color: "red"}}>
        <Hello name="Maxim">Hello world for</Hello>
    </main>
};

const Footer = () => <footer>Footer!</footer>;

const App = () => <div>
    <Header/>
    <Main/>
    <Footer/>
</div>;


ReactDOM.render(<App/>, 
    document.getElementById("root"))

