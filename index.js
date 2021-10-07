function add(type) {
  let element = document.createElement("input");

  element.setAttribute("type", type);
  element.setAttribute("value", type);
  element.setAttribute("name", type);

  var foo = document.getElementById("btnid");

  btnid.appendChild(element);
}
