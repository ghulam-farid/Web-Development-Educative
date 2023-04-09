/* let titles = document.getElementsByTagName("h2");
console.log(titles.length);

for (let index = 0; index < titles.length; index++) {
  let title = titles[index];
  title.innerHTML = '<span class="mono">- </span>' + title.innerText;
  title.addEventListener("click", clickHandle, true);

  let event = document.createEvent('mouseEvent');
  event.initEvent('click',true,false);
  title.dispatchEvent(event);
//   let relatedDiv = title.nextElementSibling;
//   let collapseMark = title.firstChild;
//   collapseMark.innerText = "+ ";
//   relatedDiv.setAttribute("style", "display:none");
}

function clickHandle(event) {
  let headerClicked = event.currentTarget;
  let relatedDiv = headerClicked.nextElementSibling;
  let collapseMark = headerClicked.firstChild; // <span class="mono">+ </span>
  let isCollapsed = collapseMark.innerText[0] == "+";
  collapseMark.innerText = isCollapsed ? "- " : "+ ";
  relatedDiv.setAttribute("style", isCollapsed ? "" : "display:none");
  headerClicked.setAttribute("style", "background-color:tomato");
}

function logNavigation() {
  console.log("childeren of the document");
  let nodes = document.childNodes;
  console.log(nodes);
  for (let index = 0; index < nodes.length; index++) {
    const element = nodes[index];
    console.log(element);
  }
  console.log("childeren of the body");
  let i = 0;
  let current = document.body.firstChild;
  while(current != null){
    console.log(current);
    i++;
    current = current.nextSibling;
  }
} */

var bar = "xo xo";

var foo = {
    bar: "lorem ipsum"
};

function test () {
    return this.bar;
}

console.log(test());
// => xo xo
console.log(test.call(foo));
// => lorem ipsum
console.log(test.apply(foo));
// => lorem ipsum