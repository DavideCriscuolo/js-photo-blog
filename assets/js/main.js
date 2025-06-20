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
    const rowEl = document.querySelector(".row");
    data.forEach((singolCard) => {
      const { title, date, url } = singolCard;

      // Con tamplate litteral

      // const divColEl = document.createElement("div");
      // divColEl.classList.add("col");
      // divColEl.innerHTML = `
      //     <div class="container_pin d-flex-center"><img class="pin" src="./assets/img/pin.svg" alt=""> </div>
      //   <div class="card">
      //    <div id="cardUp" class="card_up">
      //      <img  src="${url}" alt="">
      //       </div>
      //       <div class="card_down">
      //           <p>${title}</p>
      //           <span>${date}</span>
      //       </div>
      //   </div> `;
      // rowEl.appendChild(divColEl);
      // const cardEl = divColEl.querySelector(".card");
      // const img = cardEl.querySelector("img");
      // img.addEventListener("click", function (e) {
      //   e.preventDefault();
      //   const overlayEl = document.querySelector(".overlay");
      //   overlayEl.classList.remove("d-none");
      //   overlayEl.classList.add("d-flex-center");
      //   const imgEl = document.getElementById("imgModal");
      //   imgEl.src = url;

      //   const buttonClose = document.getElementById("closeModal");
      //   buttonClose.addEventListener("click", function () {
      //     overlayEl.classList.remove("d-flex-center");
      //     overlayEl.classList.add("d-none");
      //   });
      // });

      //Con DOM Api

      //devo creare una col-containerPin->img  -card-carUp>img-carDown>title>data

      const colEl = document.createElement("div");
      colEl.classList.add("col");

      const containerPin = document.createElement("div");
      containerPin.classList.add("d-flex-center", "container_pin");
      const imgPin = document.createElement("img");
      imgPin.classList.add("pin");
      imgPin.src = "./assets/img/pin.svg";
      const cardElL = document.createElement("div");
      cardElL.classList.add("card");
      const cardUPEl = document.createElement("div");
      cardUPEl.classList.add("card_up");
      const imgPhoto = document.createElement("img");
      imgPhoto.src = url;
      const cardDown = document.createElement("div");
      cardDown.classList.add("card_down");
      const titlePhoto = document.createElement("p");
      titlePhoto.innerHTML = title;
      const dateEl = document.createElement("span");
      dateEl.innerHTML = date;

      colEl.appendChild(containerPin);
      containerPin.appendChild(imgPin);
      colEl.appendChild(cardElL);
      cardElL.appendChild(cardUPEl);
      cardUPEl.appendChild(imgPhoto);
      cardElL.appendChild(cardDown);
      cardDown.appendChild(titlePhoto);
      cardDown.appendChild(dateEl);
      rowEl.appendChild(colEl);

      const img = cardElL.querySelector("img");
      img.addEventListener("click", function (e) {
        e.preventDefault();
        const overlayEl = document.querySelector(".overlay");
        overlayEl.classList.remove("d-none");
        overlayEl.classList.add("d-flex-center");
        const imgEl = document.getElementById("imgModal");
        imgEl.src = url;

        const buttonClose = document.getElementById("closeModal");
        buttonClose.addEventListener("click", function () {
          overlayEl.classList.remove("d-flex-center");
          overlayEl.classList.add("d-none");
        });
      });

      const containerPinEl = colEl.querySelector(".pin");

      cardElL.addEventListener("mouseenter", function () {
        cardElL.classList.add("hover");
        containerPinEl.classList.remove("d-flex-center");
        containerPinEl.classList.add("d-none");
      });
      cardElL.addEventListener("mouseleave", function () {
        cardElL.classList.remove("hover");
        containerPinEl.classList.remove("d-none");
        containerPinEl.classList.add("d-flex-center");
      });
    });
  });

//Appunti
/*
 per prendere  l immagine o qualcosaltro allinterno dell markup generato andiamo a dichiare una costante  che indichi il nostro elemento e con cardEl.querySelector("img"); andiamo a dire che l elemento con classe img è presente nel elemento cardEl
;
  */
