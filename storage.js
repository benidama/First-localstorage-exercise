const user = { name: "John", age: 23 };
const store = JSON.stringify(user);
const parse = JSON.parse(user);
const local = localStorage.setItem("school", "Pie X");
document.getElementById("demo").textContent = local;
