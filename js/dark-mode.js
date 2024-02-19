const body = document.querySelector("body");
const toggleButton = document.createElement("button");
toggleButton.classList.add("toggle");
body.prepend(toggleButton);

if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleButton.textContent = "🔆 Light Mode";
  } else {
    body.classList.remove("dark");
    toggleButton.textContent = "🌙 Dark Mode";
  }
} else {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.classList.add("dark");
    toggleButton.textContent = "🔆 Light Mode";
  } else {
    body.classList.remove("dark");
    toggleButton.textContent = "🌙 Dark Mode";
  }
}

const button = document.querySelector(".toggle");
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  button.textContent = "🔆 Light Mode";
}

button.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    button.textContent = "🔆 Light Mode";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    button.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "dark");
  }
});
