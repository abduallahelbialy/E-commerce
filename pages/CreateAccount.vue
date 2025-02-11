<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="text-start fs-3 mb-3">Sign up</div>
        <div class="border-bottom"></div>
        <div class="col-lg-8 col-md-12">
         
          <div
            class="d-flex justify-content-center gap-3 align-items-center flex-wrap mt-4 mb-3"
            v-for="(group, index) in inputGroups"
            :key="index"
          >
            <div
              class="mb-3 flex-grow-1"
              v-for="input in group"
              :key="input.id"
            >
              <label :for="input.for" class="form-label">
                {{ input.title }} <span class="text-danger">*</span>
              </label>
              <input
                :type="input.type"
                class="form-control bg-light py-3"
                :id="input.for"
                :placeholder="input.placeholder"
                v-model="form[input.name]"
                @input="validateField(input.name)"
              />
              <!-- show error message-->
              <div v-if="errors[input.name]" class="text-danger mt-2">
                {{ errors[input.name] }}
              </div>
            </div>
          </div>

          <div class="border-bottom"></div>

          <div
            class="d-flex justify-content-center gap-3 align-items-center flex-wrap mt-4 mb-3"
          >
            <div class="mb-3 flex-grow-1">
              <label for="formGroupExampleInputAddress" class="form-label">
                Address <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control bg-light py-3"
                id="formGroupExampleInputAddress"
                placeholder="Enter Your Address"
                v-model="form.address"
                @input="validateField('address')"
              />
              <div v-if="errors.address" class="text-danger mt-2">
                {{ errors.address }}
              </div>
            </div>
          </div>

          <div
            class="d-flex justify-content-center gap-3 align-items-center flex-wrap mt-4 mb-3"
          >
            <div class="mb-3 flex-grow-1">
              <label for="formGroupExampleInputnumber" class="form-label">
                RT/RW <span class="text-danger">*</span>
              </label>
              <input
                type="number"
                class="form-control bg-light py-3"
                id="formGroupExampleInputnumber"
                placeholder="Enter Your number"
                v-model="form.rtRw"
                @input="validateField('rtRw')"
              />
              <div v-if="errors.rtRw" class="text-danger mt-2">
                {{ errors.rtRw }}
              </div>
            </div>
            <div class="mb-3 flex-grow-1">
              <label class="form-label">
                Kelurahan <span class="text-danger">*</span>
              </label>
              <select
                class="form-control bg-light py-3"
                aria-label="Default select example"
                v-model="form.kelurahan"
                @change="validateField('kelurahan')"
              >
                <option value="" disabled>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div v-if="errors.kelurahan" class="text-danger mt-2">
                {{ errors.kelurahan }}
              </div>
            </div>
          </div>

          <div
            class="d-flex justify-content-center gap-3 align-items-center flex-wrap mt-4 mb-3"
          >
            <div class="mb-3 flex-grow-1">
              <label for="formGroupExampleInputnumber" class="form-label">
                City <span class="text-danger">*</span>
              </label>
              <select
                class="form-control bg-light py-3"
                aria-label="Default select example"
                v-model="form.city"
                @change="validateField('city')"
              >
                <option value="" disabled>Open this select City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div v-if="errors.city" class="text-danger mt-2">
                {{ errors.city }}
              </div>
            </div>
            <div class="mb-3 flex-grow-1">
              <label for="formGroupExampleInputnumber" class="form-label">
                Kecamatan <span class="text-danger">*</span>
              </label>
              <select
                class="form-control bg-light py-3"
                aria-label="Default select example"
                v-model="form.kecamatan"
                @change="validateField('kecamatan')"
              >
                <option value="" disabled>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div v-if="errors.kecamatan" class="text-danger mt-2">
                {{ errors.kecamatan }}
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center gap-2 align-items-center">
            <input type="checkbox" v-model="form.agreeTerms" />
            <span
              >By pressing the Register button means that you have agreed to
              the terms and conditions of the application</span
            >
          </div>
          <div class="mt-3 mb-3">
            <button class="btn w-100 rounded-2 py-3" @click="handleSubmit">
              Sign In
            </button>
          </div>

          <span class="text-center d-block mt-3">Or</span>
          <div class="d-flex justify-content-between gap-3 mt-3 signOther">
            <div class="box" v-for="item in Input.box" :key="item.id">
              <div
                class="d-flex gap-2 align-items-center justify-content-center"
              >
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
import { onMounted } from "vue";
import { useNuxtApp } from "#app";
import { useUserStore } from "../stores/userStore";
const userStore = useUserStore();


const { $flatpickr } = useNuxtApp();

onMounted(() => {
  $flatpickr("#formGroupExampleInputthree", {
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y",
    allowInput: true,
  });
});

const router = useRouter();

const Input = {
  box: [
    { id: 1, title: "Sign Up with Google", icon: icon_google },
    { id: 2, title: "Sign Up with Facebook", icon: icon_Face },
    { id: 3, title: "Sign Up with Number", icon: icon_tel },
  ],
};

const inputGroups = [
  [
    {
      id: 1,
      title: "Full name",
      type: "text",
      placeholder: "Enter Full name",
      name: "fullName",
      for: "formGroupExampleInput",
    },
    {
      id: 2,
      title: "Username",
      type: "text",
      placeholder: "Enter your Username",
      name: "username",
      for: "formGroupExampleInputTwo",
    },
  ],
  [
    {
      id: 3,
      title: "Date of birth",
      type: "date",
      placeholder: "Enter your Date of birth",
      name: "dateOfBirth",
      for: "formGroupExampleInputthree",
    },
    {
      id: 4,
      title: "Email",
      type: "email",
      placeholder: "Enter your Email",
      name: "email",
      for: "formGroupExampleInputfour",
    },
  ],
  [
    {
      id: 5,
      title: "Password",
      type: "password",
      placeholder: "Enter your Password",
      name: "password",
      for: "formGroupExampleInputPassword",
    },
    {
      id: 6,
      title: "Confirm Password",
      type: "password",
      placeholder: "Confirm your Password",
      name: "confirmPassword",
      for: "formGroupExampleInputConfirm",
    },
  ],
];

const form = ref({
  fullName: "",
  username: "",
  dateOfBirth: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  rtRw: "",
  kelurahan: "",
  city: "",
  kecamatan: "",
  agreeTerms: false,
});

const errors = ref({});

const validateField = (fieldName) => {
  const value = form.value[fieldName];

  if (!value) {
    errors.value[fieldName] = `${fieldName} is required.`;
  } else {
    errors.value[fieldName] = "";
  }

  // math paswords
  if (fieldName === "confirmPassword") {
    if (value !== form.value.password) {
      errors.value.confirmPassword = "Passwords do not match.";
    } else {
      errors.value.confirmPassword = "";
    }
  }
};

const validateForm = () => {
  let isValid = true;

  // vaild all the required fields
  Object.keys(form.value).forEach((field) => {
    validateField(field);
    if (errors.value[field]) {
      isValid = false;
    }
  });

  // match password field
  if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = "Passwords do not match.";
    isValid = false;
  }

  // vaild all the required fields
  if (!form.value.agreeTerms) {
    errors.value.agreeTerms = "You must agree to the terms and conditions.";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    userStore.registerUser(form.value);
    router.push("/SignIn"); // توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل
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
.you {
  color: var(--secondary-color);
}
@media (max-width: 477px) {
  .signOther {
    flex-direction: column;
  }
  .image-container {
    display: none;
  }
}
@media (max-width: 799px) {
  .image-container {
    display: none;
  }
  .box {
    padding: 9px;
  }
}
@media (max-width: 992px) {
  .image-container {
    display: none;
  }
  .box {
    padding: 9px;
  }
}
</style>
