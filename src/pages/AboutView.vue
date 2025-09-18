<script setup>
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import Leland from '@/assets/images/Leland.jpg'
</script>
<template>
  <Header />
  <div class="container-about">
    <h1>About Brightland</h1>
    <p>
      Welcome to <strong>Brightland</strong> — where your holiday dreams shine brighter.
    </p>
    <p>
      With over 8 years of experience designing and installing custom Holiday lights, Brightland specializes in
      transforming homes and businesses across the Seattle area into dazzling displays of holiday cheer.
    </p>
    <p>
      My journey started in Colorado and Washington, working on everything from residential rooftops to commercial
      installations in cities like Boulder and Bellingham. Today, Brightland is proudly focused on serving the greater
      Seattle community with professional, high-quality lighting that brings joy and wonder to every corner we touch.
    </p>
    <p>
      As the owner and installer, I bring a hands-on, personal approach to every project. Outside of the holiday season,
      I work as a mountain guide, leading expeditions in Alaska during the spring and guiding in the Cascades through
      summer. That experience has taught me the importance of safety, precision, and working with nature—skills I bring
      to every light I hang.
    </p>
    <p>
      At Brightland, we handle everything—from custom design and installation to maintenance and takedown—so you can
      focus on enjoying the season. Whether you're looking to light up your home or add a festive touch to your
      storefront, we’re here to make it beautiful, seamless, and stress-free.
    </p>
    <p>
      Let’s make this season unforgettable.<br>Reach out today to schedule a free consultation and secure your spot on
      our holiday calendar.
    </p>
    <h2 class="team-header">Meet the Team</h2>
    <p>
      My Name is Leland and I'm dedicated to quality and customer satisfaction.
    </p>
    <img alt="Team Photo" :src="Leland" />
  </div>
  <Footer />
</template>

<style></style>
