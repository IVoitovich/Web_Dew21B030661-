export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  image: string;

  rating: number;

  source: string;

  completed: boolean;

  likes: number;

  category: number;
}

export const products = [
  {
    id: 1,
    name: 'Видеокарта Palit GeForce RTX 3060 Dual NE63060019K9-190AD 12GB',
    price: 172_000,
    description: '- серия: GeForce RTX 30 Series/n'+
    '- рекомендуемая мощность блока питания: 550 Вт/n'+
    '- частота графического процессора: 1320 МГц/n'+
    '- объем видеопамяти: 12 ГБ/n'+
    '- тип видеопамяти: GDDR6',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h7d/33720830722078/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928-1-Container.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorigmPO6CNDDOwni0ma-2QQBG_HH4nZNrDvFnh6CBDGFjncHFJC1DY-RoCqygQAvD_BwE#!/item',
    completed: false,
    likes: 69,
    category: 4,
  },
  {
    id: 1,
    name: 'Монитор Sanc M2442PH серый',
    price: 81_990,
    description: '-диагональ: 23.8 дюйм/n'+
    '-разрешение: 1920x1080/n'+
    'тип ЖК-матрицы: IPS/n'+
    'яркость: 300 кд/м2/n'+
    'время отклика: 1 мс/n'+
    'макс. частота обновления кадров: 165 Гц/n'+
    '-входы: HDMI, ,DisplayPort, ,VGA (D-Sub)',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h92/67278437777438/sanc-m2442ph-seryi-108213498-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000#!/item',
    completed: false,
    likes: 458,
    category: 5,
  },
  {
    id: 1,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price:691_500,
    description: 'технология NFC: Да/n'+
    '-цвет: фиолетовый/n'+
    '-тип экрана: OLED, Super Retina XDR display возможностью постоянной работы/n'+
    '-диагональ: 6.7 дюйм/n'+
    '-размер оперативной памяти: 6 ГБ/n'+
    '-процессор: 6-ядерный Apple A16 Bionic/n'+
    '-объем встроенной памяти: 256 ГБ/n'+
    '-емкость аккумулятора: 3095 мАч/n',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h92/67278437777438/sanc-m2442ph-seryi-108213498-1.jpg',
    rating: 4.76,
    source: 'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000#!/item',
    completed: false,
    likes: 1238,
    category: 1,
  },
  {
    id: 1,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price:691_500,
    description: 'технология NFC: Да/n'+
    '-цвет: фиолетовый/n'+
    '-тип экрана: OLED, Super Retina XDR display возможностью постоянной работы/n'+
    '-диагональ: 6.7 дюйм/n'+
    '-размер оперативной памяти: 6 ГБ/n'+
    '-процессор: 6-ядерный Apple A16 Bionic/n'+
    '-объем встроенной памяти: 256 ГБ/n'+
    '-емкость аккумулятора: 3095 мАч/n',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h92/67278437777438/sanc-m2442ph-seryi-108213498-1.jpg',
    rating: 4.76,
    source: 'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000#!/item',
    completed: false,
    likes: 1238,
    category: 1,
  },

 
];