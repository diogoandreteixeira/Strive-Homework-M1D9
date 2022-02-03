// Create programmatically (using JS) a bingo board with 76 cells, numbered from 1 to 76.
// Create a button to randomize a number from 1 to 76. The cell with same number should be
// highlighted in some way on the bingo board.

//functions
//loops
//css
//random numbers

const generateBoard = function () {
  for (let i = 1; i <= 76; i++) {
    let div = document.querySelector(".bingo__wrapper")
    let newDiv = document.createElement("div")
    newDiv.innerText = i
    newDiv.classList.add("singleCell")
    newDiv.id = i
    div.appendChild(newDiv)
  }
}

generateBoard()

let selectedNumbers = [] //all numbers selected

const randomize = function () {
  let random = Math.floor(Math.random() * 76)

//   let isUnique
//   for (let i = 0; i < selectedNumbers.length; i++) {
//     if (selectedNumbers[i] === random) {
//       isUnique = false
//     } else {
//       isUnique = true
//     }
//   }
//   if (!isUnique) {
//     console.log("Number already in the list")
//   } else {
//     selectedNumbers.push(random)
//     let randomElement = document.getElementById(random)
//     randomElement.classList.add("selected")
//   }

  if (selectedNumbers.includes(random)) {
    console.log("Number already in the list")
  } else {
    selectedNumbers.push(random)
    let randomElement = document.getElementById(random)
    randomElement.classList.add("selected")
  }

  //   if (!selectedNumbers.includes(random)) {
  //     selectedNumbers.push(random)
  //     let randomElement = document.getElementById(random)
  //     randomElement.classList.add("selected")
  //   }
}

// Make sure to always select a new number
// (eg. avoid getting the number 10 multiple times).

//
