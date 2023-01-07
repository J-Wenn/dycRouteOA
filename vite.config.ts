import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
		proxy: {
			'/api': {
				target: 'http://152.136.185.210:5000/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	preview: {
		open: true,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
})
