<template>
  <div class="carousel">
    <div
      class="carousel-slide"
      :style="{ backgroundImage: `url(${images[currentIndex]})` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import slide1 from '../assets/images/foto1.jpg'
import slide2 from '../assets/images/foto2.jpg'
import slide3 from '../assets/images/foto3.webp'

const images = [slide1, slide2, slide3]
const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 3000)
})
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 430px;
  overflow: hidden;
}
.carousel-slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease-in-out;
}
</style>
