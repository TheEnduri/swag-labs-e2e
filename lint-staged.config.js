module.exports = {
  '**/*.{js,ts,json}': ['prettier --write', 'eslint --fix '],
  '*.{js,ts}': [() => 'tsc --noEmit --project tsconfig.json'],
}
