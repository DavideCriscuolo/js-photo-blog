/*CONSEGNA
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli: ‘Edu Tas Beginner’, sans-serif;d ate: ‘Sometype Mono’, ‘monospace’; (Dovreste sapere a questo punto cosa e come prendere da Google Fonts… :occhiolino:)

*/

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const rowEl = document.querySelector(".row");
    data.forEach((singolCard) => {
      const { title, date, url } = singolCard;
      const divColEl = document.createElement("div");
      divColEl.classList.add("col");
      divColEl.innerHTML = `
        <div class="card">
            <div class="card_up">
                <img src="${url}" alt="">
            </div>
            <div class="card_down">
                <p>${title}</p>
            </div>
        </div>
    `;
      rowEl.appendChild(divColEl);
    });
  });
