<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-start mb-3">
          <div class="d-flex gap-2 align-items-center">
            <nuxt-link to="/" class="text-decoration-none text-black"
              >Payment Method</nuxt-link
            >
            <i class="pi pi-angle-right start"></i>
            <span class="details fw-semibold text-black-50"
              >Payment Verification</span
            >
          </div>
        </div>
        <div class="border mt-3 mb-4"></div>

        <div class="col-xl-8 col-lg-12">
          <form @submit.prevent="validateForm">
            <div class="mb-3 flex-grow-1">
              <label class="form-label main fw-semibold">
                Shipping Address <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control bg-light py-3"
                v-model="form.address"
                placeholder="Jl. Bojong timur no 65, Bumi datar, kapuas"
              />
              <small v-if="errors.address" class="text-danger">{{
                errors.address
              }}</small>
            </div>

            <div
              class="d-flex justify-content-center gap-3 align-items-center flex-wrap mt-4 mb-3"
            >
              <div
                class="mb-3 flex-grow-1"
                v-for="(field, index) in dropdownFields"
                :key="index"
              >
                <label class="form-label main fw-semibold">
                  {{ field.label }} <span class="text-danger">*</span>
                </label>
                <select
                  class="form-control bg-light py-3"
                  v-model="form[field.model]"
                >
                  <option value="" disabled>{{ field.placeholder }}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <small v-if="errors[field.model]" class="text-danger">{{
                  errors[field.model]
                }}</small>
              </div>
            </div>

            <div class="border mb-4"></div>

            <div class="mb-3 flex-grow-1">
              <label class="form-label main fw-semibold">
                Card number <span class="text-danger">*</span>
                <img src="../assets/images/Frame 125.png" alt="" />
              </label>
              <input
                type="tel"
                class="form-control bg-light py-3"
                v-model="form.cardNumber"
                placeholder="***** **** **** **** *******"
              />
              <small v-if="errors.cardNumber" class="text-danger">{{
                errors.cardNumber
              }}</small>
            </div>

            <div
              class="d-flex justify-content-center gap-3 align-items-center flex-wrap mt-4 mb-3"
            >
              <div
                class="mb-3 flex-grow-1"
                v-for="(input, index) in inputFields"
                :key="index"
              >
                <label class="form-label main fw-semibold">
                  {{ input.label }} <span class="text-danger">*</span>
                </label>
                <input
                  :type="input.type"
                  class="form-control bg-light py-3"
                  v-model="form[input.model]"
                  :placeholder="input.placeholder"
                />
                <small v-if="errors[input.model]" class="text-danger">{{
                  errors[input.model]
                }}</small>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-xl-4 col-lg-12 mt-4">
          <div class="Order border rounded-2 py-3 px-3">
            <h2 class="text-start">Order Summary</h2>
            <span class="main">Shipping</span>
            <div class="box d-flex align-items-center mb-3">
              <input type="text" placeholder="Express Delivery - Rp. 53.000" />
            </div>
            <div class="border-bottom mb-2"></div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main"> Total Items</span>
              <span class="main"
                >Rp {{ orderSummary.subtotal.toFixed(2) }}</span
              >
            </div>
            <div class="border-bottom mb-2"></div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main">Subtotal</span>
              <span class="main"
                >Rp {{ orderSummary.subtotal.toFixed(2) }}</span
              >
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main">Promo</span>
              <span class="main"
                >- Rp {{ orderSummary.discount.toFixed(2) }}</span
              >
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="main">Total :</span>
              <span class="main">Rp {{ orderSummary.total.toFixed(2) }}</span>
            </div>
            <div
              class="d-flex justify-content-center align-items-center mb-2 mt-2"
            >
              <button class="btn w-100 rounded-2" @click="handleBuyNow">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useOrderStore } from "@/stores/orderStore"; //
import Swal from "sweetalert2"; //  SweetAlert

export default {
  setup() {
    const orderStore = useOrderStore();

    const orderSummary = orderStore.orderSummary;

    return {
      orderSummary,
    };
  },
  data() {
    return {
      form: {
        address: "",
        city: "",
        state: "",
        postalCode: "",
        cardNumber: "",
        cvc: "",
        expirationDate: "",
      },
      errors: {},
      dropdownFields: [
        { label: "City", model: "city", placeholder: "Open this select City" },
        {
          label: "State / Province",
          model: "state",
          placeholder: "Open this select menu",
        },
        {
          label: "Postal Code",
          model: "postalCode",
          placeholder: "Open this select City",
        },
      ],
      inputFields: [
        { label: "CVC", model: "cvc", type: "number", placeholder: "CVC" },
        {
          label: "Expiration Date",
          model: "expirationDate",
          type: "number",
          placeholder: "M/YY",
        },
      ],
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.form.address)
        this.errors.address = "Shipping address is required";
      if (!this.form.city) this.errors.city = "City is required";
      if (!this.form.state) this.errors.state = "State is required";
      if (!this.form.postalCode)
        this.errors.postalCode = "Postal Code is required";
      if (!this.form.cardNumber)
        this.errors.cardNumber = "Card number is required";
      if (!this.form.cvc) this.errors.cvc = "CVC is required";
      if (!this.form.expirationDate)
        this.errors.expirationDate = "Expiration Date is required";

      if (Object.keys(this.errors).length === 0) {
        Swal.fire({
          icon: "success",
          title: "Verified successfully!",
          text: "Form verified successfully.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: "Please check the required fields.",
        });
      }
    },
    handleBuyNow() {
      this.validateForm();
    },
  },
};
</script>

<style scoped>
.main {
  color: var(--main-color);
}
.Order h2 {
  font-size: 16px;
}
.box {
  position: relative;
  width: 380px;
  height: 50px;
  background: #f2f2f2;
  border-radius: 4px;
  margin: auto;
  padding: 0 15px;
}

.box input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  padding-right: 30px;
}
.box button {
  background-color: var(--main-color);
}

[dir="rtl"].box button {
  position: absolute;
  right: 15px;
  color: var(--main-color);
  cursor: pointer;
}
[dir="ltr"].box button {
  position: absolute;
  right: 15px;
  color: var(--main-color);
  cursor: pointer;
}
.textt {
  font-size: 20px;
}
@media (max-width: 477px) {
  .box {
    width: 305px;
  }
  .textt {
    font-size: 15px;
  }
  .discount-badge {
    font-size: 14px;
    width: 80px;
  }
}
</style>
