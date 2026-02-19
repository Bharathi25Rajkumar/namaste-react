import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => true;
const HeadingFn = () => {
    return true;
}

const header = <h1>This is a header</h1>;


const Title = () => {
    return <h1 className="title">Welcome to React Course</h1>;
}

const dats = AudioParam.getData();

//Component Composition - Component inside a component
const HeadingComponent = () => {
    return (
        <div id="heading">
            {header}
            {data}  
            {/* JS prevents Cross-site scripting attack by sanitizing the data, so that we can directly use it */}
            <Title />
            <Title></Title>
            {Title()}
            <div>
                <h2>This is a React Course for Benginners</h2>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);