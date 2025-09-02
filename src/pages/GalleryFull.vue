<script setup>
import { reactive, onMounted } from 'vue'
import { loadImages_Residential, loadImages_Commercial } from '@/utils/imageLoader.js'
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import LazyImage from '@/pages/components/Image.vue'

const imageMap = reactive({
  commercial: [],
  residential: []
})

onMounted(async () => {
  imageMap['commercial'] = Object.entries(loadImages_Commercial()).slice(0, 3).map(([path, loader]) => ({
    path,
    loader,
  }))
  imageMap['residential'] = Object.entries(loadImages_Residential()).slice(0, 3).map(([path, loader]) => ({
    path,
    loader,
  }))
})

</script>

<template>
  <Header />
  <div class="container-gallery-full">
    <h1 id="bg-img"><span>Lighting Gallery</span></h1>
    <h2>
      <router-link to="gallery-commercial" title="View Full Commercial Gallery">
        Commercial Lighting Gallery
      </router-link>
    </h2>
    <div class="container-imgs">
      <LazyImage v-for="({ path, loader }, index) in imageMap.commercial" :key="path" :loader="loader"
        :alt="`Gallery Image ${index + 1}`" />
    </div>
    <h2>
      <router-link to="gallery-commercial" title="View Full Commercial Gallery">
        Residential Lighting Gallery
      </router-link>
    </h2>
    <div class="container-imgs">
      <LazyImage v-for="({ path, loader }, index) in imageMap.residential" :key="path" :loader="loader"
        :alt="`Gallery Image ${index + 1}`" />
    </div>
  </div>
  <Footer />
</template>

<style></style>
