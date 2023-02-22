export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    url:string;
    img_url:string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
      price: 799,
      description: 'технология NFC, Филетовый',
      
      url:"https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy A33',
      price: 129_630 ,
      description: '5G 6 ГБ/128 ГБ черный',
      url:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/he7/49894748094494/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg",
    },
    {
      id: 3,
      name: 'Смартфон OPPO Reno',
      price: 159_940,
      description: '7 8 ГБ/128 ГБ оранжевый',
      url:"https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h48/h5c/50455778131998/orro-reno7-8-128gb-oranzevyj-104705825-1.jpg",
    },
    {
        id: 4,
        name: 'Смартфон Xiaomi ',
        price: 245_000,
        description: '12T 8 ГБ/256 ГБ черный',
        url:"https://kaspi.kz/shop/p/xiaomi-12t-8-gb-256-gb-chernyi-106866405/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h98/63228133408798/xiaomi-12t-8-gb-256-gb-cernyj-106866405-1.jpg",
      },
      {
        id: 5,
        name: 'Видеокарта Palit GeForce RTX 3060 Dual NE63060019K9-190AD 12GB',
        price: 190_000,
        description: 'частота графического процессора: 1320 МГц',
        url:"https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h53/33720831311902/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg",
      },
      {
        id: 6,
        name: 'Видеокарта GIGABYTE GeForce RTX 3060 Ti GV-N306TGAMING OC-8GD 2.0 8GB',
        price: 271_000,
        description: 'частота графического процессора: 1410',
        url:"https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd-2-0-8gb-102565473/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h96/49219978035230/gigabyte-geforce-rtx-3060-ti-gv-n306tgaming-oc-8gd-2-0-8gb-102565473-1.jpg",
      },
      {
        id: 7,
        name: 'Видеокарта Palit GeForce RTX 3070 Ti GamingPro 8 ГБ',
        price: 368_369,
        description: 'рекомендуемая мощность блока питания: 700 Вт',
        url:"https://kaspi.kz/shop/p/palit-geforce-rtx-3070-ti-gamingpro-8-gb-101648509/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/ha9/34097904255006/palit-geforce-rtx-3070-ti-gamingpro-ned307t019p2-1046a-8gb-101648509-1-Container.jpg",
      },
      {
        id: 8,
        name: 'Phone Standard',
        price: 215_249,
        description: 'частота графического процессора: 1807 МГц',
        url:"https://kaspi.kz/shop/p/msi-geforce-rtx-3060-ventus-2x-oc-12-gb-101379753/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/hba/34289810800670/msi-geforce-rtx-3060-ventus-2x-oc-12gb-101379753-1-Container.jpg",
      },

      {
        id: 9,
        name: 'Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC 12GB ',
        price: 220_00,
        description: 'частота графического процессора: 1837 МГц',
        url:"https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12gb-101115165/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h0d/46203072151582/gigabyte-geforce-rtx-3060-gaming-oc-12gb-101115165-1.jpg",
      },
      {
        id: 10,
        name: 'Видеокарта Inno3D GeForce RTX 4070 Ti X3 N407T3-126X-186148N 12 ГБ',
        price: 467_315,
        description: 'частота графического процессора: 2610 МГц',
        url:"https://kaspi.kz/shop/p/inno3d-geforce-rtx-4070-ti-x3-n407t3-126x-186148n-12-gb-108358652/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item",
      img_url:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h48/67678653612062/inno3d-geforce-rtx-4070-ti-x3-n407t3-126x-186148n-12-gb-108358652-1.jpg",
      },
  ];