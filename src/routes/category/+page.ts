import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const fetchCategories = async () => {
		const res = await fetch('https://fakestoreapi.com/products/categories');
		return (await res.json()) as string[];
	};
	return {
		categories: await fetchCategories(),
	};
}) satisfies PageLoad;
