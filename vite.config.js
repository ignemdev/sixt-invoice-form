import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    plugins: [ react() ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
            { find: '@store', replacement: path.resolve(__dirname, 'src/services') },
            { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
            { find: '@views', replacement: path.resolve(__dirname, 'src/views') }
        ]
    }
})
