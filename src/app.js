import "bootstrap";
import "./style.css";

import { main } from "@popperjs/core";
import { bottom } from "@popperjs/core";

window.onload = function() {};
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["♦", "♥", "♠", "♣"];
const sortingArr = [];

function createCard(param) {
  for (let i = 0; i < param; i++) {
    let cards = document.getElementById("cards");
    //
    /*card container*/
    const mCard = document.createElement("div");
    mCard.classList.add("main-div");
    mCard.style.border = "2px solid black";
    mCard.style.backgroundColor = "white";
    mCard.classList.add("col-1", "ms-2");
    mCard.style.height = "150px";
    mCard.style.width = "100px";
    //
    /*top div*/
    const topInnerDiv = document.createElement("div");
    topInnerDiv.classList.add("top-inner-div");
    topInnerDiv.style.height = "12%";
    topInnerDiv.classList.add("row", "mb-3");
    mCard.appendChild(topInnerDiv);
    //
    /*top suit*/
    const topSuit = document.createElement("p");
    topSuit.classList.add("top-suit");
    let suitNum = suits[Math.floor(Math.random() * suits.length)];
    topSuit.innerHTML = suitNum;
    topSuit.classList.add("ps-3");
    topInnerDiv.appendChild(topSuit);
    //
    /*middle div*/
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    innerDiv.style.height = "50%";
    innerDiv.style.fontSize = "50px";
    innerDiv.classList.add("row", "mx-auto", "justify-content-center;");
    mCard.appendChild(innerDiv);
    //
    /*card number*/
    const middleNum = document.createElement("p");
    middleNum.classList.add("number");
    let number = numberArr[Math.floor(Math.random() * numberArr.length)];
    middleNum.innerHTML = number;

    middleNum.classList.add("text-center");
    innerDiv.appendChild(middleNum);
    //
    /*bottom div*/
    const bottomInnerDiv = document.createElement("div");
    bottomInnerDiv.classList.add("bottom-inner-div");
    bottomInnerDiv.style.height = "18%";
    bottomInnerDiv.classList.add("row", "d-flex", "mb-0", "mt-3");
    mCard.appendChild(bottomInnerDiv);
    //
    /*bottom suit*/
    const bottomSuit = document.createElement("p");
    bottomSuit.classList.add("bottom-suit");
    bottomSuit.innerHTML = topSuit.innerHTML;
    bottomSuit.classList.add("text-end", "pe-3");
    bottomInnerDiv.appendChild(bottomSuit);
    //
    cards.appendChild(mCard);
    //
    if (topSuit.innerHTML === suits[0] || topSuit.innerHTML === suits[1]) {
      topSuit.style.color = "red";
      bottomSuit.style.color = "red";
    } else {
      topSuit.style.color = "black";
      bottomSuit.style.color = "black";
    }
    //

    let cardValue = 0;
    cardValue += numberArr.indexOf(number);

    switch (suits.indexOf(suitNum)) {
      case 0:
        cardValue += 200;
        break;
      //hearts
      case 1:
        cardValue += 100;
        break;
      //spade
      case 2:
        break;
      //club
      case 3:
        cardValue += 300;
        break;
    }
    sortingArr.push(cardValue);
  }
  console.log(sortingArr);
  return sortingArr;
}
//*Button
let button = document.getElementById("gen");
button.addEventListener("click", () => {
  let element = document.getElementById("newCards");
  let value = element.value;
  createCard(value);
});

let buttonSort = document.getElementById("sortbtn");
buttonSort.addEventListener("click", arr => {
  selectSort(sortingArr);
});

//* Select
const selectSort = arr => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    console.log(arr);
    min++;
  }
  return arr;
};
