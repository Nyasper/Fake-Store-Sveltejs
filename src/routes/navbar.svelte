<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';
</script>

<Navbar>
  <NavBrand href="/">
    <img src="favicon.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fake Store</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/products">All products</NavLi>
    <NavLi href="/category">Categories</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800"/>
</Navbar>
