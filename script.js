const btn = document.getElementById("btn");

function onPress() {
  btn.innerHTML = press();
}

function press(min, max) {
  min = 1;
  max = 7;
  return (randomNum = Math.floor(Math.random() * (max - min) + min));
}
