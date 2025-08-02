function login() {
  const password = document.getElementById("passwordInput").value;

  const users = {
    "Leader541": "Shayan",
    "Hacker427": "Qaim",
    "exe829": "Hasan",
    "fighter,7648": "Hadi",
    "spy784": "Ayan"
  };

  if (users[password]) {
    localStorage.setItem("hebs_user", users[password]); // ✅ Save login
    window.location.href = "dashboard.html";
  } else {
    Swal.fire("Access Denied", "Wrong password!", "error");
  }
}