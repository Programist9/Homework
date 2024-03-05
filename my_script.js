function askUser() {
  var name = prompt("What is your name?");
  if (!name) {
    alert("Please enter your name.");
    askUser();
    return;
  }
  var age = prompt("How old are you?");
  if (!age || isNaN(age)) {
    alert("Please enter a valid age.");
    askUser();
    return;
  }
  var smokes = confirm("Do you smoke?");
  showResult(name, age, smokes);
}

function showResult(name, age, smokes) {
  if (age < 18) {
    if (smokes) {
      alert(name + ", do your parents know about this?");
    } else {
      alert("Good job, " + name + "! A great example for your peers.");
    }
  } else {
    if (smokes) {
      alert(
        "Well, " +
          name +
          ", it's your choice. But I wouldn't recommend smoking."
      );
    } else {
      alert("Super, " + name + "! You must be into sports as well!");
    }
  }
}

askUser();
