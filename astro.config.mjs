import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kosche1.github.io',
	base: '/Castro-Docs',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',	
			},
			sidebar: [
				{
					label: 'What i Learned',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
