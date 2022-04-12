<template>
  <div v-if="user" className="d-flex justify-content-center align-items-center">
    <!-- dropDown userInfo -->
    <div className="dropdown">
      <div
        className="dropdown-toggle border px-3 py-1 my-2 d-flex justify-content-center align-items-center"
        role="button"
        id="dropDowns"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle fs-2"></i>
        <div
          className="ms-3 me-2 d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <i className="bi bi-bookmark-star me-1"></i>
            {{ user.username }}
          </div>
          <div>{{ user.email }}</div>
        </div>
      </div>

      <!-- DropDowns -->
      <ul className="dropdown-menu" aria-labelledby="dropDowns">
        <li>
          <div className="ms-3">MY STUFF</div>

          <!-- Profile -->
          <!-- <Link
                  to={`/user-profile/${user.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                  role="button"
                > -->
          <div className="dropdown-item">
            <i className="bi bi-person-circle fs-5 me-2"></i> Profile
          </div>
          <!-- </Link> -->

          <!-- LogOut -->
          <div
            className="dropdown-item"
            role="button"
            @click="logoutAndClearCache"
          >
            <i className="bi bi-box-arrow-right fs-5 me-2"></i> Logout
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="d-flex align-items-center" v-else="user">
    <div class="mx-3 fs-5">
      <router-link :to="{ name: 'login' }" style="color: black">
        Login
      </router-link>
    </div>

    <div class="mx-3 fs-5">
      <router-link :to="{ name: 'register' }" style="color: black">
        Register
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "@/stores/post/postStore";
import { useUserStore } from "@/stores/user/uesrStore";
import { toRefs } from "vue";

const userStore = useUserStore();
const postStore = usePostStore();

const { user } = toRefs(userStore);
function logoutAndClearCache() {
  userStore.logout();
  postStore.clearPostsCache();
  setTimeout(() => postStore.fetchPaginatedPosts(), 1);
}
</script>

<style scoped></style>
