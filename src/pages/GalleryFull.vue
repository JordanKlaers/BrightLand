<script setup>
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import companyIcon from '@/assets/images/company-icon.jpg'
</script>

<template>
  <Header />
  <div class="container-gallery-full">
    <h1 id="bg-img"><span>Residential Lighting Gallery</span></h1>
    <p>Some stuff about lighting</p>
    <h2>Residential Lighting Gallery</h2>
    <div class="container-imgs">
      <img :src="companyIcon">
      <img :src="companyIcon">
      <img :src="companyIcon">
      <img :src="companyIcon">
    </div>
    <h2>Commercial Lighting Gallery</h2>
    <div class="container-imgs">
      <img :src="companyIcon">
      <img :src="companyIcon">
      <img :src="companyIcon">
      <img :src="companyIcon">
    </div>
  </div>
  <Footer />
</template>

<style></style>
