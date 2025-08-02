function login() {
  const password = document.getElementById("passwordInput").value;
  const validPasswords = {
    "Leader541": "Shayan",
    "Hacker427": "Qaim",
    "exe829": "Hasan",
    "fighter,7648": "Hadi",
    "spy784": "Ayan"
  };

  if (password in validPasswords) {
    Swal.fire({
      title: 'Access Granted',
      text: 'Redirecting to HEBS dashboard...',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.href = "dashboard.html";
    });
  } else {
    Swal.fire({
      title: 'Access Denied',
      text: 'Incorrect Password!',
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  }
}