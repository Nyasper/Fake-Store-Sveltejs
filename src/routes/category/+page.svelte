<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

</script>

<h1 class="dark:text-white">Select a Category</h1>
<ul class="flex flex-row flex-wrap gap-4 justify-center items-center">
    {#each data.categories as category}
        <li>
            <a href="/category/{category}" class="text-xl font-bold  hover:text-white transition-all px-4">{category}</a>
        </li>
    {/each}
</ul>