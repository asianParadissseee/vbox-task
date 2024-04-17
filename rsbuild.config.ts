import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: () => {
      return {
        '@/shared': './src/shared',
        '@/entities': './src/entities',
        '@/features': './src/features',
        '@/widgets': './src/widgets',
        '@/pages': './src/pages',
        '@app': './src/app',
      }
    }
  }
});
