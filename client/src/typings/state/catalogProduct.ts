export interface ICatalogProduct {
  info: {
    name: string;
    dimensions: string;
    weight: string;
    displayType: string;
    displaySize: string;
    displayResolution: string;
    os: string;
    cpu: string;
    internalMemory: string;
    ram: string;
    camera: string;
    battery: string;
    color: string;
    price: number;
    photo: string;
  };
  tags: {
    priceRange: string;
    brand: string;
    color: string;
    os: string;
    internalMemory: string;
    ram: string;
    displaySize: string;
    displayResolution: string;
    camera: string;
    cpu: string;
  };
  _id: string;
}
