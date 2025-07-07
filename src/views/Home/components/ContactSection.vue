<template>
  <section id="contact" class="contact-section bg-gray-100">
    <div class="container mx-auto px-4 py-20">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <!-- 左侧大字标题 -->
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-6xl md:text-8xl font-black text-gray-800 mb-6 tracking-tight">
            CONTACT <span class="text-blue-600">US</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-md">
            Leave your valuable comments by filling out the form or email us directly.
          </p>
          <div class="mt-10">
            <div class="flex items-center gap-4 mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-lg font-medium"><a href="mailto:info@eride.africa">info@eride.africa</a></span>
            </div>
          </div>
        </div>

        <!-- 右侧硬朗风格表单 -->
        <div class="md:w-1/2 bg-white p-8 shadow-xl border-t-4 border-blue-600">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
              <input v-model="form.name" type="text" id="name"
                class="mt-1 block w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                :class="{ 'border-red-500': errors.name }" />
              <span v-if="errors.name" class="text-red-500 text-sm font-medium">{{ errors.name }}</span>
            </div>

            <div>
              <label for="email" class="block text-sm font-bold text-gray-700 uppercase tracking-wider">Email</label>
              <input v-model="form.email" type="email" id="email"
                class="mt-1 block w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                :class="{ 'border-red-500': errors.email }" />
              <span v-if="errors.email" class="text-red-500 text-sm font-medium">{{ errors.email }}</span>
            </div>

            <div>
              <label for="subject"
                class="block text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
              <select v-model="form.subject" id="subject"
                class="mt-1 block w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 focus:border-blue-600 focus:ring-2 focus:ring-blue-200">
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label for="message"
                class="block text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
              <textarea v-model="form.message" id="message" rows="4"
                class="mt-1 block w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                :class="{ 'border-red-500': errors.message }"></textarea>
              <span v-if="errors.message" class="text-red-500 text-sm font-medium">{{ errors.message }}</span>
            </div>

            <div>
              <button type="submit"
                class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider transition-colors duration-200">
                <span v-if="!isSubmitting">SEND MESSAGE</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  SENDING...
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = ref({});
const isSubmitting = ref(false);
const isSuccess = ref(false);

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required';
    isValid = false;
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Invalid email format';
    isValid = false;
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  emailjs.send("service_61u6ji9", "template_09lc3id", form.value, 'XeFtZZYNKO86l61Mk')
    .then(() => {
      isSuccess.value = true;
      form.value = { name: '', email: '', message: '' };
    })
    .catch(error => {
      console.error('send fail:', error);
      alert('send fail, please try again');
    })
    .finally(() => {
      isSubmitting.value = false;
    });
};
</script>

<style scoped>
.contact-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* 硬朗的边框动画效果 */
input,
select,
textarea {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button {
  letter-spacing: 1px;
}
</style>