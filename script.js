let numberKeys = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "Delete",
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter",
  "ShiftLeft",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

const enKeys = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Del",
  "Caps Lock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "LShift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "↑",
  "RShift",
  "LCtrl",
  "Win",
  "LAlt",
  "Space",
  "RAlt",
  "←",
  "↓",
  "→",
  "RCtrl",
];

const ruKeys = [
  "ё",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "\\",
  "Del",
  "Caps Lock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
  "LShift",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
  "↑",
  "RShift",
  "LCtrl",
  "Win",
  "LAlt",
  "Space",
  "RAlt",
  "←",
  "↓",
  "→",
  "RCtrl",
];

const enKeysShift = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "|",
  "Del",
  "Caps Lock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "Enter",
  "LShift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "↑",
  "RShift",
  "LCtrl",
  "Win",
  "LAlt",
  "Space",
  "RAlt",
  "←",
  "↓",
  "→",
  "RCtrl",
];

const ruKeysShift = [
  "Ё",
  "!",
  '"',
  "№",
  ";",
  "%",
  ":",
  "?",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "/",
  "Del",
  "Caps Lock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Enter",
  "LShift",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ",",
  "↑",
  "RShift",
  "LCtrl",
  "Win",
  "LAlt",
  "Space",
  "RAlt",
  "←",
  "↓",
  "→",
  "RCtrl",
];

function createKeyboard() {
  let body = document.querySelector("body");

  let header = document.createElement("header");
  header.classList = "header";
  header.textContent = "Virtual keyboard";
  body.appendChild(header);

  let wrapper = document.createElement("div");
  wrapper.classList = "wrapper";
  body.appendChild(wrapper);

  let textArea = document.createElement("textarea");
  textArea.classList = "textArea";
  textArea.disabled = true;
  wrapper.appendChild(textArea);

  let keyboardWrapper = document.createElement("div");
  keyboardWrapper.classList = "keyboardWrapper";
  wrapper.appendChild(keyboardWrapper);

  let ul = document.createElement("ul");
  keyboardWrapper.appendChild(ul);

  for (let i = 0; i < numberKeys.length; i++) {
    let li = document.createElement("li");
    ul.append(li);
  }

  document.querySelectorAll("li").forEach((element) => {
    let span = document.createElement("span");
    element.append(span);

    let count = 0;
    document.querySelectorAll("li").forEach((element) => {
      element.classList.add(numberKeys[count]);
      count++;
    });
  });

  let footer = document.createElement("footer");
  let h3 = document.createElement("h3");
  h3.textContent = "Press Ctrl + Shift to change language";
  body.append(footer);
  footer.append(h3);
}

function addKeys() {
  let numberKey = 0;
  document.querySelectorAll("span").forEach((element) => {
    if (lang === "en") {
      element.innerHTML = enKeys[numberKey];
      numberKey++;
    } else if (lang === "ru") {
      element.innerHTML = ruKeys[numberKey];
      numberKey++;
    }
  });
}
let lang;
function setLocalStorage() {
  localStorage.setItem("lang", lang);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    lang = localStorage.getItem("lang");
    addKeys();
  } else {
    lang = "en";
    addKeys();
  }
}
window.addEventListener("load", getLocalStorage);

function runOnKeys(func, ...codes) {
  let pressed = new Set();
  document.addEventListener("keydown", function (event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
}

function changeLang() {
  if (lang === "en") {
    lang = "ru";
  } else {
    lang = "en";
  }
  addKeys();
}

runOnKeys(() => changeLang(), "ShiftLeft", "ControlLeft");
createKeyboard();

function addShiftKeys() {
  document.addEventListener("keydown", function (event) {
    if (
      event.code == "ShiftRight" ||
      (event.code == "ShiftLeft" && caps === false)
    ) {
      shift = true;
      let numberKey = 0;
      document.querySelectorAll("span").forEach((element) => {
        if (lang === "en") {
          element.innerHTML = enKeysShift[numberKey];
          numberKey++;
        } else if (lang === "ru") {
          element.innerHTML = ruKeysShift[numberKey];
          numberKey++;
        }
      });
    } else if (
      event.code == "ShiftRight" ||
      (event.code == "ShiftLeft" && caps === true)
    ) {
      shift = true;
      let numberKey = 0;
      document.querySelectorAll("span").forEach((element) => {
        if (lang === "en") {
          element.innerHTML = enKeysShift[numberKey].toLowerCase();
          numberKey++;
        } else if (lang === "ru") {
          element.innerHTML = ruKeysShift[numberKey].toLowerCase();
          numberKey++;
        }
      });
    }
  });

  document.addEventListener("keyup", function (event) {
    if (
      event.code == "ShiftRight" ||
      (event.code == "ShiftLeft" && caps === false)
    ) {
      shift = false;
      let numberKey = 0;
      document.querySelectorAll("span").forEach((element) => {
        if (lang === "en") {
          element.innerHTML = enKeys[numberKey];
          numberKey++;
        } else if (lang === "ru") {
          element.innerHTML = ruKeys[numberKey];
          numberKey++;
        }
      });
    } else if (
      event.code == "ShiftRight" ||
      (event.code == "ShiftLeft" && caps === true)
    ) {
      shift = false;
      let numberKey = 0;
      document.querySelectorAll("span").forEach((element) => {
        if (lang === "en") {
          element.innerHTML = enKeys[numberKey].toUpperCase();
          numberKey++;
        } else if (lang === "ru") {
          element.innerHTML = ruKeys[numberKey].toUpperCase();
          numberKey++;
        }
      });
    }
  });
}
addShiftKeys();

let caps = false;
let shift = false;

function addCaps() {
  document.addEventListener("keydown", function (event) {
    if (event.code == "CapsLock" && caps === false) {
      caps = true;
      let numberKey = 0;
      document.querySelectorAll("span").forEach((element) => {
        if (lang === "en") {
          element.innerHTML = enKeys[numberKey].toUpperCase();
          numberKey++;
        } else if (lang === "ru") {
          element.innerHTML = ruKeys[numberKey].toUpperCase();
          numberKey++;
        }
      });
    } else if (event.code == "CapsLock" && caps === true) {
      caps = false;
      let numberKey = 0;
      document.querySelectorAll("span").forEach((element) => {
        if (lang === "en") {
          element.innerHTML = enKeys[numberKey];
          numberKey++;
        } else if (lang === "ru") {
          element.innerHTML = ruKeys[numberKey];
          numberKey++;
        }
      });
    }
  });
}
addCaps();

function addPressButtons() {
  document.addEventListener("keydown", (event) => {
    document.querySelectorAll("li").forEach((el) => {
      if (el.classList.contains(event.code)) {
        el.classList.add("pressed");
        let addSign = "";
        if (event.code === "Tab") {
          addSign = "   ";
        } else if (event.code === "Space") {
          addSign = " ";
        } else if (
          event.code === "CapsLock" ||
          event.code === "ShiftLeft" ||
          event.code === "ShiftRight" ||
          event.code === "ControlLeft" ||
          event.code === "ControlRight" ||
          event.code === "MetaLeft" ||
          event.code === "AltLeft" ||
          event.code === "AltRight"
        ) {
          addSign = "";
        } else if (event.code === "Enter") {
          addSign = "\n";
        } else if (event.code === "Backspace") {
          document.querySelector("textArea").value = document.querySelector("textArea").value.substr(0, document.querySelector("textArea").value.length - 1);
        } else if (event.code === "Delete") {
            document.querySelector("textArea").value = document.querySelector("textArea").value.substr(0, document.querySelector("textArea").value.length - 1);
        } else {
          if (lang === "en") {
            if (shift === true && caps === true) {
              addSign =
                enKeysShift[numberKeys.indexOf(event.code)].toLowerCase();
            } else if (shift === true && caps === false) {
              addSign = enKeysShift[numberKeys.indexOf(event.code)];
            } else if (shift === false && caps === true) {
              addSign = enKeys[numberKeys.indexOf(event.code)].toUpperCase();
            } else {
              addSign = enKeys[numberKeys.indexOf(event.code)];
            }
          }
          else if (lang === "ru") {
            if (shift === true && caps === true) {
              addSign =
                ruKeysShift[numberKeys.indexOf(event.code)].toLowerCase();
            } else if (shift === true && caps === false) {
              addSign = ruKeysShift[numberKeys.indexOf(event.code)];
            } else if (shift === false && caps === true) {
              addSign = ruKeys[numberKeys.indexOf(event.code)].toUpperCase();
            } else {
              addSign = ruKeys[numberKeys.indexOf(event.code)];
            }
          }
        }
        document.querySelector("textArea").value += addSign;

      }
    });
  });

  document.addEventListener("keyup", (event) => {
    document.querySelectorAll("li").forEach((el) => {
      el.classList.remove("pressed");
    });
  });
}
addPressButtons();

function addMouseClick() {
  document.addEventListener("mousedown", (event) => {
    if (event.target.closest("li")) {
      event.target.classList.add("pressed");
      if (event.target.innerText === "Tab" || event.target.innerText === "TAB") {
        document.querySelector("textArea").value += "   ";
      } else if (event.target.innerText === "Space" || event.target.innerText === "SPACE") {
        document.querySelector("textArea").value += " ";
      }
      
      
      else if(event.target.innerText === "Caps Lock" || event.target.innerText === "CAPS LOCK"){
        if (event.target.innerText === "Caps Lock" || event.target.innerText === "CAPS LOCK" && caps === false) {
            caps = true;
            let numberKey = 0;
            document.querySelectorAll("span").forEach((element) => {
              if (lang === "en") {
                element.innerHTML = enKeys[numberKey].toUpperCase();
                numberKey++;
              } else if (lang === "ru") {
                element.innerHTML = ruKeys[numberKey].toUpperCase();
                numberKey++;
              }
            });
          } else if (event.target.innerText === "CAPS LOCK" || event.target.innerText === "Caps Lock" && caps === true) {
            caps = false;
            let numberKey = 0;
            document.querySelectorAll("span").forEach((element) => {
              if (lang === "en") {
                element.innerHTML = enKeys[numberKey];
                numberKey++;
              } else if (lang === "ru") {
                element.innerHTML = ruKeys[numberKey];
                numberKey++;
              }
            });
          }
      }



      else if( event.target.innerText === "LShift" || event.target.innerText === "RShift" ||  event.target.innerText === "LSHIFT" || event.target.innerText === "RSHIFT" ){
        if (
            event.target.innerText === "LShift" || 
            event.target.innerText === "RShift" ||
            event.target.innerText === "lshift" || 
            event.target.innerText === "rshift" ||
            event.target.innerText === "RSHIFT" ||
            event.target.innerText === "LSHIFT" && caps === false
          ) {
            shift = true;
            let numberKey = 0;
            document.querySelectorAll("span").forEach((element) => {
              if (lang === "en") {
                element.innerHTML = enKeysShift[numberKey];
                numberKey++;
              } else if (lang === "ru") {
                element.innerHTML = ruKeysShift[numberKey];
                numberKey++;
              }
            });
          } else if (
             event.target.innerText === "RSHIFT" ||
             event.target.innerText === "LSHIFT" ||
             event.target.innerText === "lshift" || 
             event.target.innerText === "rshift" ||
             event.target.innerText === "RShift" ||
             event.target.innerText === "LShift" && caps === true
          ) {
            shift = true;
            let numberKey = 0;
            document.querySelectorAll("span").forEach((element) => {
              if (lang === "en") {
                element.innerHTML = enKeysShift[numberKey].toLowerCase();
                numberKey++;
              } else if (lang === "ru") {
                element.innerHTML = ruKeysShift[numberKey].toLowerCase();
                numberKey++;
              }
            });
          }
      }




      else if (
        event.target.innerText === "LCtrl" || event.target.innerText === "LCTRL" ||
        event.target.innerText === "RCTRL" || event.target.innerText === "RCtrl" ||
        event.target.innerText === "WIN" || event.target.innerText === "Win" ||
        event.target.innerText === "LAlt" || event.target.innerText === "LALT" ||
        event.target.innerText === "RAlt"|| event.target.innerText === "RALT" 
      ) {
        document.querySelector("textArea").value += "";
      } else if (event.target.innerText === "Enter" || event.target.innerText === "ENTER") {
        document.querySelector("textArea").value += "\n";
      } else if (event.target.innerText === "Backspace" || event.target.innerText === "BACKSPACE") {
        document.querySelector("textArea").value = document.querySelector("textArea").value.substr(0, document.querySelector("textArea").value.length - 1);
      } else if (event.target.innerText === "Delete" || event.target.innerText === "DELETE") {
        document.querySelector("textArea").value = document.querySelector("textArea").value.substr(0, document.querySelector("textArea").value.length - 1);
      }else{
      document.querySelector("textArea").value += event.target.innerText;
      }
    }
  });
}

document.addEventListener("mouseup", (event) => {
  if (event.target.closest("li")) {
    event.target.classList.remove("pressed");
    if (
        event.target.innerText === "LShift" || 
        event.target.innerText === "RShift" ||
        event.target.innerText === "lshift" || 
        event.target.innerText === "rshift" ||
        event.target.innerText === "RSHIFT" ||
        event.target.innerText === "LSHIFT" && caps === false
      ) {
        shift = false;
        let numberKey = 0;
        document.querySelectorAll("span").forEach((element) => {
          if (lang === "en") {
            element.innerHTML = enKeys[numberKey];
            numberKey++;
          } else if (lang === "ru") {
            element.innerHTML = ruKeys[numberKey];
            numberKey++;
          }
        });
      } else if (
        event.target.innerText === "LShift" || 
        event.target.innerText === "RShift" ||
        event.target.innerText === "lshift" || 
        event.target.innerText === "rshift" ||
        event.target.innerText === "RSHIFT" ||
        event.target.innerText === "LSHIFT" && caps === true
      ) {
        shift = false;
        let numberKey = 0;
        document.querySelectorAll("span").forEach((element) => {
          if (lang === "en") {
            element.innerHTML = enKeys[numberKey].toUpperCase();
            numberKey++;
          } else if (lang === "ru") {
            element.innerHTML = ruKeys[numberKey].toUpperCase();
            numberKey++;
          }
        });
      }
  }
});

addMouseClick();
