<template>
  <div class="product-card">
    <img :src="image" alt="Produk" class="product-img" />
    <h3 class="product-title">{{ title }}</h3>
    <p class="product-description">{{ description }}</p>
    <button class="buy-button">Beli Sekarang</button>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String
  }
}
</script>

<style scoped>
.product-card {
  background-color: #ffffff;
  border-radius: 25px;
  overflow: hidden;
  padding: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 300px;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.product-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #2c3e50;
}

.product-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.4;
  min-height: 48px;
}

.buy-button {
  background: linear-gradient(135deg, #4b79a1, #283e51);
  color: #fff;
  border: none;
  padding: 0.7rem 1.4rem;
  font-size: 0.95rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.buy-button:hover {
  background: linear-gradient(135deg, #355c7d, #2c3e50);
  transform: translateY(-2px);
}
</style>
