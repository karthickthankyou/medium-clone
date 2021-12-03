module.exports = {
  '*': () => ['npm run format:fix'],
  '*.{ts,tsx,js}': () => ['npm run validate'],
}
