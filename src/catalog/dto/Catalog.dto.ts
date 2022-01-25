export class Catalog {
  readonly id: string;
  readonly label: string;
  readonly children: Catalog[];
  readonly parents: string[]
}


export class CatalogQueryRes {
  readonly list: Catalog[]
  readonly match: Catalog
}