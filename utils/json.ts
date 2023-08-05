export function tryParseItemFromLocalStorage(item: string) {
  const itemFromLocalStorage = localStorage.getItem(item);

  if (!itemFromLocalStorage) {
    return null;
  }

  return JSON.parse(itemFromLocalStorage);
}
