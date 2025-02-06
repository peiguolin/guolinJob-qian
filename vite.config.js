import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        // 设置路径别名
        alias: {
            '@': resolve(__dirname, './src'),
            '*': resolve('')
        },
    },
  plugins: [
      vue(),
      AutoImport({
          resolvers: [ElementPlusResolver()],
      }),
      Components({
          resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({
          useSource: true
      }),
  ],
    server: {
        proxy: {
            // 代理配置
            '/api': {
                target: 'http://localhost:8083/', // 后端服务器地址
                changeOrigin: true, // 是否允许跨域
                rewrite: (path) => path.replace(/^\/api/, '') // 重写路径，去掉 '/api' 前缀
            }
        }
    }
})
