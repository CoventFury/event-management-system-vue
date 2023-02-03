<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img alt="Logo" src="../assets/img/logo.svg" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined"
          >keyboard_double_arrow_right</span
        >
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/dashboard">
        <span class="material-symbols-outlined">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/events">
        <span class="material-symbols-outlined">calendar_month</span>
        <span class="text">Events</span>
      </router-link>
      <router-link class="button" to="/profile">
        <span class="material-symbols-outlined">account_circle</span>
        <span class="text">Profile</span>
      </router-link>
    </div>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-outlined">share</span>
        <span class="text">Tell a Friend</span>
      </router-link>
      <router-link class="button" to="/faq">
        <span class="material-symbols-outlined">help</span>
        <span class="text">Frequently Asked Questions</span>
      </router-link>
      <router-link class="button" to="/login">
        <span class="material-symbols-outlined">logout</span>
        <span class="text">Sign out</span>
      </router-link>
    </div>
    <div class="flex"></div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  position: sticky;
  height: 1000lvh;
  overflow: hidden;
  padding: 1rem;

  background: linear-gradient(45deg, var(--dark-alt), var(--dark));
  color: var(--light);

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;

      .material-symbols-outlined {
        font-size: 1.5rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-symbols-outlined {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  h3 {
    color: var (--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-in-out;

      .material-symbols-outlined {
        font-size: 1.5rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      .text {
        font-weight: 400;
        font-size: 1rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-symbols-outlined,
        text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button,
    .text {
      opacity: 1;
    }

    .button {
      .material-symbols-outlined {
        margin-right: 1.5rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
