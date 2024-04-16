<script>
	import "../app.pcss";
	import Navbar from "./navbar.svelte";
	import Loading from "@/lib/loading.svelte";
	

</script>
<Navbar />
<Loading />

<slot></slot>