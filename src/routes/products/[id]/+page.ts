import type { PageLoad } from './$types';
import type { product } from '@/types/product';

export const load = (async ({ fetch, params }) => {
	const { id } = params;
	const fetchProducts = async () => {
		const res = await fetch(`https://fakestoreapi.com/products/${id}`);
		return (await res.json()) as product;
	};
	return {
		product: await fetchProducts(),
	};
}) satisfies PageLoad;
