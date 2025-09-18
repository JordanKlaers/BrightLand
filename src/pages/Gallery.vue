<script setup>
import { computed, onMounted, ref, nextTick, watch, reactive } from 'vue'
import Header from '@/pages/sections/Header.vue'
import Footer from '@/pages/sections/Footer.vue'
import LazyImage from '@/pages/components/Image.vue'
import { loadImages_Residential, loadImages_Commercial } from '@/utils/imageLoader.js'
import Masonry from 'masonry-layout'

const containerRef = ref(null)
const gridSizer = ref(null)
const gridItems = ref(null)

const props = defineProps({
  title: {
    type: String,
    default: 'Gallery',
  },
})

const modalImageIngex = ref(-1)

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
var msnry
const handleImageLoaded = () => {
  nextTick(() => {
    msnry.layout()
  })
}
watch(imageLoaders, () => {
  nextTick(() => {
    if (msnry) {
      msnry.reloadItems()
      msnry.layout()
    }
  })
})
onMounted(async () => {
  msnry = new Masonry(containerRef.value, {
    itemSelector: '.img-gallery',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    transitionDuration: 0,
    horizontalOrder: true,
  })
})

const openModal = (index, nav) => {
  modalImageIngex.value = index + nav
}
</script>

<template>
  <Header />
  <div id="donk" class="container-gallery" ref="containerRef">
    <h1 class="img-gallery">{{ title }}</h1>
    <div class="grid-sizer" ref="gridSizer"></div>
    <LazyImage
      v-for="({ path, loader }, index) in imageLoaders"
      class="img-gallery"
      :key="path"
      :loader="loader"
      :alt="`Gallery Image ${index + 1}`"
      ref="gridItems"
      :index="index"
      :total="imageLoaders.length"
      :isModalOpen="modalImageIngex === index"
      @loaded="handleImageLoaded"
      @openModal="openModal"
    />
  </div>
  <Footer />
</template>

<style></style>
