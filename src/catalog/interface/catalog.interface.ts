export interface Catalog {
  id: string,
  label: string,
  children: Catalog[],
  parents: string[]
}
