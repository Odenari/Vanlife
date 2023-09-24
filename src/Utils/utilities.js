export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const getActiveFilters = provider => {
  const holder = {};
  provider.map(item => (holder[item] = false));
  return holder;
};

export function superbClear(...fns) {
  fns.map(fn => fn(false));
}
