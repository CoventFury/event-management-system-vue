<template>
  <header id="color-code">
    <div class="right-menu">
      <img
        class="profile-picture"
        alt="Profile Picture"
        src="../assets/img/profile_pic.jpg"
      />
    </div>
  </header>
</template>
<script>
export default {
  name: "NavBard",
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
}

li,
a,
button {
  font-family: "Hind", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 3%;
}

.logo {
  cursor: pointer;
  padding-right: 1rem;
  padding-bottom: -1rem;
  width: 50px;
}

.profile-picture {
  border-radius: 50%;
  width: 2.5rem;
}

.right-menu {
  position: absolute;
  right: 30px;
}
</style>
