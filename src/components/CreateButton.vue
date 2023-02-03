<template>
  <div class="box">
    <a href="#divOne" class="circle-button">
      <img class="add-button" src="../assets/img/add button.png" />
      <span class="tooltiptext">Create an Event</span>
    </a>
  </div>

  <div class="overlay" id="divOne">
    <div class="wrapper">
      <div class="top-menu">
        <a href="#" class="close">&times;</a>
        <h2>Create Event</h2>
        <span class="material-symbols-outlined"> more_vert </span>
      </div>
      <div class="content">
        <div class="upload-image" id="imgBox">
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            style="display: none"
            onchange="loadFile(event)"
          />
          <label for="file"
            ><img src="../assets/img/upload.svg" class="upload-icon"
          /></label>
        </div>
        <div class="container">
          <form>
            <div class="top-input">
              <div class="title-placeholder">
                <label>Event Title</label>
                <input type="text" placeholder="Enter event name" />
              </div>
              <div class="date-placeholder">
                <label>Date</label>
                <input type="date" placeholder="mm/dd/yyyy" />
              </div>
              <div class="time-placeholder">
                <label>Time</label>
                <input type="time" placeholder="hh:mm AM/PM" />
              </div>
            </div>
          </form>
        </div>
        <div class="additional-events">
          <label>Time</label>
          <input type="time" placeholder="hh:mm AM/PM" />
        </div>
        <div class="additional-events">
          <label> Additional Event Details <br /> </label>
          <textarea placeholder="Lorem Ipsum..."></textarea>
        </div>
        <div class="invite-participants">
          <label> Invite Participants </label>
          <div class="icon-container">
            <img src="../assets/img/nora.jpg" class="bottom-icon" />
            <img src="../assets/img/grape.jpg" class="middle-icon" />
            <img src="../assets/img/cyp.jpg" class="top-icon" />
          </div>
        </div>
        <input type="submit" class="submit-button" value="Create Event" />
      </div>
    </div>
  </div>
</template>
<script setup>
var imgBox = document.getElementById("imgBox");

var loadFile = function (event) {
  imgBox.style.backgroundImage =
    "url(" + window.webkitURL.createObjectURL(event.target.files[0]) + ")";
};
</script>
<style lang="scss">
body {
  font-family: "Hind", sans-serif;
}

.circle-button img {
  color: #fff;
  position: fixed;
  font-size: 1rem;
  bottom: 40px;
  right: 40px;
  width: 60px;
  border-radius: 50px;
}
.box {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.box .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #fff;
  color: #0f0b5d;
  font-weight: 500;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  bottom: 70px;
  left: 1280px;
  position: absolute;
  z-index: 1;
}

.box:hover .tooltiptext {
  visibility: visible;
}

.top-menu {
  display: flex;
  margin-left: 6vw;
  justify-content: space-between;
  width: 65vw;
  margin-bottom: 30px;
}

.wrapper h2 {
  position: absolute;
  top: 25px;
  left: 42%;
  font-size: 2vw;
  font-weight: 600;
  color: #0f0b5d;
}

.wrapper span {
  position: absolute;
  top: 25px;
  right: 30px;
  color: #0f0b5d;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}
.wrapper {
  margin: 70px auto;
  background: #e7e7e7;
  border-radius: 40px;
  width: 60%;
  height: 80%;
  position: relative;
  transition: all 5s ease-in-out;
}

.wrapper .close {
  position: absolute;
  top: 20px;
  left: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #0f0b5d;
}
form {
  width: 60vw;
}
.upload-image {
  background: #cbcaca;
  color: #fff;
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 30vh;
  border-radius: 15px;
  margin: auto;
  margin-top: 60px;
  position: relative;
}

.upload-icon {
  position: absolute;
  width: 40px;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);
  filter: brightness(0) invert(1);
}

.upload-icon:hover {
  filter: invert(4%) sepia(94%) saturate(6363%) hue-rotate(240deg)
    brightness(104%) contrast(96%);
}

.top-input {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  margin-right: 4rem;
}
.top-input label {
  font-weight: 500;
  color: #5d5d5d;
}
.top-input input {
  border: 0;
  outline: 0;
  width: 90%;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 2px solid #d9d9d9;
  background-color: transparent;
}

.top-input input:active {
  border-bottom: 2px solid black;
}
::placeholder {
  font-size: 1rem;
  font-weight: 400;
}

.additional-events label {
  color: #5d5d5d;
  margin-left: 6vw;
  font-weight: 500;
}
.additional-events input {
  border: 0;
  outline: 0;
  width: 90%;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 2px solid #d9d9d9;
  background-color: transparent;
}
textarea {
  resize: none;
  overflow: hidden;
  margin-left: 6vw;
  width: 80%;
  border: 0;
  outline: 0;
  background-color: transparent;
  border-bottom: 2px solid #d9d9d9;
}
.invite-participants {
  margin-left: 6vw;
}
.submit-button {
  background-color: #0f0b5d;
  outline: 0;
  border: 0;
  color: #fff;
  position: absolute;

  width: 80%;
  height: 40px;
  font-size: 0.75rem;
  border-radius: 20px;
}
</style>
