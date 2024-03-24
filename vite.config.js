import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    root:"src",
    base:"./",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'src/index.html'),
                login: path.resolve(__dirname, 'src/Pages/Login/index.html'),
                PlayPage: path.resolve(__dirname,'src/Pages/PlayPage/index.html'),
                upload: path.resolve(__dirname,'src/Pages/uploadPage/index.html')
            }
        }
    }
})
