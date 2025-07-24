<template>
  <div class="container-dropdown" @mouseover="open = true" @mouseleave="open = false">
    <router-link :to="main">
      {{ title }}
    </router-link>
    <div v-if="open" class="dropdown-menu">
      <template v-for="item in items" :key="item.label">
        <div v-if="item.children" class="nested-dropdown" @mouseover="nestedOpen = true"
          @mouseleave="nestedOpen = false">
          <router-link :to="item.to">{{
            item.label
          }}</router-link>
          <div v-if="nestedOpen" class="dropdown-menu nested">
            <router-link v-for="itemSub in item.children" :key="itemSub.label" :to="itemSub.to" class=""
              @click="open = false; nestedOpen = false;">
              {{ itemSub.label }}
            </router-link>
          </div>
        </div>
        <router-link v-else-if="item.to" :to="item.to" class="" @click="open = false">
          {{ item.label }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ items: Array, main: String, title: String })
const open = ref(false)
const nestedOpen = ref(false)
</script>
