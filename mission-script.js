import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDc4txFkjXsN6ds8bZannRwECTR1T-Y1Z4",
  authDomain: "hebs-3daa8.firebaseapp.com",
  databaseURL: "https://hebs-3daa8-default-rtdb.firebaseio.com",
  projectId: "hebs-3daa8",
  storageBucket: "hebs-3daa8.appspot.com",
  messagingSenderId: "401317379209",
  appId: "1:401317379209:web:48ff3bad41915e499e1a58"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

let currentUID = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUID = user.uid;
    loadMissions();
  } else {
    window.location.href = "index.html";
  }
});

window.uploadMission = function () {
  const title = document.getElementById("missionTitle").value.trim();
  const details = document.getElementById("missionDetails").value.trim();

  if (!title || !details) return alert("Don’t leave fields empty!");

  const missionRef = push(ref(db, "missions/" + currentUID));
  set(missionRef, {
    title,
    details,
    timestamp: new Date().toLocaleString()
  });

  document.getElementById("missionTitle").value = "";
  document.getElementById("missionDetails").value = "";
};

function loadMissions() {
  const list = document.getElementById("missionList");
  list.innerHTML = "";

  const userMissions = ref(db, "missions/" + currentUID);
  onValue(userMissions, (snapshot) => {
    list.innerHTML = "";
    snapshot.forEach((missionSnap) => {
      const m = missionSnap.val();
      const li = document.createElement("li");
      li.innerHTML = `<strong>${m.title}</strong> - ${m.details} <br><small>${m.timestamp}</small>`;
      list.appendChild(li);
    });
  });
}

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};