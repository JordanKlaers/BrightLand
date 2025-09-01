<script setup>
import { ref, onMounted } from 'vue' //Teleport
// import axios from 'axios'
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'

const showModal = ref(false)

const form = ref(null)
onMounted(() => {
  if (form.value) {
    form.value.reset()
  }
  form.value.addEventListener('submit', (e) => {
    e.preventDefault();
    // const formData = new FormData(form.value)
    // const data = Object.fromEntries(formData.entries())
    showModal.value = true
    form.value.reset()
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.post('https://formsubmit.co/ajax/your@email.com', data)
    //   .then(response => {
    //     showModal.value = true
    //     form.value.reset()
    //   })
    //   .catch(error => console.log(error));
  })
})
// action="https://formsubmit.co/1c0c2092d26fa9c094cba9e5a95d1038" method="POST"
</script>

<template>
  <Header />
  <div class="container-quote">
    <Teleport to="body">
      <div v-if="showModal" class="modal-backdrop" @click="showModal = false">
        <div class="modal-content submit-modal">
          <h2>Thank you for your submission!</h2>
          <p>We will get back to you as soon as possible.</p>
          <button class="button-close" @click="showModal = false">Close</button>
        </div>
      </div>
    </Teleport>
    <h1>Get a Free Quote</h1>
    <p>
      At brightland, we specialize in providing top-notch Christmas light installation services. Our team is dedicated
      to making your holiday season brighter and more festive with our professional lighting solutions. Whether you want
      a simple design or an elaborate display, we can create a custom quote tailored to your needs.
    </p>
    <p>
      Interested in wedding lighting? Drop us a note awe'd love to help make your special day shine.
    </p>
    <form ref="form" class="contact">
      <h2>Contact Details</h2>
      <input type="hidden" name="_subject" value="New submission!" />
      <input type="text" name="_honey" style="display:none" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" id="firstName" name="firstName" required aria-label="first name" placeholder="First Name">
      <input type="text" id="lastName" name="lastName" aria-label="last name" placeholder="Last Name">
      <input type="text" id="companyName" name="companyName" aria-label="company name" placeholder="Company Name">
      <input type="email" id="email" name="email" required aria-label="email" placeholder="Email address">
      <input type="text" id="phone" name="phone" aria-label="phone number" placeholder="Phone Number">
      <h2>Address</h2>
      <input type="text" id="street" name="street" aria-label="street" placeholder="Street">
      <input type="text" id="addressAdditional" name="addressAdditional"
        aria-label="Apartment Number, suite, Floor (if applicable)"
        placeholder="Apt. Number, Suite, Floor (if applicable)">
      <input type="text" id="city" name="city" aria-label="city" placeholder="City">
      <input type="text" id="state" name="state" aria-label="state" placeholder="State">
      <input type="text" id="zip" name="zip" aria-label="zip code" placeholder="Zip Code">
      <h2>Service Request Details</h2>
      <p>Is this for a residential, commercial, or something else?</p>
      <label for="serviceType" id="seriveTypeResidential">
        <input type="checkbox" name="serviceType" value="residential">
        Residential
      </label>
      <label for="commercial" id="seriveTypeCommercial">
        <input type="checkbox" name="serviceType" value="commercial">
        Commercial
      </label>
      <label for="other" id="seriveTypeOther">
        <input type="checkbox" name="other" value="other">
        Other (i.e. wedding)
      </label>
      <p>What type of service are you looking for? (optional)</p>
      <div id="servicesContainer">
        <label for="roofliens" id="rooflines">
          <input type="checkbox" name="roofliens" value="rooflines">
          Rooflines
        </label>
        <label for="trees" id="trees">
          <input type="checkbox" name="trees" value="trees">
          Trees
        </label>
        <label for="yard" id="yard">
          <input type="checkbox" name="yard" value="yard">
          Yard
        </label>
        <label for="wreaths" id="wreaths">
          <input type="checkbox" name="wreaths" value="wreaths">
          Wreaths & Garland
        </label>
        <label for="otherService" id="otherService">
          <input type="checkbox" name="otherService" value="other">
          Other
        </label>
      </div>
      <textarea type="textfield" id="additionalDetail" name="additionalDetail"
        placeholder="Please add any additional details, requests or vision." />
      <p>By providing your email, you conscent to receiving marketing emails and promotions. You can unsubscribe at
        any
        time.</p>
      <button type="submit">Submit</button>
    </form>
  </div>
  <Footer />
</template>

<style></style>
