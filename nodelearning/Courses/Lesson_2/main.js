function addHeader() {
    let headerText = "Lesson 2 -- Data Types & print variable";
    let node = document.createElement('h1');
    let text = document.createTextNode(headerText);
    node.appendChild(text);
    document.body.appendChild(node);
}