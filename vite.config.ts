import rollupYaml from '@rollup/plugin-yaml'
import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const vite_config: UserConfig = {
  plugins: [sveltekit(), rollupYaml()],

  server: {
    port: 3000,
  },

  preview: {
    port: 3000,
  },
}

export default vite_config
