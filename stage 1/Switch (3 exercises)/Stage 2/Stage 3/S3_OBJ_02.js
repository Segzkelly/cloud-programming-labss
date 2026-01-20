function mergeDefaults(defaults, overrides) {
  return { ...defaults, ...overrides };
}

console.log(
  mergeDefaults({ a: 1, b: 2 }, { b: 99 })
);
