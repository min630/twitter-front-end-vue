<template>
  <div class="row">
    <!-- Following list -->
    <Spinner v-if="isLoading" />
    <!-- v-else -->
    <div class="follow-list">
      <div
        class="user-card d-flex position-relative"
        v-for="user in followings"
        :key="user.followingId"
      >
        <router-link :to="{ name: 'user-profile', params: { userId: user.followingId } }">
          <img :src="user.avatar" class="avatar" alt="" />
        </router-link>
        <div class="user-info d-flex flex-column">
          <div class="text-name">{{ user.name }}</div>
          <div class="text-account ms-0">@{{ user.account }}</div>
          <div class="text-content">
            {{ user.introduction }}
          </div>
        </div>
        <button
          type="button"
          class="btn btn-follow position-absolute"
          v-if="!isFollowing"
          @click.stop.prevent="addFollowing(followingId)"
        >
          跟隨
        </button>
        <button
          type="button"
          class="btn btn-following position-absolute"
          v-else
          @click.stop.prevent="deleteFollowing(followingId)"
        >
          正在跟隨
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import { Toast } from "../utils/helpers";
import userAPI from "../apis/user";
import { mapState } from "vuex";

export default {
  name: "userFollowingList",
  components: {
    Spinner,
  },
  props: {
    userId: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      followings: [],
      isLoading: true,
      isFollowing: true,
    };
  },
  created() {
    const id = this.userId;
    this.fetchFollowing(id);
  },
  watch: {
    userId(newValue) {
      this.fetchFollowing(newValue);
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },

  methods: {
    async fetchFollowing(userId) {
      try {
        const { data } = await userAPI.getUserFollowing({ userId });
        if (!data.length) {
          Toast.fire({
            icon: "info",
            title: "尚無任何正在跟隨的對象!",
          });
        }
        this.followings = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async addFollowing(id) {
      try {
        const { data } = await userAPI.addFollowing({ id });
        Toast.fire({
          icon: "error",
          title: data.message,
        });
        this.followings = this.followings.map((user) => {
          if (user.followingId !== id) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async deleteFollowing(followingId) {
      try {
        const { data } = await userAPI.deleteFollowing({ followingId });
        Toast.fire({
          icon: "error",
          title: data.message,
        });
        this.followings = this.followings.map((user) => {
          if (user.followingId !== followingId) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.message,
        });
      }
    },
  },
};
</script>

<style scoped>
.user-card {
  padding: 10px 15px;
  /* height: 95px; */
  border-bottom: 1px solid #e6ecf0;
}
.text-content {
  margin-top: 6px;
  max-width: 510px;
  font-size: 15px;
  text-overflow: ellipsis;
}
.btn-follow,
.btn-following {
  right: 15px;
  padding: 5px 15px;
  border-color: var(--orange);
  border-radius: 100px;
  color: var(--orange);
  font-size: 15px;
  font-weight: 700;
}
.btn-following {
  background-color: var(--orange);
  color: white;
}
</style>