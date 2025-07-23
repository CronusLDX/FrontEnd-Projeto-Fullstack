export const formattedCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export function convertId<T extends { _id?: string }>(
  data: T | T[]
): (T & { id: string }) | (T & { id: string })[] {
  if (Array.isArray(data)) {
    return data.map(item => ({
      ...item,
      id: item._id || '',
    }));
  } else {
    return {
      ...data,
      id: data._id || '',
    };
  }
}
