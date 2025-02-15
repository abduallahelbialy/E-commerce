<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="text-start fs-3 mb-3">Sign In</div>
        <div class="border-bottom"></div>
        <div class="col-lg-8 col-md-12">
          <div class="d-flex justify-content-center gap-3 align-items-center flex-wrap mt-4">
            <div v-for="item in Input.GoupInput" :key="item.id" class="mb-3 flex-grow-1">
              <label :for="item.for" class="form-label">
                {{ item.title }} <span class="text-danger">*</span>
              </label>
              <input
                v-model="form[item.name]"
                :type="item.type"
                class="form-control bg-light py-3"
                :id="item.for_input"
                :placeholder="item.placeholder"
                :name="item.name"
              />
              <small v-if="errors[item.name]" class="text-danger">{{ errors[item.name] }}</small>
            </div>
          </div>
          <div class="mt-3 mb-3">
            <button class="btn w-100 rounded-2" @click="handleSubmit">Sign In</button>
          </div>
          <div class="d-flex justify-content-between align-items-center mb4">
            <div>
              <nuxt-link to="/ForgotPassword" class="forgot">Forgot Password ?</nuxt-link>
            </div>
            <div>
              <nuxt-link to="/CreateAccount" class="text-black text-decoration-none cre">Don't have an account yet?</nuxt-link>
            </div>
          </div>
          <span class="text-center d-block mt-3">Or</span>
          <div class="d-flex justify-content-between gap-3 mt-3 signOther">
            <div class="box" v-for="item in Input.box" :key="item.id">
              <div class="d-flex gap-2 align-items-center justify-content-center">
                <img :src="item.icon" alt="icon" class="img-fluid" />
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="image-container mt-5">
            <img src="../assets/images/Rectangle 18.png" alt="Rectangle" />
            <div class="overlay">
              <div class="logo-text">vantela</div>
              <div class="center-text">
                Fast shipping <br />
                best for <span class="fw-bold you">you</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import icon_google from "../assets/images/devicon_google.png";
import icon_Face from "../assets/images/logos_facebook.png";
import icon_tel from "../assets/images/ic_baseline-phone.png";
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();

const router = useRouter();


const Input = {
  GoupInput: [
    {
      id: 1,
      title: "Username or Email",
      type: "text",
      placeholder: "Enter your username or email",
      name: "username",
      for: "formGroupExampleInput",
      for_input: "formGroupExampleInput",
    },
    {
      id: 2,
      title: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      for: "formGroupExampleInputTwo",
      for_input: "formGroupExampleInputTwo",
    },
  ],
  box: [
    { id: 1, title: "Sign Up with Google", icon: icon_google },
    { id: 2, title: "Sign Up with Facebook", icon: icon_Face },
    { id: 3, title: "Sign Up with Number", icon: icon_tel },
  ],
};

const form = ref({
  username: "",
  password: "",
});

const errors = ref({});

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!form.value.username) {
    errors.value.username = "Username or Email is required.";
    isValid = false;
  }

  if (!form.value.password) {
    errors.value.password = "Password is required.";
    isValid = false;
  } else if (form.value.password.length < 6) {
    errors.value.password = "Password must be at least 6 characters.";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    if (userStore.loginUser({ email: form.value.username, password: form.value.password })) {
      router.push("/"); 
    } else {
      alert("Invalid email or password!");
    }
  }
};
</script>



<style scoped>
.form-control {
  padding: 13px;
  background-color: #ddd;
}
label {
  color: var(--main-color);
}
.forgot {
  color: var(--main-color);
  text-decoration: none;
}
.box {
  border-radius: 20px;
  background-color: transparent;
  color: var(--main-color);
  border: 1px solid var(--main-color);
  padding: 12px;
  width: 100%;
  cursor: pointer;
  transition: all 3ms;
  
}
.box:hover {
  background-color: var(--secondary-color);
  color: black;
}
.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
   border-radius: 4px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  border-radius: 4px;
  font-weight: bold;
}

.logo-text {
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 24px;
  font-family: "OleoScript", cursive !important;
  color: var(--main-color);
}
.center-text {
 
  font-size: 30px;
}
.you{
    color: var(--secondary-color);
}
@media (max-width: 477px) {
  .signOther {
    flex-direction: column;
  }
  .image-container{
    display: none;
  }
  .cre,.forgot{
    font-size: 14px;
  }
}
@media (max-width: 799px)  {
  .image-container {
    display: none ;
  }
  .box{
    padding: 9px;
  }
}
@media (max-width: 992px)  {
  .image-container {
    display: none ;
  }
   .box{
    padding: 9px;
  }
}


</style>
