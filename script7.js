let divApi = document.getElementById("api");

let requist = new XMLHttpRequest();
requist.open("GET", "https://reqres.in/api/unknown");

requist.addEventListener("load", function () {
  // console.log(this.responseText);
  let requestText = this.responseText;
  let responseJs = JSON.parse(requestText);
  console.log(responseJs);

  let ul = document.createElement("ul");

  responseJs.data.forEach((el) => {
    let li = document.createElement("li");
    li.innerText = `${el.name}`;
    li.style.color = el.color;
    ul.appendChild(li);
  });

  divApi.appendChild(ul);
});

requist.addEventListener("error", function () {
  let p = document.createElement("p");
  p.textContent = "Server Error";

  divApi.appendChild(p);
});

requist.send();


