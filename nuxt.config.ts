// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css', '@fontsource/inter/400.css', '@fontsource/inter/700.css'],

    typescript: {
		typeCheck: true,
	},

    postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		}
	},
})