<template>
  <nav class="navbar">
    <div class="navbar-container">
      <h1 class="logo">Toko<span> Online Laptop</span></h1>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/produk">Produk</a></li>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(to right, #2c3e50, #34495e);
  padding: 0.2rem 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar-container {
  max-width: 1350px;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
}

.logo span {
  color: #00cec9;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links li {
  transition: transform 0.2s ease;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #00cec9;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: #00cec9;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }

  .logo {
    font-size: 1.5rem;
  }
}
</style>
