<template>
  <div class="app">
    <NavBar />
  </div>
  <section>
    <img src="../assets/img/bg.jpg" id="bg" />
    <img src="../assets/img/design1.png" id="stars" />
    <img src="../assets/img/design2.png" id="moon" />
    <h2 id="text">Be a Part of the <br />EventMag Family</h2>
    <a href="/login" id="btn">Join Now</a>
    <img src="../assets/img/front.png" id="mountains_behind" />
  </section>
  <div class="sec" id="sec">
    <h2>About</h2>
    <p class="text-align">
      EventMag powers immersive in-person, virtual, and hybrid experiences. The
      EventMag Event Experience OS is a data-rich open platform that allows
      Event Experience Leaders to manage events, engage audiences, activate
      communities, and deliver powerful business outcomes — while keeping
      attendee data private and secure. EventMag powers the events of
      world-leading brands — from Fortune 100 enterprise organizations and
      financial institutions to creative agencies and scaling tech companies.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
  <div class="contact-form" id="contact">
    <form>
      <h2 class="contact-title">Contact Us</h2>
      <input type="text" class="input-text" placeholder="Your Name" />
      <input type="text" class="input-text" placeholder="Your Email" />
      <input type="text" class="input-text" placeholder="Subject" />
      <textarea
        type="text"
        class="input-text textarea-field"
        placeholder="State your suggestion, concerns, or your ratings for this webpage"
      />
      <button type="submit" class="btn-space">Send Message</button>
    </form>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";

let star = document.getElementById("stars");
let moons = document.getElementById("moon");
let mountains_behinds = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 5 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
});
</script>

<style lang="scss" scoped>
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Hind", sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: hidden;
}
body {
  min-height: 100vh;
}

.contact-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 3rem;
  color: white;
}
.contact-form {
  display: flex;
  background-color: #1c0522;
  justify-content: center;
  align-items: center;
}

section::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, #1c0522, transparent);
  z-index: 1000;
}
.app {
  position: absolute;
  z-index: 1000;
}

form {
  margin: 35px;
}
.input-text {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #777;
  border-radius: 14px;
  outline: none;
}

.textarea-field {
  height: 150px;
  padding-top: 10px;
  background-color: white;
}
header .logo {
  color: #fff;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  list-style: none;
  margin-left: 20px;
}
header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #fff;
  border-radius: 20px;
}
.text-align {
  text-align: justify;
  text-justify: inter-word;
}

header ul li a:hover,
header ul li a.active {
  background: #fff;
  color: #2b1055;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
section::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #1c0522, transparent);
  z-index: 1000;
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
section img#moon {
  mix-blend-mode: screen;
}

section img#mountains-behind {
  z-index: 10;
}
#text {
  position: absolute;
  top: 45%;
  right: 32%;
  text-align: center;
  color: #fff;
  text-shadow: 200px;
  text-shadow: 2px 4px 20px #000000;
  white-space: nowrap;
  font-size: 4.5vw;
  z-index: 1;
  transform: translateY(-100px);
}
#btn {
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: #0f0b5d;
  font-size: 1.5rem;
  color: #fff;
  z-index: 10;
  transform: translateY(150px);
}
.sec {
  position: relative;
  padding: 100px;
  background: #1c0522;
}
.sec h2 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #fff;
}
.sec p {
  font-size: 1em;
  color: #fff;
}

.btn-space {
  border-radius: 20px;
  color: #fff;
  margin-top: 18px;
  background-color: #47c35a;
  font-size: 12px;
  border: none;
  cursor: pointer;
}
</style>
