<script setup>
import { Teleport, ref, onMounted } from 'vue'
import circleArrowLeft from '@/assets/images/icons/circle-arrow-left.svg'
import circleArrowRight from '@/assets/images/icons/circle-arrow-right.svg'

const props = defineProps({
  loader: Function,
  alt: String,
  isModalOpen: {
    type: Boolean,
    default: false,
  },
  index: Number,
  total: Number,
})

const containerRef = ref(null)
const imageSrc = ref(null)
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        props.loader().then((mod) => {
          imageSrc.value = mod.default
        })
        observer.disconnect()
      }
    },
    {
      rootMargin: '0px 0px 200px 0px',
    }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})
</script>

<template>
  <div ref="containerRef">
    <div class="img-container">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="alt"
        @click="$emit('openModal', 0, index)"
        @load="$emit('loaded')"
      />
    </div>
    <Teleport to="body">
      <div v-if="isModalOpen" class="modal-backdrop" @click="showModal = false">
        <img
          :style="{ pointerEvents: index > 0 ? 'auto' : 'none', opacity: index > 0 ? 1 : 0 }"
          :src="circleArrowLeft"
          class="navigation-arrow"
          @click="$emit('openModal', -1, index)"
        />
        <div class="modal-content img-modal">
          <nav></nav>
          <img :src="imageSrc" :alt="alt" @click="$emit('openModal', 0, -1)" />
        </div>
        <img
          :style="{
            pointerEvents: index < total ? 'auto' : 'none',
            opacity: index < total ? 1 : 0,
          }"
          :src="circleArrowRight"
          class="navigation-arrow"
          @click="$emit('openModal', 1, index)"
        />
      </div>
    </Teleport>
  </div>
</template>

