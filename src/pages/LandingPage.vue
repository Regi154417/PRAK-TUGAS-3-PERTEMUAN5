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

// Import gambar lokal
import slide1 from '../assets/images/foto1.JPG'
import slide2 from '../assets/images/foto2.JPG'
import slide3 from '../assets/images/foto3.WEBP'

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
        { image: slide1, title: 'ROG', description: 'Laptop gaming ROG berkualitas tinggi.' },
        { image: slide2, title: 'Acer Nitro', description: 'Performa tinggi untuk gamer kasual.' },
        { image: slide3, title: 'MSI', description: 'Desain solid dan kuat untuk semua kebutuhan.' }
      ]
    }
  }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 4rem;
}
</style>
