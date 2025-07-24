<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import Dropdown from './Dropdown.vue';
/*
  Logic for swapping nav structure between smaller and larger window widths
*/
const windowWidth = ref(window.innerWidth)
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', updateWidth)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})
const isMobile = computed(() => windowWidth.value < 768);
/*
  Logic for managing if the dropdown for navigation is open/closed
*/

const galleryLinks = [
  { label: 'Residential', to: '/gallery-residential' },
  { label: 'Commercial', to: '/gallery-commercial' },
];
const navigationLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Products', to: '/products' },
  { label: 'Residential', to: '/lighting-residential' },
  { label: 'Commercial', to: '/lighting-commercial' },
  // { label: 'Gallery', children: galleryDropdown },
  { label: 'About Us', to: '/about' },
  { label: 'FAQ', to: '/faq' }
];
let donk = [...navigationLinks];
donk.splice(4, 0, { label: 'Gallery', to: 'gallery', children: galleryLinks });

</script>

<template>
  <nav class="list-navigation">
    <!-- MOBILE LAYOUT -->
    <template v-if="isMobile">
      <Dropdown :items="donk" title="navigation" />
    </template>
    <!-- DESKTOP LAYOUT -->
    <template v-else>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/lighting-residential">Residential</RouterLink>
      <RouterLink to="/lighting-commercial">Commercial</RouterLink>
      <Dropdown :items="galleryLinks" main="gallery" title="Gallery" />
      <RouterLink to="/about">About Us</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
    </template>
  </nav>
</template>

<style></style>
