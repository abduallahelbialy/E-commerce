<template>
  <section class="padding-section">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-md-12">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label class="form-label"
                >Full name <span class="text-danger">*</span></label
              >
              <input
                type="text"
                v-model="form.name"
                class="form-control bg-light py-3"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label"
                >Email <span class="text-danger">*</span></label
              >
              <input
                type="email"
                v-model="form.email"
                class="form-control bg-light py-3"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Message</label>
              <textarea
                v-model="form.message"
                class="form-control bg-light"
                rows="5"
                required
              ></textarea>
            </div>
            <div class="mt-2 mb-3 d-flex align-items-center">
              <span class="security-code">{{ generatedSecurityCode }}</span>
              <button
                type="button"
                class="btn btn-sm btn-secondary ms-2"
                @click="generateSecurityCode"
              >
                Refresh Code
              </button>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Security Code <span class="text-danger">*</span></label
              >
              <input
                type="text"
                v-model="form.securityCode"
                class="form-control bg-light py-3 w-25 code"
                required
              />
              <small class="text-muted">Enter the code shown below:</small>
            </div>

            <button type="submit" class="btn btn-primary">Send</button>

            <p v-if="statusMessage" :class="statusClass">{{ statusMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useEmail } from "~/composables/useEmail";

const { sendEmail } = useEmail();

interface FormData {
  name: string;
  email: string;
  message: string;
  securityCode: string;
}

const form = ref<FormData>({
  name: "",
  email: "",
  message: "",
  securityCode: "",
});

const generatedSecurityCode = ref<string>("");
const statusMessage = ref<string | null>(null);
const statusClass = ref<string | null>(null);

const generateSecurityCode = () => {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  generatedSecurityCode.value = code;
};

const handleSubmit = async (event: Event) => {
  if (form.value.securityCode !== generatedSecurityCode.value) {
    statusMessage.value = "Invalid security code. Please try again.";
    statusClass.value = "text-danger";
    generateSecurityCode(); // Regenerate the security code
    return;
  }

  const result = await sendEmail(event);

  statusMessage.value = result.message;
  statusClass.value = result.success ? "text-success" : "text-danger";

  if (result.success) {
    form.value = { name: "", email: "", message: "", securityCode: "" };
    generateSecurityCode(); // Regenerate the security code after successful submission
  }
};

onMounted(() => {
  generateSecurityCode(); // Generate the security code when the component is mounted
});
</script>

<style scoped>
textarea {
  resize: none;
}

.security-code {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--main-color);
}
@media (max-width: 477px) {
  .code {
    width: 50% !important;
  }
}
</style>
