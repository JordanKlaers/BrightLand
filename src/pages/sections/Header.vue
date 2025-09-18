<script setup>
import Navigation from '@/pages/components/Navigation.vue'
import companyIcon from '@/assets/images/residential/IMG_1675.jpg'

</script>

<template>
  <header id="header">
    <router-link to="home"><img :src="companyIcon" /></router-link>
    <Navigation></Navigation>
  </header>
</template>

<style></style>
