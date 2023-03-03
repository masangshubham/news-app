import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">NEWS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target="_blank" href="https://shubhammasang.netlify.app/Shubhammasang.pdf">My Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target="_blank" href="https://github.com/masangshubham">GitHub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target="_blank" href="https://github.com/masangshubham">Code</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
