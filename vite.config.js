import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/components',
			'@page': '/src/page',
			'@lab': '/src/components/lab',
			'@data': '/src/data',
			'@public': '/public',
			'@icons': '/src/assets/icons'
		}
	}
})
