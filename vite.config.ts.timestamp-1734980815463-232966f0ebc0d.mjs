// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/mukunzi/CascadeProjects/windsurf-project/vue-mfe-feature-a/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/mukunzi/CascadeProjects/windsurf-project/vue-mfe-feature-a/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/mukunzi/CascadeProjects/windsurf-project/vue-mfe-feature-a/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/mukunzi/CascadeProjects/windsurf-project/vue-mfe-feature-a/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["src/**/*.ts", "src/**/*.vue"],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace("/dist/src/", "/dist/"),
        content
      })
    })
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", __vite_injected_original_import_meta_url)),
      name: "VueMfeFeatureA",
      fileName: "vue-mfe-feature-a"
    },
    rollupOptions: {
      external: ["vue", "@mknz/vue-mfe-wrapper"],
      output: {
        globals: {
          vue: "Vue",
          "@mknz/vue-mfe-wrapper": "VueMfeWrapper"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbXVrdW56aS9DYXNjYWRlUHJvamVjdHMvd2luZHN1cmYtcHJvamVjdC92dWUtbWZlLWZlYXR1cmUtYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL211a3VuemkvQ2FzY2FkZVByb2plY3RzL3dpbmRzdXJmLXByb2plY3QvdnVlLW1mZS1mZWF0dXJlLWEvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL211a3VuemkvQ2FzY2FkZVByb2plY3RzL3dpbmRzdXJmLXByb2plY3QvdnVlLW1mZS1mZWF0dXJlLWEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnRzJywgJ3NyYy8qKi8qLnZ1ZSddLFxuICAgICAgYmVmb3JlV3JpdGVGaWxlOiAoZmlsZVBhdGgsIGNvbnRlbnQpID0+ICh7XG4gICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aC5yZXBsYWNlKCcvZGlzdC9zcmMvJywgJy9kaXN0LycpLFxuICAgICAgICBjb250ZW50XG4gICAgICB9KVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9pbmRleC50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgbmFtZTogJ1Z1ZU1mZUZlYXR1cmVBJyxcbiAgICAgIGZpbGVOYW1lOiAndnVlLW1mZS1mZWF0dXJlLWEnXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWyd2dWUnLCAnQG1rbnovdnVlLW1mZS13cmFwcGVyJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgJ0Bta256L3Z1ZS1tZmUtd3JhcHBlcic6ICdWdWVNZmVXcmFwcGVyJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVgsU0FBUyxlQUFlLFdBQVc7QUFDeFosU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUgwTixJQUFNLDJDQUEyQztBQU0zUixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsZUFBZSxjQUFjO0FBQUEsTUFDdkMsaUJBQWlCLENBQUMsVUFBVSxhQUFhO0FBQUEsUUFDdkMsVUFBVSxTQUFTLFFBQVEsY0FBYyxRQUFRO0FBQUEsUUFDakQ7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxjQUFjLElBQUksSUFBSSxrQkFBa0Isd0NBQWUsQ0FBQztBQUFBLE1BQy9ELE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTyx1QkFBdUI7QUFBQSxNQUN6QyxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCx5QkFBeUI7QUFBQSxRQUMzQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
