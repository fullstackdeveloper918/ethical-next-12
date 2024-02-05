import images from './images'

// list

export const LIST = [
  {
    id: 1,
    label: 'Product Type',
    children: [
      { id: 1, label: 'backPacks', name: 'Back Packs' },
      { id: 2, label: 'Coolers', name: 'Coolers' },
      { id: 3, label: 'fannyPacks', name: 'Fanny Packs' },
      { id: 4, label: 'laundryBags', name: 'Laundry Bags' },
      { id: 5, label: 'Pouches', name: 'Pouches' },
      { id: 6, label: 'toteBags', name: 'Tote Bags' },
      { id: 7, label: 'waterBottles', name: 'Water Bottles' },
    ],
  },
  {
    id: 2,
    label: 'Price',
    children: [{ id: 1, minPrice: 0, maxPrice: 200 }],
  },
  {
    id: 3,
    label: 'Customization',
    children: [
      { id: 1, label: '1-Color Decoration' },
      { id: 1, label: '2-Color Decoration' },
      { id: 1, label: '3-Color Decoration' },
      { id: 1, label: 'Embroidery' },
      { id: 1, label: 'Laser Engraving' },
    ],
  },
  {
    id: 4,
    label: 'Color',
    children: [
      { id: 1, label: '1-Color Decoration' },
      { id: 1, label: '2-Color Decoration' },
      { id: 1, label: '3-Color Decoration' },
      { id: 1, label: 'Embroidery' },
      { id: 1, label: 'Laser Engraving' },
    ],
  },
  {
    id: 5,
    label: 'Sustainability',
    children: [
      { id: 1, label: 'Good' },
      { id: 1, label: 'Better' },
      { id: 1, label: 'Best' },
      { id: 1, label: 'Recycled' },
    ],
  },
  {
    id: 6,
    label: 'Mission Driven',
    children: [{ id: 1, label: 'Environmental Causes' }],
  },
  {
    id: 7,
    label: 'Cotton Fabric Weight',
    children: [
      { id: 1, label: 'Medium - Weight' },
      { id: 1, label: 'Heavy - Weight' },
    ],
  },
  {
    id: 8,
    label: 'Drinkware Capacity',
    children: [{ id: 1, label: '15 Oz to 19 Oz' }],
  },
  {
    id: 9,
    label: 'Made Of',
    children: [
      { id: 1, label: 'Bamboo' },
      { id: 1, label: 'Cork' },
      { id: 1, label: 'Cotton' },
      { id: 1, label: 'Jute' },
      { id: 1, label: 'Polyester' },
      { id: 1, label: 'Recycled Cotton' },
      { id: 1, label: 'Recycled Polyester' },
    ],
  },
]

export const Collection_data = [
  {
    src: images.Shirt,
    text: 'Zama Flannel Plaid Button Down Shirt - Unisex',
    colors: images.different_colors,
  },
  {
    src: images.Shirt,
    text: 'Zama Flannel Plaid Button Down Shirt - Unisex',
    colors: images.different_colors,
  },
  {
    src: images.Shirt,
    text: 'Zama Flannel Plaid Button Down Shirt - Unisex',
    colors: images.different_colors,
  },
]

export const Sidebar_Data = [
  { id: 1, text: 'Dashboard', icon: images.Livello_1 },
  { id: 1, text: 'Message', icon: images.Livello_1 },
  { id: 1, text: 'Orders', icon: images.Livello_1 },
  { id: 1, text: 'History', icon: images.Livello_1 },
]
