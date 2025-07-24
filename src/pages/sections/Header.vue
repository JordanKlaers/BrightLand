<script setup>
import Navigation from '@/pages/components/Navigation.vue'
import companyIcon from '@/assets/images/company-icon.jpg'
import QuoteLink from '@/pages/components/Quote.vue';
</script>

<template>
  <header id="header">
    <img :src="companyIcon" />
    <Navigation></Navigation>
    <QuoteLink />
  </header>
</template>

<style></style>
