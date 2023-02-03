<template>
  <header>
    <nav>
      <ul>
        <li>
          <a class="active" href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <span class="material-symbols-outlined"> menu </span>
      </label>
    </nav>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      services: [
        {
          title: "Web",
          link: "#",
        },
        {
          title: "Design",
          link: "#",
        },
        {
          title: "Videos",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body {
  font-family: "Hind", sans-serif;
}

.logo-item img {
  cursor: pointer;
  width: 250px;
  padding-top: 15px;
  padding-left: 40px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 70px;
  width: 100vw;
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
  color: black;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  font-weight: 700;
}

a.active,
a:hover {
  background: #fff;
  transition: 0.5s;
}
.checkbtn {
  font-size: 30px;
  color: black;
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
    background: #2c3e50;
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
