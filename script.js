const members = {
  "Leader541": "Shayan",
  "Hacker427": "Qaim",
  "exe829": "Hasan",
  "fighter,7648": "Hadi",
  "spy784": "Ayan"
};

function login() {
  const pass = document.getElementById("password").value;
  const member = members[pass];
  const status = document.getElementById("status");

  if (member) {
    localStorage.setItem("hebsUser", member);
    window.location.href = "main.html";
  } else {
    status.innerText = "Wrong password!";
  }
}