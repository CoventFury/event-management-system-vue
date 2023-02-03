<template>
  <div class="app">
    <Sidebar />
  </div>
  <div class="header">
    <img
      class="cover-photo"
      alt="Cover Photo"
      src="../assets/img/cover-photo.jpg"
    />
    <div class="profile-pic-info">
      <img
        class="profile-pic"
        alt="Profile Picture"
        src="../assets/img/profile_pic.jpg"
      />
    </div>
  </div>
  <div class="main-container">
    <div class="about-header">
      <h1 class="content-title">Raphael Saavedra Orillano</h1>
      <span class="material-symbols-outlined"> edit_note </span>
    </div>
    <p class="lorem-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div class="interest-header">
      <h1 class="content-title">Interest</h1>
      <span class="material-symbols-outlined"> edit_note </span>
    </div>
    <div class="removable-buttons">
      <button class="x1-button">Watch Parties</button>
      <button class="x2-button">Clean-up Drives</button>
      <button class="x3-button">Gaming</button>
      <button class="x4-button">Programming</button>
    </div>
    <h1 class="content-title">Events Joined</h1>
    <div class="grid-container">
      <div class="img">
        <img class="events-tab" alt="event1" src="../assets/img/pic1.jpg" />
        <div class="img-overlay img-overlay--blur">
          <div class="event-description">
            <h1 class="event-title">Valorant Tournament, Brazil</h1>
            <h3 class="date">November 7, 2022</h3>
          </div>
        </div>
      </div>
      <div class="img">
        <img class="events-tab" alt="event1" src="../assets/img/pic2.jpg" />
        <div class="img-overlay img-overlay--blur">
          <div class="event-description">
            <h1 class="event-title">Sunkissed Concert, Boracay</h1>
            <h3 class="date">November 8, 2022</h3>
          </div>
        </div>
      </div>
      <div class="img">
        <img class="events-tab" alt="event1" src="../assets/img/pic3.jpg" />
        <div class="img-overlay img-overlay--blur">
          <div class="event-description">
            <h1 class="event-title">Fifa World Cup, Qatar</h1>
            <h3 class="date">November 9, 2022</h3>
          </div>
        </div>
      </div>
      <div class="img">
        <img class="events-tab" alt="event1" src="../assets/img/pic4.jpg" />
        <div class="img-overlay img-overlay--blur">
          <div class="event-description">
            <h1 class="event-title">Anime Expo, Sm City Pasig</h1>
            <h3 class="date">November 10, 2022</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>
<style lang="scss">
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
}

.cover-photo {
  display: flex;
  position: relative;
  margin: auto;
  width: 100vw;
  height: 250px;
  object-fit: cover;
  z-index: 0;
  filter: blur(3px);
}

.profile-pic {
  display: flex;
  position: absolute;
  width: 100px;
  border-radius: 50px;
  z-index: 1;
  top: 6%;
  left: 50%;
}

.profile-name {
  display: flex;
  position: absolute;
  color: #eee;
  z-index: 1;
  top: 30%;
  left: 46%;
}

.main-container {
  padding-top: 4rem;
  padding-left: 5rem;
  padding-right: 2rem;
}

.content-title {
  font-family: "Hind", sans-serif;
  font-size: 1.375rem;
  font-weight: 600;
  color: #0f0b5d;
}
.about-header {
  display: flex;
  justify-content: space-between;
}

.material-symbols-outlined {
  color: #0f0b5d;
}

.lorem-text {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: justify;
  @media (min-width: 768px) {
    text-align: justify;
  }
}

.interest-header {
  display: flex;
  justify-content: space-between;
}

.removable-buttons {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  width: 30vw;
  padding-bottom: 1rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }
}
.x1-button {
  background-color: #f0932b;
  font-family: "Hind", sans-serif;
  font-weight: 600px;
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.x2-button {
  background-color: #4834d4;
  font-family: "Hind", sans-serif;
  font-weight: 600px;
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.x3-button {
  background-color: #6ab04c;
  font-family: "Hind", sans-serif;
  font-weight: 600px;
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.x4-button {
  background-color: #130f40;
  font-family: "Hind", sans-serif;
  font-weight: 600px;
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  margin-top: 15px;
}

.events-tab {
  display: block;
  width: 300px;
  height: 18rem;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.img {
  position: relative;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 92%;
  height: 100%;
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  opacity: 0;
  transition: opacity 0.25s;
}

.img-overlay--blur {
  backdrop-filter: blur(2px);
}

.img-overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}

.img-overlay:hover {
  opacity: 1;
}

.img-overlay:hover > * {
  transform: translateY(0);
}

.event-title {
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 1.5rem;
  padding-left: 2.1rem;
}

.date {
  font-size: 1rem;
  font-weight: 100;
  padding-left: 2.1rem;
}
</style>
