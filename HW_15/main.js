document.write("HTML document");

document.write("<h1>Mike Rimsky</h1>");

var root = document.documentElement;
console.log(root);

var body = document.body;
console.log(body);

document.body.style.backgroundColor = "white";

console.log(body.childNodes);

document.write(body.firstChild);

var p = document.createElement("p");
p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti sapiente ea amet quam odit culpa doloremque ab, voluptatibus modi cupiditate laborum odio! Molestiae, recusandae, voluptatem laudantium ipsam earum ab."


p.className = "my class";
p.setAttribute("id", "myId");

body.appendChild(p);

var el = document.getElementById("myId");
console.log(el);


