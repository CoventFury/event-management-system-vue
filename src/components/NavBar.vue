<template>
  <header id="mynav">
    <nav>
      <img src="../assets/img/logo-text.png" class="logo-id" />
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <span class="material-symbols-outlined"> menu </span>
      </label>
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#sec">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
let color_code = document.getElementById("mynav");

window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("header");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

header {
  background-color: transparent;
}

nav {
  height: 80px;
  width: 100%;
}

nav ul {
  float: right;
  margin-right: 20px;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a {
  color: #fff;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  font-weight: 400;
}
.logo-id {
  margin-top: 1.4rem;
  margin-left: 2rem;
  width: 10rem;
}
a.active,
a:hover {
  background: inherit;
  transition: 0.5s;
}
.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 16px;
  }
}
@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2a2a2a;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
    color: white;
  }
  a:hover,
  a.active {
    background: none;
    color: #0082e6;
  }
  #check:checked ~ ul {
    left: 0;
  }
}
</style>
