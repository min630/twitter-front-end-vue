<template>
  <div class="admin-login">
    <div class="logo">
      <img src="../assets/Logo.png" alt="" />
    </div>
    <div class="title">後台登入</div>
    <form class="d-flex flex-column align-items-center">
      <div class="form-floating">
        <input
          type="text"
          id="account"
          class="form-control form-input"
          :class="{ 'form-input-warn': callAlert === 0 || callAlert === 1 }"
          required
          v-model="account"
        />
        <label for="account">帳號</label>
        <div class="alert-text" v-if="callAlert === 0 || callAlert === 1">{{alertMessage}}</div>

      </div>
      <div class="form-floating">
        <input
          type="password"
          id="password"
          class="form-control form-input"
          :class="{ 'form-input-warn': callAlert === 2 }"
          required
          v-model="password"
        />
        <label for="password">密碼</label>
        <div class="alert-text" v-if="callAlert === 2">{{alertMessage}}</div>
      </div>
      <button
        type="submit"
        class="btn btn-login"
        @click.stop.prevent="adminSignIn(account, password)"
        :disabled="isProcessing"
      >
        登入
      </button>
    </form>
    <div class="front-link text-blue"><router-link to="/login" class="fw-bold">前台登入</router-link></div>

    <!-- alert -->
    <div class="alert-setting">
      <svg xmlns="http://www.w3.org/2000/svg" >
        <symbol
          id="exclamation-triangle-fill"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </symbol>
      </svg>
      <div
        class="
          alert alert-danger
          d-flex
          align-items-center
          fixed-top
          alert-dismissible
          fade
        "
        :class="{ show: callAlert >= 0 }"
        role="alert"
      >
        <svg
          class="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Danger:"
        >
          <use xlink:href="#exclamation-triangle-fill" />
        </svg>
        <div class="alert-text">{{alertMessage}}</div>
        <!-- <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo img {
  width: 50px;
  height: 50px;
  margin-top: 65px;
  margin-left: calc(50% - 25px);
}
.title {
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 23px;
  text-align: center;
  font-weight: 700;
}
.form-floating {
  margin-top: 30px;
}
.form-input {
  width: 540px;
  height: 52px;
  margin-bottom: 0;
  background-color: #f5f8fa;
  border: none;
  border-bottom: 2px solid #657786;
  border-radius: 4px;
}
.form-floating > label {
  padding-top: 10px;
  padding-left: 10px;
  font-size: 18px;
  color: #657786;
  font-weight: 500;
}
.btn-login {
  width: 540px;
  height: 50px;
  margin-top: 40px;
  border-radius: 50px;
  background: var(--orange);
  color: white;
  font-size: 18px;
  font-weight: 700;
}
.front-link {
  margin-top: 20px;
  margin-left: calc(50% + 270px - 64px);
}
.alert-text {
  color: #fc5a5a;
}
.form-input-warn {
  border-bottom: 2px solid #fc5a5a;
}
</style>

<script>
import authorizationAPI from "../apis/authorization"

const messages = ["請輸入您的帳號和密碼！", "帳號不存在！", "密碼輸入錯誤！"]

export default {
  name: 'adminLogin',
  data() {
    return {
      account: "",
      password: "",
      callAlert: -1,
      alertMessage: "",
      isProcessing: false
    };
  },
  methods: {
    async adminSignIn(account, password) {
      try {
        if(!account || !password) {
          this.callAlert = 0;
          this.alertMessage = messages[0]
          setTimeout(() => {
            this.callAlert = -1;
          }, 2000);
          return
        }
        this.isProcessing = true
        const { data } = await authorizationAPI.adminLogin({
          account: this.account,
          password: this.password,
        })

        if (data.status !== 'success') {
          throw new Error()
        }
        this.isProcessing = false
        localStorage.setItem("token", data.data.token);
        //this.$store.commit('setCurrentUser', data.user)
        this.$router.push("/admin/tweets");

      } catch (error) {
        console.log(error.response)
        const errorMessage = error.response.data.message
        if (errorMessage === "帳號不存在") {
          this.loginAlert(1)
        } else if (errorMessage === "密碼錯誤") {
          this.loginAlert(2)
        }
        this.isProcessing = false
      }      
    },
    loginAlert(num) {
      this.callAlert = num;
      this.alertMessage = messages[num]
      setTimeout(() => {
        this.callAlert = -1;
      }, 2000);
      return;
    }
  },
  
};
</script>
