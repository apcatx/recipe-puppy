let input = document.querySelector(".input")
let output = document.querySelector(".output")


input.addEventListener("keypress", function(e) {
  let key = e.which;
  if (key === 13) {
    fetch("https://crossorigin.me/http://www.recipepuppy.com/api/?q=" + input.value)

      .then(function(response) {
        if (response.status !== 200) {
          console.log(response);
        }
        response.json().then(function(obj) {
          console.log(obj);

          let template;
          obj.results.forEach(function(data) {
            template = `
            <div class="recipes">
              <a href="${data.href}">
              <img src="${data.thumbnail}" onError="this.onerror=null;this.src='puppy.png'">
              <h3>${data.title}</h3>
              </a>
            </div>
            `;
            output.innerHTML += template;
          })
        })
      });
  }
});
