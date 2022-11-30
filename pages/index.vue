<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Products</h2>
    <div class="grid grid-cols-2 gap-7">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("http://localhost:4000/products"); // fetch products

// start up json server: json-server --watch data/db.json --port 4000
// go checkout house-marketplace firebase code to see how to add listings and used in different categories
</script>
