<script lang="ts">
import BuyConfirm from '@/components/buyConfirm.svelte';
import type { PageData } from './$types';
export let data: PageData;
const {product} = data;

import { Card, Rating, Badge } from 'flowbite-svelte';
let vCard = false;
</script>



<div>
{#if data.product}
<Card padding="none" class="mx-auto my-8">
    <img class="p-8 rounded-t-lg" src="{product.image}" alt={`Product: ${product.title}`} />
    <div class="px-5 pb-5">
    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
    <Rating rating="{product.rating.rate}" size="{24}" class="mt-2.5 mb-5">
      <Badge slot="text" class="ms-3">{product.rating.rate}</Badge>
    </Rating>
    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
      <BuyConfirm />
    </div>
  </div>
</Card>
{/if}
</div>