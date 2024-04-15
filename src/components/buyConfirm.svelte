<script>
  import { Button, Modal } from 'flowbite-svelte';
  // import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
  let popupModal = false;
  let comprado = false;
</script>

<Button on:click={() => (popupModal = true)}>Buy Now</Button>

<Modal bind:open={popupModal} size="xs" autoclose>
  <div class="text-center">
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to buy this product?</h3>
    <Button color="red" class="me-2">Yes, Confirm</Button>
    <Button color="alternative">No, cancel</Button>
  </div>
</Modal>