export interface PublicStore<T> {
  get(key: string): Promise<T | undefined>;
}