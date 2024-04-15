import type { PageLoad } from './$types';
import type { product } from '@/types/product';

export const load = (async ({ fetch }) => {
	const fetchProducts = async () => {
		const res = await fetch('https://fakestoreapi.com/products');
		return (await res.json()) as product[];
	};
	return {
		products: await fetchProducts(),
	};
}) satisfies PageLoad;
