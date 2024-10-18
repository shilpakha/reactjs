//add sibling
const parentSibling = React.createElement("div",
    {id:"parant"},
    [
        React.createElement("div",
        {id:"child1"},
        [ 
            React.createElement("h1",{},"I am h1 child1 tag"),
            React.createElement("h2",{},"I am h2 child1 tag"),
        ]
    ),
    React.createElement("div",
        {id:"child2"},
        [ 
            React.createElement("h1",{},"I am h1 child2 tag"),
            React.createElement("h2",{},"I am h2 child2 tag"),
        ]
    )
]
)



//Nested structure of div
const parent = React.createElement("div",
    {id:"parant"},
    React.createElement("div",
        {id:"child"},
        React.createElement("h1",{},"I am h1 tag")
    )
)

const heading = React.createElement("h1", {id:"heading"}, "Hello World from react");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentSibling);