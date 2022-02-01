export interface Catalog {
  id: string,
  label: string,
  children: Catalog[],
  parents: string[]
}

export interface CatalogsWithMatch {
  list: Catalog[],
  match: Catalog
}
