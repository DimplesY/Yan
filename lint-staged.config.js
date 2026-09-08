import path from 'node:path'

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.map((filename) => `"${path.relative(process.cwd(), filename)}"`).join(' ')}`

/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}

export default config
