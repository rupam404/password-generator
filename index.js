const alphabetCheckbox = document.getElementById("alphabets");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const uppercaseCheck = document.getElementById("uppercasealphabets");
const clipboradEle = document.getElementById("icon");

const alphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let characterList = "";

let checkalphabet = false;
let checkNumber = false;
let checkSymbol = false;
let checkUppercase = false;

clipboradEle.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const newpassword = document.getElementById("header").innerText;
  if (!newpassword) {
    return;
  }
  textarea.value = newpassword;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

uppercaseCheck.addEventListener("click", () => {
  if (checkUppercase == false) {
    checkUppercase = true;
    characterList += uppercase;
  } else {
    checkUppercase = false;
    characterList = characterList.replace(/[A-Z]/g, "");
  }
});

alphabetCheckbox.addEventListener("click", () => {
  if (checkalphabet == false) {
    checkalphabet = true;
    characterList += alphabets;
  } else {
    checkalphabet = false;
    characterList = characterList.replace(/[a-z]/g, "");
  }
});
numbersCheckbox.addEventListener("click", () => {
  if (checkNumber == false) {
    checkNumber = true;
    characterList += numbers;
  } else {
    checkNumber = false;
    characterList = characterList.replace(/[0-9]/g, "");
  }
});

symbolsCheckbox.addEventListener("click", () => {
  if (checkSymbol == false) {
    checkSymbol = true;
    characterList += symbols;
  } else {
    checkSymbol = false;
    characterList = characterList.replace(/[\W_\s]/g, "");
  }
});
document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});

document.getElementById("generate").addEventListener("click", () => {
  let password = "";
  if (
    checkalphabet == false &&
    checkNumber == false &&
    checkSymbol == false &&
    checkUppercase == false
  ) {
    alert("Choose Combination");
    return;
  }

  let size = document.getElementById("length").value;

  let length = characterList.length - 1;

  for (let i = 0; i < size; i++) {
    let charIndex = Math.round(Math.random() * length);
  
    password += characterList[charIndex];
  }
 
  document.getElementById("header").innerText = password;
});
