<script setup>
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import led_yellow from '@/assets/images/led_yellow.png'
import led_yellow_2 from '@/assets/images/led_yellow_2.png'
import led_white from '@/assets/images/led_white.png'
import led_rainbow from '@/assets/images/led_rainbow.png'
import led_smooth_yellow from '@/assets/images/led_smooth_yellow.png'
import led_smooth_rainbow from '@/assets/images/led_smooth_rainbow.png'
import led_outside_1 from '@/assets/images/led_outside_1.png'
import led_outside_2 from '@/assets/images/led_outside_2.png'
import led_outside_3 from '@/assets/images/led_outside_3.png'
import led_wreath_bannister from '@/assets/images/led_outside_4.png'
import led_wreath from '@/assets/images/led_wreath.png'
import led_wreath_band from '@/assets/images/led_wreath_band.png'
</script>

<template>
  <Header />
  <div class="container-products">
    <h1>Products</h1>
    <h2>High-Quality LED Holiday Lighting for Every Style</h2>
    <p>
      At Brightland, we use only the best LED lights to create beautiful, energy-efficient holiday
      displays that brighten your home or business. All of our lights are guaranteed for 3 years, so
      you can enjoy your display with confidence season after season.
    </p>
    <h3>LED Bulbs</h3>
    <p>We primarily work with two popular sizes of LED bulbs to fit different styles and spaces:</p>
    <ul class="list-img-text bulb-types">
      <li class="vertical">
        <img :src="led_yellow" />
        <p>
          <strong>C7 Bulbs</strong> — Smaller, classic bulbs perfect for outlining windows, roofs,
          and smaller architectural details.
        </p>
      </li>
      <li class="vertical">
        <img :src="led_yellow_2" />
        <p>
          <strong>C9 Bulbs</strong> — Larger, standard-sized bulbs that make a bold statement on
          eaves, gutters, and large outdoor areas.
        </p>
      </li>
    </ul>
    <h3>Flex Filament Bulbs</h3>
    <img :src="led_smooth_yellow" />
    <p>
      Want the nostalgic look of vintage incandescent bulbs without the fragility? Our
      <strong>Flex Filament LED bulbs</strong> mimic the warm glow and style of classic glass bulbs
      but are durable, shatter-resistant, and energy-efficient.
    </p>
    <h3>Color Options</h3>
    <p>
      Our classic C7 and C9 bulbs come in a variety of color options to match your holiday vision
    </p>
    <ul class="list-img-text horizontal">
      <li class="vertical">
        <img :src="led_yellow" />
        <p><strong>Warm White</strong> — Soft, cozy glow</p>
      </li>
      <li class="vertical">
        <img :src="led_white" />
        <p><strong>Cool White</strong> — Bright, crisp light</p>
      </li>
      <li class="vertical">
        <img :src="led_rainbow" />
        <p><strong>Multicolor</strong> — Festive and vibrant</p>
      </li>
      <li class="vertical">
        <img :src="led_smooth_yellow" />
        <p><strong>Candy Cane</strong> — Patterned with two reds followed by two cool whites</p>
      </li>
      <li class="vertical">
        <img :src="led_smooth_rainbow" />
        <p><strong>Custom Combinations</strong> — Any colors you want, just ask!</p>
      </li>
    </ul>
    <h3>LED Balls of Light</h3>
    <p>
      Perfect for adding pops of color to columns, railings, hedges, bushes, and trees, our LED
      balls of light come in multiple colors and sizes. They provide a unique, festive touch that
      complements traditional string lighting beautifully.
    </p>
    <div class="container-imgs">
      <img :src="led_outside_1" />
      <img :src="led_outside_2" />
      <img :src="led_outside_3" />
    </div>
    <h3>Garland and Wreaths</h3>
    <p>
      In addition to lights, we also install decorative garlands and wreaths to complete your
      holiday look. Whether you want classic greenery or something custom, we’ll help you create a
      festive display.
    </p>
    <div class="container-imgs">
      <img :src="led_wreath" />
      <img :src="led_wreath_band" />
      <img :src="led_wreath_bannister" />
    </div>
    <h3>Ready to Light Up Your Home or Business?</h3>
    <p>
      <router-link to="quote">Contact us</router-link> to learn more about our products or schedule
      a consultation to design your custom display. And remember—all of our lights are backed by a
      3-year guarantee.
    </p>
  </div>
  <Footer />
</template>

<style></style>
