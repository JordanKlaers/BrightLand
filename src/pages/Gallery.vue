<script setup>
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import LazyImage from '@/pages/components/Image.vue'
import { loadGalleryImages } from '@/utils/imageLoader.js'
defineProps({
  title: {
    type: String,
    default: 'Gallery'
  }
})

const imageMap = loadGalleryImages()
const imageLoaders = Object.entries(imageMap).map(([path, loader]) => ({
  path,
  loader,
}))
console.log(imageLoaders)
</script>

<template>
  <Header />
  <div class="container-gallery">
    <h1>{{ title }}</h1>
    <LazyImage v-for="({ path, loader }, index) in imageLoaders" :key="path" :loader="loader"
      :alt="`Gallery Image ${index + 1}`" />
  </div>
  <Footer />
</template>

<style></style>
