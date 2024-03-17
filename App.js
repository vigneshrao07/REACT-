const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1",{}, "I am an H1 Tag"),
        React.createElement("h1",{}, "I am an H1 Tag"),
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h2", {}, "i am an h2 tag"),

    ]),
]);
console.log(parent);
const root=ReactDom.createRoot(document.getElementById("header"));
root.render(parent);