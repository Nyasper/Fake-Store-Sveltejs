<script lang="ts">
  import ProductCard from '@/components/productCard.svelte';
  import type { PageData } from './$types';
  export let data:PageData;

</script>

<h1 class="dark:text-white">All Products</h1>
<ul class="flex flex-row flex-wrap h-64 w-auto">
  {#each data.products as product (product.id)}
    <ProductCard 
      productId={product.id} 
      productName={product.title} 
      productImage={product.image} 
      price={product.price} 
      productRating={product.rating.rate}
    />
  {/each}
</ul>
