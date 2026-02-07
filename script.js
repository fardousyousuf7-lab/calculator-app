const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Mobile vibration function
function vibrate(){
  if(navigator.vibrate){
    navigator.vibrate(50);
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    vibrate();

    const value = btn.innerText;

    if(value === "C"){
      display.value = "";
    }else if(value === "="){
      try{
        display.value = eval(display.value);
      }catch{
        display.value = "Error";
      }
    }else if(value === "÷"){
      display.value += "/";
    }else if(value === "×"){
      display.value += "*";
    }else if(value === "−"){
      display.value += "-";
    }else{
      display.value += value;
    }
  });
});