<template>
  <section id="location" class="location-section">
    <div class="container">
      <div class="location-container">
        <div class="location-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="title text-primary text-7xl font-bold">Our Locations and Contacts</h2>
        </div>
        <div class="flex flex-col md:flex-row gap-12 items-center">

          <a href="https://www.google.com/maps/d/u/0/edit?mid=1XMACBHUJ-ILJqxo2TDG7q5rZPAtuVCQ&usp=sharing"
            target="_blank" class="map-outer wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <img src="@/assets/img/map.jpeg" alt="Our Locations" class="map-placeholder" />
            <div class="map-overlay">
              <span class="text-white text-2xl font-normal mr-4">View on Google Maps</span>
              <!-- <img src="@/assets/img/new-window.svg" loading="lazy" alt="" class="new-window-icon" /> -->
            </div>
          </a>
          <div class="md:w-1/2 bg-white p-8 shadow-xl border-t-4 border-gray-600">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-bold text-gray-700 uppercase tracking-wider">Full
                  Name</label>
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
                  class="w-full px-6 py-3 bg-gray-400 hover:bg-gray-800 text-white font-bold uppercase tracking-wider transition-colors duration-200">
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
    </div>
  </section>
</template>

<script setup>
// 组件逻辑
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


<style scoped lang="scss">
.location-section {
  background-color: #ffffff;
  padding: 100px 0;
}

.location-container {
  width: 100%;
  margin: 0 auto;
}

.location-heading {
  text-align: center;
  margin-bottom: 60px;
}

.map-outer {
  position: relative;
  display: block;
  width: 40%;
  border: 2px solid #000000;
  border-radius: 15px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    .map-overlay {
      opacity: 1;
    }
  }
}

.map-placeholder {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.new-window-icon {
  width: 30px;
  height: auto;
}

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