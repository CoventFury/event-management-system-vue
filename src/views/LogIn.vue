<template>
  <div class="container">
    <div class="left-container">
      <div class="signin-signup">
        <form action="/dashboard" class="sign-in-form">
          <img src="../assets/img/logo.svg" alt="Logo" class="logo-img" />
          <h2 class="title">Login</h2>
          <p class="social-text">
            Track and organize all the details of your event in an organized way
          </p>
          <div class="input-field">
            <p class="details-text">Email*</p>
            <input
              type="text"
              v-model="email"
              placeholder="email@website.com"
              required
            />
          </div>
          <div class="input-field">
            <p class="details-text">Password*</p>
            <input
              type="password"
              v-model="password"
              placeholder="Min. 8 characters"
              required
            />
          </div>
          <p class="forget">Forget Password?</p>
          <input type="submit" class="btn solid" value="Login" id="submitBtn" />
          <p class="create-acc">
            Don't have an account yet?
            <a target="_blank" href="/signup" class> Create an Account</a>
          </p>
        </form>
      </div>
    </div>
    <div class="right-container">
      <div class="img-slideshow"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body,
input {
  font-family: "Hind", sans-serif;
}

.container .left-container,
.container .right-container {
  width: 100%;
  height: 50vh;
}

.container .img-slideshow {
  position: fixed;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: right;
}

.img-slideshow {
  background: url("../src/assets/img/6702855.jpg");
  @media (max-width: 1200px) {
    opacity: 0;
  }
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 6rem;
}

.title {
  font-size: 2.3rem;
  font-weight: bolder;
  color: #0f0b5d;
  margin-bottom: -10px;
}

.social-text {
  font-size: 1rem;
  font-weight: 500;
  color: #0f0b5d;
  padding: 1.5rem 0;
  margin-bottom: 15px;
}

.details-text {
  color: #0f0b5d;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.input-field {
  width: 800px;
  height: 50px;
  margin: 40px 0;
  border-radius: 44px;
  padding: 0 0.4rem;
}

.input-field input {
  background: #fdf9f9;
  outline: 1;
  border: none;
  color: #0f0b5d;
  width: 450px;
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 44px;
  box-sizing: border-box;
  padding: 0.8rem 3rem 0.5rem 1rem;
}

.input-field input:hover {
  outline-width: 1;
  outline-color: #0f0b5d;
}

.input-field input::placeholder-shown {
  color: #aaa;
  font-weight: 500;
}

.btn {
  width: 450px;
  height: 49px;
  outline: none;
  border: none;
  border-radius: 48px;
  background-color: #8348ff;
  color: #fff;
  font-weight: 800;
  margin: 2rem 0;
  transition: all 0.5s;
}

.btn:hover {
  background-color: #6333c9;
}

.forget {
  font-size: 0.9rem;
  font-weight: 700;
  color: #8348ff;
  margin-top: 20px;
  padding-left: 21rem;
  transition: all 0.5s;
}

.forget:hover {
  color: #6333c9;
}

.create-acc {
  color: #0f0b5d;
  font-size: 0.9rem;
  font-weight: 800;
}

.logo-img {
  width: 4.5rem;
  height: 4.5rem;
  margin-top: 2rem;
  margin-left: -1rem;
  margin-bottom: 1.5rem;
  padding: 2px 0;
}

a {
  text-decoration: none;
  color: #8348ff;
  font-size: 0.9rem;
  font-weight: 800;
}

a:hover {
  color: #6333c9;
}

@media screen and (min-width: 1200px) {
  .container {
    display: flex;
  }

  .container .left-container,
  .container .right-container {
    width: 50%;
    height: 100vh;
  }
}
</style>
