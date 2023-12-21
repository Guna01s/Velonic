import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: '',
	plugins: [react()],
	define: { 'process.env': {} },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	server: {
		proxy: {
			'/network': {
				target: 'http://192.168.1.6',
				changeOrigin: true,
			},
		},
	},
})
