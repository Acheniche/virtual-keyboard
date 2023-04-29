let numberKeys = [ 
    "Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace",
    "Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete",
    "CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter",
    "ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight",
    "ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"];

const enKeys = [
    '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
    'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del',
    'Caps Lock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
    'LShift','z','x','c','v','b','n','m',',','.','/','↑','RShift',
    'LCtrl','Win','LAlt','Space','RAlt','←','↓','→','RCtrl'];

const ruKeys = [
    'ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
    'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del',
    'Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter',
    'LShift','я','ч','с','м','и','т','ь','б','ю','.','↑','RShift',
    'LCtrl','Win','LAlt','Space','RAlt','←','↓','→','RCtrl'];

const enKeysCaps = [
    '~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace',
    'Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del',
    'Caps Lock','A','S','D','F','G','H','J','K','L',':','"','Enter',
    'LShift','Z','X','C','V','B','N','M','<','>','?','↑','RShift',
    'LCtrl','Win','LAlt','Space','RAlt','RCtrl','←','↓','→'];

const ruKeysCaps = [
    'Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace',
    'Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','Del',
    'Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter',
    'LShift','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','↑','RShift',
    'LCtrl','Win','LAlt','Space','RAlt','←','↓','→','RCtrl'];


    function createKeyboard(){
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
    textArea.autofocus = true;
    wrapper.appendChild(textArea);

    let keyboardWrapper = document.createElement("div");
    keyboardWrapper.classList = "keyboardWrapper";
    wrapper.appendChild(keyboardWrapper);

    let ul = document.createElement("ul");
    keyboardWrapper.appendChild(ul);

    for(let i = 0; i < numberKeys.length; i++){
        let li = document.createElement("li");
        ul.append(li);
    }
    
    document.querySelectorAll("li").forEach(element => {
        let span = document.createElement("span");
        element.append(span);
    });

    let footer = document.createElement("footer");
    let h3 = document.createElement("h3");
    h3.textContent = "Press Ctrl + Shift to change language"
    body.append(footer);
    footer.append(h3);
}

function addKeys(){
    console.log(lang)
    let numberKey = 0;
    document.querySelectorAll("span").forEach(element => {
        if(lang === "en"){
        element.innerHTML = enKeys[numberKey];
        numberKey++;
        }
        else if(lang === "ru"){
        element.innerHTML = ruKeys[numberKey];
        numberKey++;  
        }
    })
}
let lang;
function setLocalStorage(){
    localStorage.setItem("lang", lang);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage(){
    if(localStorage.getItem("lang")){
        lang = localStorage.getItem("lang");
        addKeys();
    }
}
window.addEventListener("load", getLocalStorage);

function runOnKeys(func, ...codes){
    let pressed = new Set();
    document.addEventListener("keydown", function (event){
        pressed.add(event.code);

        for(let code of codes){
            if(!pressed.has(code)){
                return;
            }
        }
        pressed.clear();
        func();
    });

    document.addEventListener("keyup", function(event){
        pressed.delete(event.code);
    });
}

function changeLang(){
    if(lang === "en"){
        lang = "ru";
    }
    else{
        lang = "en";
    }
    addKeys();
}

runOnKeys(() => changeLang(),"ShiftLeft", "ControlLeft");
createKeyboard();


      