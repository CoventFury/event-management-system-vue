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

  <div class="event-main">
    <h1>Event</h1>
    <h2>You have 4 events to attend this month</h2>
    <div class="upcoming-events">
      <h2>Upcoming Events</h2>
    </div>
    <div class="events-container">
      <div class="card-row">
        <div class="left-card">
          <img src="../assets/img/pic1.jpg" class="event-icon" />
          <div class="left-right-card">
            <p>November 7, 09:45 AM</p>
            <h2>Acquaintance Party, DCST</h2>
            <div class="card-location">
              <span class="material-symbols-outlined"> location_on </span>
              <p>DCST Building, VSU</p>
            </div>
            <button>See Details</button>
          </div>
        </div>
        <div class="right-card">
          <button>Attendee</button>
        </div>
      </div>
      <div class="card-row">
        <div class="left-card">
          <img src="../assets/img/event.jpg" class="event-icon" />
          <div class="left-right-card">
            <p>November 7, 09:45 AM</p>
            <h2>Acquaintance Party, DCST</h2>
            <div class="card-location">
              <span class="material-symbols-outlined"> location_on </span>
              <p>DCST Building, VSU</p>
            </div>
            <button>See Details</button>
          </div>
        </div>
        <div class="right-card">
          <button>Attendee</button>
        </div>
      </div>
      <div class="card-row">
        <div class="left-card">
          <img src="../assets/img/pic2.jpg" class="event-icon" />
          <div class="left-right-card">
            <p>November 7, 09:45 AM</p>
            <h2>Acquaintance Party, DCST</h2>
            <div class="card-location">
              <span class="material-symbols-outlined"> location_on </span>
              <p>DCST Building, VSU</p>
            </div>
            <button>See Details</button>
          </div>
        </div>
        <div class="right-card">
          <button>Attendee</button>
        </div>
      </div>
      <div class="card-row">
        <div class="left-card">
          <img src="../assets/img/pic3.jpg" class="event-icon" />
          <div class="left-right-card">
            <p>November 7, 09:45 AM</p>
            <h2>Acquaintance Party, DCST</h2>
            <div class="card-location">
              <span class="material-symbols-outlined"> location_on </span>
              <p>DCST Building, VSU</p>
            </div>
            <button>See Details</button>
          </div>
        </div>
        <div class="right-card">
          <button class="host">Host</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import NavBard from "../components/NavBard.vue";
import CreateButton from "../components/CreateButton.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Hind", sans-serif;
}

.event-main {
  position: absolute;
  top: 120px;
  left: 120px;
}

.event-main h1 {
  color: #0f0b5d;
  font-size: 4rem;
}

.event-main h2 {
  color: #0f0b5d;
  font-size: 1.5rem;
  font-weight: 400;
}

.upcoming-events h2 {
  color: #0f0b5d;
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.event-icon {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 10px;
  object-fit: cover;
}
.events-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(150px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  width: 500px;
  padding-bottom: 1rem;
  @media (max-width: 620px) {
    grid-row-gap: 40px;
  }
  @media (max-width: 516px) {
    grid-row-gap: 80px;
  }
}

.card-row {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 60vw;
  height: 20vh;
  background: #d9d9d9;
  border-radius: 10px;
  box-shadow: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.left-card {
  display: flex;
}
.left-right-card {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
}
.left-right-card h2 {
  font-weight: 600;
  font-size: 1rem;
}
.left-right-card p {
  font-weight: 200;
  font-size: 1rem;
  color: #0f0b5d;
}
.card-location {
  display: flex;
}
.right-card button {
  margin-right: 1rem;
  margin-top: 3rem;
  width: 100px;
}

.right-card .host {
  margin-right: 1rem;
  margin-top: 3rem;
  width: 100px;
  background-color: green;
}
</style>
