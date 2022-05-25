console.log(`Hello, ${this.document.nodeName}`);

const h1 = document.getElementById(`myH1`);
console.log(h1);
console.dir(h1);

h1.onclick = function () {
    console.log("myH1 was clicked");
}

document.onmousemove = function ({screenX: x, screenY: y}) {
    console.log(`x: ${x} and y: ${y}`);
}

//event loop
