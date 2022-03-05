<template>
  <div class="auth">
    <div class="container">
      <div class="auth__logo">
        <img src="@/assets/sibdev-logo.svg" alt="logo" />
      </div>

      <div class="auth__enter">Вход</div>
      <form @submit.prevent="onSumbit" class="auth__form">
        <div class="auth__form-item">
          <label for="login">Логин</label>
          <input v-model="login" type="text" id="login" />
        </div>
        <div class="auth__form-item password">
          <label for="password">Пароль</label>
          <input
            v-model="password"
            ref="password"
            type="password"
            id="password"
          />
          <div v-if="!hide" ref="eye" @click="hidePassword" class="eye">
            <img src="@/assets/eye.svg" />
          </div>
          <div v-if="hide" ref="eyeOff" @click="hidePassword" class="eye-off">
            <img src="@/assets/eye-off.svg" />
          </div>
        </div>

        <button type="submit">Войти</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      hide: true,
    };
  },
  methods: {
    hidePassword() {
      if (this.$refs.password.getAttribute("type") == "password") {
        this.$refs.password.removeAttribute("type");
        this.$refs.password.setAttribute("type", "text");
        this.hide = false;
      } else {
        this.$refs.password.removeAttribute("type");
        this.$refs.password.setAttribute("type", "password");
        this.hide = true;
      }
    },
    onSumbit() {
      // this.$store
      //   .dispatch("AuthModule/onLogin", {
      //     login: this.login,
      //     password: this.password,
      //   })
      // .then(() => {
      this.$router.push({ name: "home" });
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  background: #ffffff;
  border: 1px solid rgba(39, 39, 39, 0.1);
  border-radius: 10px;
  width: 510px;
  height: 520px;
  margin: auto;
  text-align: center;
  margin-top: 20vh;

  .auth__logo {
    margin: 40px 0;
  }
  .auth__enter {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 20px;
  }
  .auth__form {
    .password {
      position: relative;
      .eye,
      .eye-off {
        position: absolute;
        right: 100px;
        top: 29px;
      }
    }

    label {
      display: block;
      font-size: 16px;
      line-height: 22px;
      color: rgba(23, 23, 25, 0.3);
    }
    input {
      width: 334px;
      height: 38px;
      font-size: 20px;
      line-height: 24px;
    }

    &-item {
      margin-bottom: 20px;
    }
    button {
      background: #1391e5;
      border: none;
      width: 176px;
      height: 52px;
      border-radius: 5px;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
      margin-top: 20px;
      cursor: pointer;
      &:active {
        opacity: 80%;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .auth {
    .container {
      width: 304px;
      input {
        width: 284px;
      }
      .auth__form {
        .password {
          .eye,
          .eye-off {
            position: absolute;
            right: 20px;
          }
        }
      }
    }
  }
}
</style>