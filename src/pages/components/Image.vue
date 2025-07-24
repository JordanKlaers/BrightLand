<script setup>
import { Teleport, ref, onMounted } from 'vue'

const props = defineProps({
  loader: Function,
  alt: String
})

const containerRef = ref(null)
const imageSrc = ref(null)
const showModal = ref(false)
onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      props.loader().then(mod => {
        imageSrc.value = mod.default
      })
      observer.disconnect()
    }
  }, {
    rootMargin: '0px 0px 200px 0px'
  })

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})
</script>

<template>
  <div ref="containerRef" style="min-height: 200px">
    <img v-if="imageSrc" :src="imageSrc" :alt="alt" @click="showModal = true" />
    <Teleport to="body">
      <div v-if="showModal" class="modal-backdrop" @click="showModal = false">
        <div class="modal-content">
          <img :src="imageSrc" :alt="alt" @click="showModal = false" />
        </div>
      </div>
    </Teleport>
  </div>
</template>
