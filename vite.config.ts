import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [tailwindcss(), reactRouter()],
	resolve: {
		tsconfigPaths: true,
	},
	server: {
		host: '0.0.0.0',
		port: 5173,
		strictPort: true,
		watch: {
			usePolling: true,
			interval: 100,
			ignored: ['**/node_modules/**', '**/.git/**'],
		},
		hmr: {
			host: 'localhost',
			port: 5173,
			clientPort: 5173,
			protocol: 'ws',
		},
	},
})
