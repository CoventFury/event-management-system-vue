<template>
  <div class="container">
    <div class="left-container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form">
          <img src="../assets/img/logo.svg" alt="Sign Up" class="logo-img" />
          <h2 class="title">Sign Up</h2>
          <div class="input-field">
            <p class="details-text">Username*</p>
            <input type="text" placeholder="Username" required />
          </div>
          <div class="input-field">
            <p class="details-text">Birthday*</p>
            <input type="date" value="1901/01/01" required />
          </div>
          <div class="input-field">
            <p class="details-text">Email*</p>
            <input type="text" placeholder="email@website.com" required />
          </div>
          <div class="input-field">
            <p class="details-text">Password*</p>
            <input type="password" placeholder="Min. 8 characters" required />
          </div>
          <input type="submit" class="btn solid" value="Sign Up" />
          <p class="create-acc">
            Already have an account?
            <a target="_blank" href="/login" class> Sign In</a>
          </p>
        </form>
      </div>
    </div>
    <div class="right-container">
      <div class="img-slideshow"></div>
    </div>
  </div>
</template>

<script>
export default {
  title: "EventMag - SignUp",
  name: "SignUp",
};
</script>
