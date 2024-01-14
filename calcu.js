const display=document.getElementById("display");
function appendToDispaly(input){
display.value+=input;
}
function clearDisplay(){
    display.value=" ";

}
function calculator(){
    try{
        display.value=eval(display.value);

    }
  catch(error)
  {
    display.value="error";

  }
}