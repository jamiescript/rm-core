const toggle = document.querySelector("body");
const sidebar = document.createElement("aside");
toggle.prepend(sidebar);

sidebar.innerHTML = `
      <ul>
        <li>
          <a href="login.html">Login</a>
        </li>
        <li>
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="reset-password.html">Reset Password</a>
        </li>
        <li>
          <a href="dashboard.html">Dashboard</a>
        </li>
      </ul>`;

const links = sidebar.querySelectorAll("a");
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
