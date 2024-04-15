<script lang="ts">
  import { Card, Rating, Badge } from 'flowbite-svelte';
  export let productName: string;
  export let productImage: string;
  export let price: number;
  export let productId: number;
  export let productRating: number;
</script>

<Card padding="none" class="mx-auto my-6">
  <a href={`/products/${productId}`}>
    <img class="p-8 h-64 rounded-t-lg" src="{productImage}" alt="{productName}" />
  </a>
  <div class="px-5 pb-5">
    <a href={`/products/${productId}`}>
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
    </a>
    <Rating rating="{productRating}" size="{24}" class="mt-2.5 mb-5">
      <Badge slot="text" class="ms-3">{productRating}</Badge>
    </Rating>
    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
    </div>
  </div>
</Card>
