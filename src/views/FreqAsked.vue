<template>
  <div class="app">
    <Sidebar />
  </div>
  <h1 class="title-above">Frequently Asked Questions</h1>
  <div class="wrapper">
    <!--Accordion 1-->
    <div class="parent-tab">
      <input type="radio" name="tab" id="tab-1" />
      <label for="tab-1">
        <span>What is EventMag?</span>
        <div class="icon"><i class="fas fa-plus"></i></div>
      </label>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <!--Accordion 2-->
    <div class="parent-tab">
      <input type="radio" name="tab" id="tab-2" />
      <label for="tab-2">
        <span>Why should I choose EventMag?</span>
        <div class="icon"><i class="fas fa-plus"></i></div>
      </label>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <!--Accordion 3-->
    <div class="parent-tab tab-3">
      <input type="radio" name="tab" id="tab-3" />
      <label for="tab-3">
        <span>How to get started with EventMag?</span>
        <div class="icon"><i class="fas fa-plus"></i></div>
      </label>
      <div class="content">
        <!--Sub 1-->
        <div class="child-tab">
          <input type="checkbox" id="tab-4" />
          <label for="tab-4">
            <span>Getting Started</span>
            <div class="icon"><i class="fas fa-plus"></i></div>
          </label>
          <div class="sub-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <!--Sub 2-->
        <div class="child-tab">
          <input type="checkbox" id="tab-5" />
          <label for="tab-5">
            <span>Is there a fee to use our app?</span>
            <div class="icon"><i class="fas fa-plus"></i></div>
          </label>
          <div class="sub-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Hind", sans-serif;
}
.wrapper {
  max-width: 1000px;
  padding: 0 20px;
}
.title-above {
  background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  color: #fff;
  font-size: 500%;
  text-align: center;
  justify-content: center;
}

.parent-tab input:checked ~ .content,
.child-tab input:checked ~ .sub-content {
  max-height: 100vh;
}
.tab-3 input:checked ~ .content {
  padding: 15px 20px;
}
.wrapper input {
  display: none;
}

.wrapper .parent-tab,
.wrapper .child-tab {
  margin-bottom: 8px;
  border-radius: 3px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.18);
}

.wrapper .parent-tab label,
.wrapper .child-tab label {
  background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  z-index: 99;
}
.wrapper label span {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 0 -1px 1px #0056b3;
  @media (max-width: 679px) {
    font-size: 13px;
  }
  @media (max-width: 519px) {
    font-size: 8px;
  }
}
.child-tab label span {
  font-size: 17px;
}
.wrapper label .icon {
  position: relative;
  height: 30px;
  width: 30px;
  color: #007bff;
  display: block;
  font-size: 15px;
  background: #fff;
  border-radius: 50%;
  text-shadow: 0 -1px 1px #0056b3;
}
.parent-tab input:checked ~ label .icon i:before,
.child-tab input:checked ~ label .icon i:before {
  content: "\f068";
}
.wrapper label .icon i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wrapper .parent-tab .content,
.wrapper .child-tab .sub-content {
  max-height: 0px;
  overflow: hidden;
  transition: all 0.4s ease;
}
.wrapper .parent-tab .content p,
.wrapper .child-tab .sub-content p {
  font-size: 16px;
  padding: 15px 20px;
}
</style>
