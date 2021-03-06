<template>
  <div class="row flex-nowrap">
    <div class="menu col-3 vh-100">
      <Menu />
    </div>
    <!-- User-profile -->
    <div class="user-profile col me-3" id="user-profile">
      <div class="page-title position-relative">
        <img
          src="../assets/arrow.png"
          alt=""
          class="back-arrow position-absolute"
          @click="$router.back()"
        />
        <div class="title-item main-text">{{ user.name }}</div>
        <div class="title-item sub-text">{{ user.tweetCount }}推文</div>
      </div>
      <div class="profile-wrap position-relative">
        <div class="profile-cover">
          <img :src="user.cover | emptyImage" class="w-100" alt="" />
        </div>
        <img
          :src="user.avatar | emptyImage"
          class="profile-avatar rounded-circle position-absolute"
          alt=""
        />
        <!-- currentUser btn-edit-->
        <div
          class="btn-area d-flex justify-content-end"
          v-if="user.id === currentUser.id"
        >
          <button
            type="button"
            class="btn btn-edit"
            data-bs-toggle="modal"
            data-bs-target="#profileEditModal"
          >
            編輯個人資料
          </button>
        </div>
        <!-- 其他user btn-follow-->
        <div class="btn-area d-flex justify-content-end" v-else>
          <button class="btn-message">
            <img src="../assets/btn_messege.png" alt="" width="35px" />
          </button>
          <button class="btn-notify" v-if="isNotified">
            <img
              src="../assets/btn_notified.png"
              alt=""
              width="35px"
              @click.stop.prevent="deleteNotify"
            />
          </button>
          <button class="btn-notify" v-else @click.stop.prevent="addNotify">
            <img src="../assets/btn_noti.png" alt="" width="35px" />
          </button>

          <button
            type="button"
            class="btn btn-follow ms-2"
            v-if="!user.isFollowed"
            @click.stop.prevent="addFollow(user.id)"
          >
            跟隨
          </button>
          <button
            type="button"
            class="btn btn-following ms-2"
            v-else
            @click.stop.prevent="deleteFollow(user.id)"
          >
            正在跟隨
          </button>
        </div>
        <!-- button end -->
        <div class="profile-data">
          <div class="name main-text">{{ user.name }}</div>
          <div class="account sub-text">@{{ user.account }}</div>
          <div class="description my-2">
            {{ user.introduction }}
          </div>
          <div class="followship">
            <span class="following fw-bold">
              <router-link :to="`/user-profile/${user.id}/followings`">
                {{ user.followingCount }}個<span class="sub-text"
                  >正在跟隨</span
                ></router-link
              >
            </span>
            <span class="follower ms-4 fw-bold">
              <router-link :to="`/user-profile/${user.id}/followers`">
                {{ user.followerCount }}位<span class="sub-text">跟隨者</span>
              </router-link>
            </span>
          </div>
        </div>
      </div>
      <ProfileEditModal
        :current-user="user"
        @after-profile-submit="afterProfileSubmit"
      />

      <NavTabs :user-id="user.id" />
      <!-- router-view -->
      <router-view
        :user-id="user.id"
        :user-name="user.name"
        :user-account="user.account"
        :user-avatar="user.avatar"
      ></router-view>
    </div>
    <!-- Popular User -->
    <div class="col-3 popular-user mh-100">
      <PopularUser />
    </div>
  </div>
</template>

<script>
import ProfileEditModal from "../components/ProfileEditModal.vue";
import NavTabs from "../components/NavTabs.vue";
import Menu from "../components/Menu.vue";
import PopularUser from "../components/PopularUser.vue";
import userAPI from "../apis/user";
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";

export default {
  components: {
    ProfileEditModal,
    NavTabs,
    Menu,
    PopularUser,
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      currentUser: {},
      user: {
        id: 0,
        account: "",
        name: "",
        email: "",
        introduction: "",
        avatar: "",
        cover: "",
        role: "",
        tweetCount: 0,
        followingCount: 0,
        followerCount: 0,
        likeCount: 0,
        isFollowed: false,
      },
      isNotified: false, //這個沒有設定，重新整理就會還原
    };
  },

  created() {
    const { userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchCurrentUser();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getUser({ userId });
        const {
          id,
          account,
          name,
          email,
          introduction,
          avatar,
          cover,
          role,
          tweetCount,
          followingCount,
          followerCount,
          likeCount,
          isFollowed,
        } = data;
        this.user = {
          ...this.user,
          id,
          account,
          name,
          email,
          introduction,
          avatar,
          cover,
          role,
          tweetCount,
          followingCount,
          followerCount,
          likeCount,
          isFollowed,
        };
        this.fetchCurrentUser();
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async fetchCurrentUser() {
      try {
        const { data } = await userAPI.getCurrentUser();
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.currentUser = data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.message,
        });
      }
    },
    async addFollow(id) {
      try {
        const { data } = await userAPI.addFollow({ id });
        console.log(data.message);
        this.user.isFollowed = true;
        this.user.followerCount += 1;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async deleteFollow(followingId) {
      try {
        const { data } = await userAPI.deleteFollow({ followingId });
        console.log(data.message);
        this.user.isFollowed = false;
        this.user.followerCount -= 1;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.message,
        });
      }
    },
    addNotify() {
      this.isNotified = true;
    },
    deleteNotify() {
      this.isNotified = false;
    },
    afterProfileSubmit(data) {
      this.user = {
        ...this.user,
        name: data.name,
        introduction: data.introduction,
        avatar: data.avatar,
        cover: data.cover,
      };
    },
  },

  beforeRouteUpdate(to, from, next) {
    const { userId } = to.params;
    this.fetchUser(userId);
    next();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.user-profile {
  max-width: 600px;
  border-left: 1px solid var(--border-line-color);
  border-right: 1px solid var(--border-line-color);
}
.page-title {
  padding: 5px 0 5px 26px;
  border-bottom: 1px solid var(--border-line-color);
}

.title-item {
  margin-left: 64px;
}
.profile-data {
  /* margin-top: 60px; */
  padding: 10px 15px;
  font-size: 14px;
}

.profile-cover img {
  height: 200px;
}
.profile-avatar {
  width: 140px;
  height: 140px;
  top: 124px;
  left: 14px;
  border: 4px solid white;
}
.btn-edit {
  width: 120px;
  height: 35px;
  top: 210px;
  right: 15px;
  border: 1px solid var(--orange);
  border-radius: 100px;
  font-size: 15px;
  font-weight: 700;
  color: var(--orange);
}
.btn-edit:hover,
.btn-edit:active {
  background-color: var(--orange);
  color: white;
}
.account,
.following,
.follower {
  font-weight: 500;
}
.btn-area {
  padding: 10px 15px;
}
.btn-follow,
.btn-following {
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
.followship a:hover {
  color: var(--orange);
}
</style>
