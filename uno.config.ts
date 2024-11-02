import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  theme: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      yan: {
        border: {
          DEFAULT: 'hsl(var(--border))',
        }
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/'
    }),
    presetTypography(),
    presetWebFonts(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
