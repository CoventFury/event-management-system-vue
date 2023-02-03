<template>
  <div class="app">
    <Sidebar />
  </div>
  <div class="header">
    <img class="cover-photos" alt="Cover Photo" src="../assets/img/pic2.jpg" />
  </div>
  <div class="main-container">
    <div class="about-header">
      <h1 class="content-titles">Sunkissed Event | Boracay</h1>
    </div>
    <div class="second-header">
      <div class="date-element">
        <span class="material-symbols-outlined">calendar_month</span>
        <p>7th November, 2022</p>
      </div>
      <div class="place-element">
        <span class="material-symbols-outlined">location_on</span>
        <p>Boracay, Philippines, Leyte</p>
      </div>
    </div>
    <h2 class="participant-title">Participants</h2>
    <div class="icon-container">
      <img src="../assets/img/nora.jpg" class="bottom-icon" />
      <img src="../assets/img/grape.jpg" class="middle-icon" />
      <img src="../assets/img/cyp.jpg" class="top-icon" />
    </div>
    <div class="description-header">
      <h1 class="content-title2">Description</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="location-header">
      <h1 class="content-title3">Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62449.206516900376!2d121.892209408057!3d11.96928097876581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53c2f324b4ee7%3A0xa738e81e5e6dda36!2sBoracay!5e0!3m2!1sen!2sph!4v1675404359925!5m2!1sen!2sph"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Hind", sans-serif;
}

.cover-photos {
  display: flex;
  position: relative;
  margin: auto;
  width: 100vw;
  height: 350px;
  object-fit: cover;
  z-index: 0;
}
.participant-title {
  margin-top: 1%;
  font-weight: 600;
  color: #0f0b5d;
}
.content-titles {
  font-family: "Hind", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: #0f0b5d;
}

.content-title2,
.content-title3 {
  margin-top: 2%;
  color: #0f0b5d;
}

.description-header {
  margin-top: 5%;
}
.description-header p {
  color: #0f0b5d;
  text-align: justify;
  margin-right: 5%;
}
.second-header {
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
}

.date-element,
.place-element {
  display: flex;
  font-weight: 600;
  color: #0f0b5d;
}
</style>
