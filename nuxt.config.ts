// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Nuxt3 PWA",
      short_name: "Nuxt",
      description: "this is first test on PWA for nuxt3",
      theme_color: '#eee',
      icons: [
        {src: 'android-launchericon-48-48.png', sizes: '48x48', type: 'image/png'},
        {src: 'android-launchericon-72-72.png', sizes: '72x72', type: 'image/png'},
        {src: 'android-launchericon-96-96.png', sizes: '96x96', type: 'image/png'},
        {src: 'android-launchericon-144-144.png', sizes: '144x144', type: 'image/png'},
        {src: 'android-launchericon-192-192.png', sizes: '192x192', type: 'image/png'},
        {src: 'android-launchericon-512-512.png', sizes: '512x512', type: 'image/png'}
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
})
