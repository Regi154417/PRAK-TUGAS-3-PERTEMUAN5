<template>
  <div>
    <Navbar />
    <Carousel />

    <section class="products">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :image="product.image"
        :title="product.title"
        :description="product.description"
      />
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'

import slide1 from '../assets/images/foto1.jpg'
import slide2 from '../assets/images/foto2.jpg'
import slide3 from '../assets/images/foto3.webp'

export default {
  components: {
    Navbar,
    Carousel,
    ProductCard,
    Footer
  },
  data() {
    return {
      products: [
        {
          image: slide1,
          title: 'ROG',
          description: 'Laptop gaming ROG berkualitas tinggi dengan performa maksimal.'
        },
        {
          image: slide2,
          title: 'Acer Nitro',
          description: 'Performa tinggi dan tampilan agresif untuk kebutuhan gaming Anda.'
        },
        {
          image: slide3,
          title: 'MSI',
          description: 'Desain solid dan andal, cocok untuk kreator dan gamer profesional.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #f9f9f9;
}
</style>
