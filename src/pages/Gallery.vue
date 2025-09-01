<script setup>
import { computed } from 'vue'
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import LazyImage from '@/pages/components/Image.vue'
import { loadImages_Residential, loadImages_Commercial } from '@/utils/imageLoader.js'
const props = defineProps({
  title: {
    type: String,
    default: 'Gallery'
  }
})

// Dynamically recompute based on prop
const imageLoaders = computed(() => {
  let imageMap = {}

  if (props.title.toLowerCase().includes('commercial')) {
    imageMap = loadImages_Commercial()
  } else if (props.title.toLowerCase().includes('residential')) {
    imageMap = loadImages_Residential()
  }

  return Object.entries(imageMap).map(([path, loader]) => ({
    path,
    loader,
  }))
})
</script>

<template>
  <Header />
  <div class="container-gallery">
    <h1>{{ title }}</h1>
    <LazyImage v-for="({ path, loader }, index) in imageLoaders" class="img-gallery" :key="path" :loader="loader"
      :alt="`Gallery Image ${index + 1}`" />
  </div>
  <Footer />
</template>

<style></style>
