<script setup>
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import Quote from '@/pages/components/Quote.vue'
import companyIcon from '@/assets/images/company-icon.jpg'
import led_outside_1 from '@/assets/images/led_outside_1.png'
import led_outside_2 from '@/assets/images/led_outside_2.png'
</script>

<template>
  <div id="home">
    <Header />
    <div class="parallax">
      <div id="parallax-group-a" class="parallax-group">

        <div id="bg-img" class="parallax-layer parallax-layer-deep">
        </div>
        <h1 class="parallax-layer parallax-layer-back title">
          Christmas Light Installation by Brightland
        </h1>
      </div>
      <div id="parallax-group-b" class="parallax-group">
        <div class="container-info">
          <div class="section-info">
            <h2>
              Seattle’s Custom Christmas Light Experts
            </h2>
            <p>
              Bring the magic of the holidays to your home or business with professional Christmas light installation
              from Brightland. With years of experience and a background in both residential and commercial projects, we
              create custom displays that make your property shine all season long.
            </p>

            <p>
              We proudly serve the greater Seattle area, offering full-service holiday lighting—from custom design and
              installation to maintenance, takedown, and off-season storage—so you can enjoy the holidays without the
              hassle.
            </p>
            <ul>
              <li>🎄 Custom Designs</li>
              <li>🎯 Safe, Professional Installation</li>
              <li>🧰 Free In-Season Service Calls</li>
              <li>📦 Takedown & Organized Storage Provided</li>
              <li>✅ All Lights Are Guaranteed for 3 Years</li>
            </ul>
            <p>
              Whether you're decorating your home for the first time or elevating your business’s holiday presence,
              Brightland is here to bring your vision to life—beautifully, safely, and stress-free.
            </p>
            <p>
              Book Early — Our Calendar Fills Fast!
            </p>
          </div>
          <Quote />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style></style>
