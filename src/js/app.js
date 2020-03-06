const getHello = function(greeting) {
        return greeting;
}

var counter = 0;
const counterButton = document.getElementById("counterButton");
const displayCount = document.getElementById("displayCount");

counterButton.onclick = function(){
  counter++;
  displayCount.innerHTML = counter;
  console.log(counter);
  if(counter == 100)
  {
      alert("You Clicked 100 times!");
  }

  if(counter == 20)
  {
    alert("You Clicked 20 times!");
  }

}

resetButton.onclick = function(){
  counter = 0;
  displayCount.innerHTML = counter;
}
