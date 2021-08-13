function display(val) {

    document.getElementById("result").value += val;
  
  }
  
  function solve() {
  
    let x = document.getElementById("result").value;
  
    let y = eval(x);
  
    document.getElementById("result").value = y;
  
  }
  
  function clearScreen() {
  
    document.getElementById("result").value = "";
  
  }
  
//   The display() function is used for displaying the value on the calculator screen.
//   The evaluate() function is attached to the equals button and is used to do the math for our calculator application.
//   The clear() function is attached to the clear button and clears the calculator screen.