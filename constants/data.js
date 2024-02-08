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
  { id: 2, text: 'Orders', icon: images.Livello_1 },
  { id: 3, text: 'Message', icon: images.Livello_1 },
  { id: 4, text: 'History', icon: images.Livello_1 },
  { id: 5, text: 'Customers', icon: images.Livello_1 },
  { id: 6, text: 'Pages', icon: images.Livello_1 },
  { id: 7, text: 'Blogs', icon: images.Livello_1 },
  { id: 8, text: 'Invoices', icon: images.Livello_1 },
  { id: 9, text: 'All Notification', icon: images.Livello_1 },
  { id: 10, text: 'Store', icon: images.Livello_1 },
  { id: 11, text: 'Administrator', icon: images.Livello_1 },
]

export const Dashboard_table = [
  {
    SL: 1,
    Supplier: 'John Doe',
    Warehouse: 'warehouse 1',
    Grand_total: '$720',
    Status: 'Pending',
    bgColor: '#f5365c',
  },
  {
    SL: 2,
    Supplier: 'Thomas Mour',
    Warehouse: 'warehouse 1',
    Grand_total: '$720',
    Status: 'Received',
    bgColor: '#2dce89',
  },
  {
    SL: 3,
    Supplier: 'Jhon Smith',
    Warehouse: 'warehouse 1',
    Grand_total: '$720',
    Status: 'Ordered',
    bgColor: '#fb6340',
  },
  {
    SL: 4,
    Supplier: 'Alexander Cook',
    Warehouse: 'warehouse 1',
    Grand_total: '$720',
    Status: 'Received',
    bgColor: '#2dce89',
  },
  {
    SL: 5,
    Supplier: 'John Doe',
    Warehouse: 'warehouse 1',
    Grand_total: '$720',
    Status: 'Pending',
    bgColor: '#f5365c',
  },
  {
    SL: 6,
    Supplier: 'Stuart Brod',
    Warehouse: 'warehouse 1',
    Grand_total: '$720',
    Status: 'Received',
    bgColor: '#2dce89',
  },
  {
    SL: 7,
    Supplier: 'John Doe',
    Warehouse: 'warehouse 1',
    Grand_total: '$720',
    Status: 'Pending',
    bgColor: '#f5365c',
  },
]

export const Dashboard_User_Data = [
  { id: 1, Name: 'Alex Thmpson', Message: 'Cheers!', src: images.Young_man },
  {
    id: 2,
    Name: 'John Dogue',
    Message: 'stay hungry stay foolish!',
    src: images.Young_man,
  },
  { id: 3, Name: 'Alex Thmpson', Message: 'Cheers!', src: images.Young_man },
  { id: 4, Name: 'Alex Thmpson', Message: 'Cheers!', src: images.Young_man },
]

export const Application_Sales = [
  {
    id: 1,
    Application_Name: 'Able Pro',
    Application_software: 'Powerful Admin Theme',
    Sales: '16,300',
    Price: '$53',
  },
  {
    id: 2,
    Application_Name: 'Photoshop',
    Application_software: 'Design Software',
    Sales: '26,421',
    Price: '$35',
  },
  {
    id: 3,
    Application_Name: 'Guruable',
    Application_software: 'Best Admin Template',
    Sales: '8,265',
    Price: '$98',
  },
  {
    id: 4,
    Application_Name: 'Flatable',
    Application_software: 'Admin App',
    Sales: '10,652',
    Price: '$20',
  },
]
