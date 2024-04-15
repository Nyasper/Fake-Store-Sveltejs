import type { PageLoad } from './$types';
import type { product } from '@/types/product';

export const load = (async ({ params, fetch }) => {
	const { categoryId } = params;
	const fetchProducts = async () => {
		const res = await fetch(
			`https://fakestoreapi.com/products/category/${categoryId}`
		);
		return (await res.json()) as product[];
	};
	return {
		products: await fetchProducts(),
	};
}) satisfies PageLoad;
