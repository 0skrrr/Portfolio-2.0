import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                // Example: Add shared SCSS variables automatically to all files
                // additionalData: `@use "@/styles/variables.scss" as *;`
            },
        },
        devSourcemap: true,
    },
    build: {
        target: 'es2026',
        sourcemap: true,
    }
});