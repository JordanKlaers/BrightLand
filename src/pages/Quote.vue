<script setup>
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import companyIcon from '@/assets/images/company-icon.jpg'
</script>

<template>
  <Header />
  <div class="container-quote">
    <h1>Get a Free Quote</h1>
    <p>
      At brightland, we specialize in providing top-notch Christmas light installation services. Our team is dedicated
      to making your holiday season brighter and more festive with our professional lighting solutions. Whether you want
      a simple design or an elaborate display, we can create a custom quote tailored to your needs.
    </p>
    <p>
      Interested in wedding lighting? Drop us a note awe'd love to help make your special day shine.
    </p>
    <form class="contact">
      <h2>Contact Details</h2>

      <input type="text" id="firstName" name="firstName" aria-label="first name" placeholder="First Name">
      <input type="text" id="lastName" name="lastName" aria-label="last name" placeholder="Last Name">
      <input type="text" id="companyName" name="companyName" aria-label="company name" placeholder="Company Name">
      <input type="text" id="email" name="email" aria-label="email" placeholder="Email address">
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
        <div><img :src="companyIcon" /></div>
        <div><img :src="companyIcon" /></div>
        <div><img :src="companyIcon" /></div>
        <div><img :src="companyIcon" /></div>
        <div><img :src="companyIcon" /></div>
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
