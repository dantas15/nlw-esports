export function api<T>(url: string): Promise<T> {
  return fetch(`${import.meta.env.VITE_APP_API_URL}${url}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
}
