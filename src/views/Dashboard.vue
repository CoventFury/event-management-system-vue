<template>
  <div class="app">
    <CreateButton />
    <NavBard />
    <!-- SIDEBAR -->
    <div class="sidebar-fix">
      <Sidebar />
    </div>
    <router-view />
  </div>

  <section class="main">
    <div class="main-top">
      <img class="banner-picture" alt="Banner" src="../assets/img/banner.jpg" />
    </div>
    <div class="search-bar">
      <span class="material-symbols-outlined">search</span>
      <input type="text" placeholder="Search an event" />
    </div>

    <div class="main-body">
      <h1 class="recommended-title">Recommended Events</h1>
      <div class="main-body-options">
        <span class="material-symbols-outlined">grid_on</span>
        <span class="material-symbols-outlined">more_horiz</span>
      </div>
    </div>
    <div class="list-container">
      <div class="card">
        <div class="imgBox">
          <img src="../assets/img/event.jpg" />
        </div>
        <p class="event-date">7th November, 2022</p>
        <div class="event-info">
          <p class="event-name">Acquaintance Party - BSCS</p>
          <div class="icon-container">
            <img src="../assets/img/nora.jpg" class="bottom-icon" />
            <img src="../assets/img/grape.jpg" class="middle-icon" />
            <img src="../assets/img/cyp.jpg" class="top-icon" />
          </div>
        </div>
        <div class="location-info">
          <span class="material-symbols-outlined"> location_on </span>
          <p>DCST Building, VSU</p>
          <form action="/event-name">
            <button class="see-details-btn">See details</button>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="imgBox">
          <img src="../assets/img/pic2.jpg" />
        </div>
        <p class="event-date">7th November, 2022</p>
        <div class="event-info">
          <p class="event-name">Sunkissed Concert - Boracay</p>
          <div class="icon-container">
            <img src="../assets/img/nora.jpg" class="bottom-icon" />
            <img src="../assets/img/grape.jpg" class="middle-icon" />
            <img src="../assets/img/cyp.jpg" class="top-icon" />
          </div>
        </div>
        <div class="location-info">
          <span class="material-symbols-outlined"> location_on </span>
          <p>DCST Building, VSU</p>
          <form action="/events-name">
            <button class="see-details-btn">See details</button>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="imgBox">
          <img src="../assets/img/pic3.jpg" />
        </div>
        <p class="event-date">7th November, 2022</p>
        <div class="event-info">
          <p class="event-name">Fifa World Cup 2022- Qatar</p>
          <div class="icon-container">
            <img src="../assets/img/nora.jpg" class="bottom-icon" />
            <img src="../assets/img/grape.jpg" class="middle-icon" />
            <img src="../assets/img/cyp.jpg" class="top-icon" />
          </div>
        </div>
        <div class="location-info">
          <span class="material-symbols-outlined"> location_on </span>
          <p>DCST Building, VSU</p>
          <form action="/events-name">
            <button class="see-details-btn">See details</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import NavBard from "../components/NavBard.vue";
import CreateButton from "../components/CreateButton.vue";
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

.app {
  display: inline-block;
  position: fixed;
  z-index: 100;
  top: 0;
}

.sidebar-fixed {
  position: fixed;
}
button {
  width: 110px;
}
.top-header {
  display: flex;
  justify-content: space-between;
}
.dashboard-title {
  position: absolute;
  color: #0f0b5d;
  font-size: 3em;
  font-weight: 800;
  top: 20px;
  left: 150px;
  @media (max-width: 400px) {
    font-size: 2em;
  }
}

.right-buttons {
  position: absolute;
  top: 30px;
  right: -590px;
}

.right-buttons span {
  font-size: 2.5rem;
  padding-right: 20px;
}

.right-buttons .profile-picture {
  border-radius: 50%;
  width: 7%;
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

header {
  position: fixed;
  width: 100vw;
  background-color: var(--dark);
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

section {
  background: #f9f9f9;
  padding-top: 2.5%;
  padding-left: 4vh;
}

.main-top {
  display: flex;
  width: 100%;
  justify-content: center;
}

.logo-picture {
  width: 5rem;
}

.banner-picture {
  display: flex;
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 83%;
  max-height: 15%;
  border-radius: 15px;
  object-fit: cover;
}

.search-bar {
  background-color: #f3f2f2;
  max-width: 83%;
  height: 10%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 1.5rem auto;
  padding: 10px 25px;
  margin-bottom: -2rem;
  box-shadow: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.search-bar input {
  width: 1200px;
  padding-left: 2rem;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
}

.recommended-title {
  color: #0f0b5d;
  font-size: 2rem;
  font-weight: 800;
  padding-left: 1rem;
}
.main-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-bar img {
  width: 15px;
  color: #eee;
}

.list-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 200px;
  padding-left: 120px;
  width: 95%;
  @media (max-width: 450px) {
    padding-left: 50px;
  }
  margin-top: 30px;
}

.event-list {
  width: 75%;
  outline-style: solid;
  border-radius: 25px;
}

.event-list .thumbnail {
  display: flex;
  margin: auto;
  width: 90%;
  border-radius: 5%;
}

.event-list .flex-div {
  max-width: 18.75rem;
  max-height: 18.75rem;
  border-radius: 5%;
}
.card .event-info {
  display: flex;
  justify-content: space-evenly;
}

.icon-container {
  display: flex;
  position: relative;
  padding-right: 80px;
  z-index: 0;
}

.bottom-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
  bottom: 1;
  right: 1;
  margin-left: 60px;
  box-shadow: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.middle-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
  bottom: 1;
  right: 1;
  margin-left: 30px;
  box-shadow: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.top-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
  bottom: 1;
  right: 1;
  box-shadow: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.event-date {
  font-size: 0.875rem;
  padding-top: 100px;
  padding-left: 45px;
  color: #5d5d5d;
}

.event-name {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
}

.location-info {
  margin-top: 1rem;
  justify-content: space-between;
  display: flex;
}

.location-info p {
  width: 100%;
  margin-top: 0.3rem;
}

.card {
  position: relative;
  width: 90%;
  height: 120%;
  background: --dark-alt;
  border-radius: 20px;
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.imgBox {
  position: absolute;
  left: 50%;
  top: -120px;
  transform: translateX(-50%);
  width: 82%;
  height: 200px;
  background: #000;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}
.imgBox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  justify-content: left;
  align-items: right;
  background-color: #0f0b5d;
  font-family: "Hind", sans-serif;
  font-size: 12px;
  color: #eee;
  padding: 10px 24px;
  border-radius: 25px;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }

  @media screen and (max-width: 511px) {
    .list-container {
      margin-right: 100px;
    }
  }
}
</style>
