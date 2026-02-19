import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "This is a React Fundamentals course");

const jsxHeading = 
<div>
<h1 className="heading" tabIndex={1}>Bharu is here</h1>
</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);