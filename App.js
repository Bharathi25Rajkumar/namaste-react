import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id="parent">
    <div id="child1">
        <h1>This is a Namaste React course</h1>
        <h2>I'm a h2 tag</h2>
    </div>

    <div id="child2">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div> */}


const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "This is a Namaste React course"),
        React.createElement("h2", {}, "by Akshay Saini")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ])
]);


const heading = React.createElement('h1', {id: "heading", xyz: "abc"}, "Hello World from React!");

console.log(heading); //JS object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root); //JS object

//root.render(heading);
root.render(parent);