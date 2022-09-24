import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Airpods Wireless Bluetooth Headphones',
        productCode: 'GTN-034',
        description: 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
        starRating: 4.7
      },
      {
        id: 2,
        productName: 'iPhone 14 Pro 256GB Memory',
        productCode: 'GML-0023',
        description: 'Introducing the iPhone 14 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        starRating: 4.2
      },
      {
        id: 5,
        productName: 'Cannon EOS 80D DSLR Camera',
        productCode: 'TBG-0948',
        description: "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
        starRating: 4.8
      },
      {
        id: 8,
        productName: 'Sony Playstation 4 Pro White Version',
        productCode: 'TBC-0092',
        description: "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
        starRating: 3.7
      },
      {
        id: 10,
        productName: 'Logitech G-Series Gaming Mouse',
        productCode: 'GMG-0042',
        description: "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
        starRating: 4.6
      }
    ];
    return { products };
  }
}
