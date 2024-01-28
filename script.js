alert(
  "👋 Greetings and a warm welcome to my website! I'm Tonmoy. Embark on a fascinating journey to uncover your precise age by entering your date of birth in the designated input field and tapping the Calculate button. 🎩✨ Witness the enchantment unfold as we reveal the intricate tapestry of years, months, and days that compose your unique odyssey around the sun. 🌞 Thank you for joining us on this intellectually stimulating adventure!"
);
let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let m2 = today.getMonth();
  let d2 = today.getDate() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  console.log("Hi I am Tonmoy");
  result.innerHTML = `
  Your are <span>${y3}</span> years, <span>${m3}</span> month and <span>${d3} </span> days old.
 


 `;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
