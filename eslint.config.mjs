import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    ignores: ['.next/**', 'out/**'],
  },
]

export default eslintConfig
