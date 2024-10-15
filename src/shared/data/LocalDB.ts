interface ItemType {
  id: string;
}

export function get<T>(table: string, defaultData: () => T[] = () => []): T[] {
  const vehicles = localStorage.getItem(table);
  if (vehicles !== null) {
    return JSON.parse(vehicles);
  } else {
    const data = defaultData();
    store<T>(table, data);
    return data;
  }
}

export function store<T>(table: string, data: T[]) {
  localStorage.setItem(table, JSON.stringify(data));
}

export function update(table: string, newItem: ItemType) {
  store<ItemType>(table, get<ItemType>(table).map<ItemType>((item: ItemType) => {
    if (item.id === newItem.id) {
      return newItem;
    }
    return item;
  }));
}

export function remove(table: string, id: string) {
  store(table, get<ItemType>(table).filter(value => value.id !== id));
}

export function getNextId(table: string, nextIdKey: string): string {
  let nextId = localStorage.getItem(nextIdKey);

  if (nextId === null) {
    nextId = (get(table).length + 1).toString();
    localStorage.setItem(nextIdKey, nextId);
    return nextId;
  }

  nextId = (parseInt(nextId) + 1).toString();
  localStorage.setItem(nextIdKey, nextId);
  return nextId;
}
