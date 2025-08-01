// script.js const passwords = { "Leader541": "Shayan", "Hacker427": "Qaim", "exe829": "Hasan", "fighter,7648": "Hadi", "spy784": "Ayan" };

function login() { const pass = document.getElementById("passwordInput").value; const name = passwords[pass];

if (name) { localStorage.setItem("hebsMember", name); Swal.fire({ title: Access Granted , text: Welcome ${name}, icon: "success", timer: 1500, showConfirmButton: false }).then(() => { window.location.href = "dashboard.html"; }); } else { Swal.fire({ title: "Access Denied", text: "Wrong password", icon: "error", timer: 1500, showConfirmButton: false }); } }

