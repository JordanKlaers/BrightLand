<template>
  <div class="container-dropdown" ref="dropdownTrigger">
    <template v-if="useDropdownIcon">
      <IconBaselineDensityMedium size="35" stroke="3" color="white" />
    </template>
    <template v-else>
      <span>
        {{ title }}
      </span>
    </template>
    <div v-show="open" class="dropdown-menu" ref="dropdownRef">
      <template v-for="(item, index) in items" :key="item.label">
        <button v-if="item.children" :data-index="item.index" class="nested-dropdown" ref="nestedDropdownTrigger">
          {{ item.label }}
          <div v-if="nestedOpen[item.index]" class="dropdown-menu nested">
            <router-link v-for="itemSub in item.children" :key="itemSub.label" :to="itemSub.to" class=""
              @click="open = false; nestedOpen[index] = false;">
              {{ itemSub.label }}
            </router-link>
          </div>
        </button>
        <router-link v-else-if="item.to" :to="item.to" class="" @click="open = false">
          {{ item.label }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { IconBaselineDensityMedium } from '@tabler/icons-vue';
import { computePosition, flip, offset, shift } from '@floating-ui/dom'
import { onMounted, ref, watch, reactive } from 'vue'

const props = defineProps({
  items: Array,
  main: String,
  title: String,
  useDropdownIcon: Boolean
})

const nestedOpen = reactive(props.items.filter(item => item.children).map(() => false));
const open = ref(false)

const dropdownTrigger = ref(null)
const nestedDropdownTrigger = ref(null)
const dropdownRef = ref(null)

watch(open, async (isOpen) => {
  if (isOpen) {
    await computePosition(dropdownTrigger.value, dropdownRef.value, {
      placement: 'bottom-start',
      middleware: [
        offset(0),    // spacing in px between trigger and dropdown
        flip(),       // flip to top if no space below
        shift({ padding: 8 }) // shift to stay in bounds
      ]
    }).then(({ x, y }) => {
      Object.assign(dropdownRef.value.style, {
        left: `${x}px`,
        top: `${y}px`,
      })
    })
  }
})

onMounted(() => {
  document.addEventListener('click', (event) => {
    const menuClicked = dropdownTrigger.value == event.target
      || dropdownTrigger.value.firstChild == event.target
      || dropdownTrigger.value.firstChild.contains(event.target);
    let nestedMenuClickedIndex = null;
    nestedDropdownTrigger?.value && nestedDropdownTrigger.value.forEach(element => {
      if (element == event.target || element.contains(event.target)) {
        console.log(element.getAttribute('data-index'), 'matched');
        nestedMenuClickedIndex = element.getAttribute('data-index');
      }
    });
    if (menuClicked) {
      open.value = !open.value;
      if (!open.value) {
        nestedOpen.forEach((val, index) => nestedOpen[index] = false)
      }
    } else if (nestedMenuClickedIndex != null) {
      nestedOpen[nestedMenuClickedIndex] = !nestedOpen[nestedMenuClickedIndex];
    } else {
      open.value = false
      nestedOpen.forEach((val, index) => nestedOpen[index] = false)
    }
  });
});

/*
TODO:
  - Ensure all images are responsive.
  - Add the image expanding preview thing for the full gallery, not just the indiviual ones. Need to update the iamge loader to have predefined folders for each gallery.
  - Make the desktop form have the inputs match the design.
  - Hook up the contact form to an email service. - use https://www.youtube.com/watch?v=Yg6POD0M30w&t=325s

*/
</script>
