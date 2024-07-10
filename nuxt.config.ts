// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.scss', '@fontsource/inter/400.css', '@fontsource/inter/700.css'],

    typescript: {
		typeCheck: true,
	},

    postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		}
	},

	compatibilityDate: '2024-07-07',
})