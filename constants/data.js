import images from './images'
import { IoMdCart } from 'react-icons/io'
import { FaGlobeAsia } from 'react-icons/fa'
import { FaUserInjured } from 'react-icons/fa'
import { FaStackExchange } from 'react-icons/fa'
import { PiCardsFill } from 'react-icons/pi'
import { IoMdSettings } from 'react-icons/io'
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { MdLibraryBooks } from 'react-icons/md'
import { FaBell } from 'react-icons/fa6'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCreditCard } from 'react-icons/fa6'
import { HiSquare3Stack3D } from 'react-icons/hi2'
import { BsFillBoxFill } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { IoKeyOutline } from 'react-icons/io5'
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
  { id: 3, text: 'History', icon: images.Livello_1 },
  { id: 4, text: 'Customers', icon: images.Livello_1 },
  { id: 5, text: 'Pages', icon: images.Livello_1 },
  { id: 6, text: 'Blogs', icon: images.Livello_1 },
  { id: 7, text: 'Invoices', icon: images.Livello_1 },
  { id: 8, text: 'Message', icon: images.Livello_1 },
  { id: 9, text: 'Category', icon: images.Livello_1 },
  { id: 10, text: 'Administrator', icon: images.Livello_1 },
  { id: 11, text: 'All Notification', icon: images.Livello_1 },
  { id: 12, text: 'Store', icon: images.Livello_1 },
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

export const SuperAdmin_Cards = [
  {
    id: 1,
    text: "Today's Money",
    price: '$53,000',
    percent: '+55%',
    icon: <FaUserInjured color="#fff" />,
  },
  {
    id: 2,
    text: "Today's Users",
    price: '2,300',
    percent: '+3%',
    icon: <FaGlobeAsia color="#fff" />,
  },
  {
    id: 3,
    text: 'New Clients',
    price: '+3,462',
    percent: '-2%',
    icon: <FaStackExchange color="#fff" />,
  },
  {
    id: 4,
    text: 'Sales',
    price: '$103,430',
    percent: '+5%',
    icon: <IoMdCart color="#fff" />,
  },
]

export const Active_Users = [
  {
    id: 1,
    icon: <PiCardsFill color="#fff" />,
    bgColor: '#a2d061',
    text: 'Users',
    total: '36K',
    input: '60',
  },
  {
    id: 2,
    icon: <BiSolidPlaneAlt color="#fff" />,
    text: 'Clicks',
    total: '2m',
    input: '90',
    bgColor: '#2170fe',
  },
  {
    id: 3,
    icon: <MdLibraryBooks color="#fff" />,
    text: 'Sales',
    total: '435$',
    input: '35',
    bgColor: '#f77037',
  },
  {
    id: 4,
    icon: <IoMdSettings color="#fff" />,
    text: 'Items',
    total: '43',
    input: '50',
    bgColor: '#f43642',
  },
]

export const Latest_Members = [
  {
    id: 1,
    companies: 'Soft UI XD Version',
    members: images.Louis_Lara,
    budget: '$14,000',
    completion: '60',
    bgColor: 'blue',
  },
  {
    id: 2,
    companies: 'Add Progress Track',
    members: images.Louis_Lara,
    budget: '$3,000',
    completion: '10',
    bgColor: 'blue',
  },
  {
    id: 3,
    companies: 'Fix Platform Errors',
    members: images.Louis_Lara,
    budget: 'Not set',
    completion: '100',
    bgColor: 'green',
  },
  {
    id: 4,
    companies: 'Launch our Mobile App',
    members: images.Louis_Lara,
    budget: '$20,500',
    completion: '100',
    bgColor: 'green',
  },
  {
    id: 5,
    companies: 'Add the New Pricing Page',
    members: images.Louis_Lara,
    budget: '$500',
    completion: '25',
    bgColor: 'blue',
  },
  {
    id: 6,
    companies: 'Redesign New Online Shop',
    members: images.Louis_Lara,
    budget: '$2000',
    completion: '40',
    bgColor: 'blue',
  },
]

export const Orders_Preview = [
  {
    id: 1,
    icon: <FaBell color="#66c92d" />,
    text: '$2400, Design changes',
    time: '22 DEC 7:20 PM',
  },
  {
    id: 2,
    icon: <FaHtml5 color="#eb394e" />,
    text: 'New Order #1832412',
    time: '22 DEC 7:20 PM',
  },
  {
    id: 3,
    icon: <IoMdCart color="#219cfe" />,
    text: 'Server payments for April',
    time: '22 DEC 7:20 PM',
  },
  {
    id: 4,
    icon: <FaCreditCard color="#f77636" />,
    text: 'New card added for order #4395133',
    time: '22 DEC 7:20 PM',
  },
  {
    id: 5,
    icon: <HiSquare3Stack3D color="#dfdfe3" />,
    text: 'Unlock packages for development',
    time: '22 DEC 7:20 PM',
  },
  {
    id: 6,
    icon: <HiSquare3Stack3D color="#dfdfe3" />,
    text: 'New order #9583120',
    time: '22 DEC 7:20 PM',
  },
]

export const SuperAdmin_data = [
  {
    id: 1,
    icon: <BsFillBoxFill color="#a2d061" fontSize={30} />,
    number: '2,500',
    text: 'Products',
  },
  {
    id: 2,
    icon: <IoMdCart color="#a2d061" fontSize={30} />,
    number: '8,700',
    text: 'Orders',
  },
  {
    id: 3,
    icon: <CiUser color="#a2d061" fontSize={30} />,
    number: '865',
    text: 'Customers',
  },
  {
    id: 4,
    icon: <IoKeyOutline color="#a2d061" fontSize={30} />,
    number: '42,500',
    text: 'Sales',
  },
]

export const New_Customers = [
  { id: 1, name: 'Alex Thompson LLC.', time: '5 mins ago' },
  { id: 2, name: 'DOP Pvt Ltd.', time: '15 mins ago' },
  { id: 3, name: 'HP Accessories', time: '20 mins ago' },
  { id: 4, name: 'Excel', time: '1 hour ago' },
  { id: 5, name: 'Raymonds', time: '1 hour ago' },
  { id: 6, name: 'Dell Enterprises Pvt Ltd.', time: '1 hour ago' },
  { id: 7, name: 'Nestle', time: '1 hour ago' },
  { id: 8, name: 'Roger Binny', time: '1 hour ago' },
  { id: 9, name: 'Raymonds', time: '1 hour ago' },
  { id: 10, name: 'Dell Enterprises Pvt Ltd.', time: '1 hour ago' },
  { id: 11, name: 'Nestle', time: '1 hour ago' },
  { id: 12, name: 'Roger Binny', time: '1 hour ago' },
  { id: 13, name: 'Roger Binny', time: '1 hour ago' },
]

export const Customer_Data = [
  {
    id: 1,
    name: 'Tovino Thomas',
    phone: '219-122-1234',
    email: 'tovino@mail.com',
    country: 'USA',
    city: 'NewYork',
  },
  {
    id: 2,
    name: 'Christopher Alex',
    phone: '419-122-1734',
    email: 'christpher@mail.com',
    country: 'CA',
    city: 'Toronto',
  },
  {
    id: 3,
    name: 'Jhon Doe',
    phone: '129-122-1734',
    email: 'doe@mail.com',
    country: 'USA',
    city: 'Washington DC',
  },
  {
    id: 4,
    name: 'Brendon Morris',
    phone: '129-122-1734',
    email: 'christpher@mail.com',
    country: 'USA',
    city: 'New York',
  },
  {
    id: 5,
    name: 'Alex Christopher',
    phone: '129-122-1734',
    email: 'tovino@mail.com',
    country: 'CA',
    city: 'Surrey',
  },
  {
    id: 6,
    name: 'Tovino Thomas',
    phone: '129-122-1734',
    email: 'tovino@mail.com',
    country: 'USA',
    city: 'NewYork',
  },
  {
    id: 7,
    name: 'Christopher Alex',
    phone: '419-122-1734',
    email: 'christpher@mail.com',
    country: 'CA',
    city: 'Toronto',
  },
  {
    id: 8,
    name: 'John Doe',
    phone: '129-122-1734',
    email: 'doe@mail.com',
    country: 'USA',
    city: 'Washington DC',
  },
  {
    id: 9,
    name: 'Brendon Morris',
    phone: '129-122-1734',
    email: 'christpher@mail.com',
    country: 'USA',
    city: 'New York',
  },
  {
    id: 10,
    name: 'Alex Christopher',
    phone: '129-122-1734',
    email: 'tovino@mail.com',
    country: 'CA',
    city: 'Surrey',
  },
  {
    id: 11,
    name: 'John Doe',
    phone: '129-122-1734',
    email: 'doe@mail.com',
    country: 'USA',
    city: 'Washington DC',
  },
  {
    id: 12,
    name: 'Brendon Morris',
    phone: '129-122-1734',
    email: 'christpher@mail.com',
    country: 'USA',
    city: 'New York',
  },
  {
    id: 13,
    name: 'Alex Christopher',
    phone: '129-122-1734',
    email: 'tovino@mail.com',
    country: 'CA',
    city: 'Surrey',
  },
]

export const Invoice_Data = [
  {
    id: 1,
    invoice: '#Inv001',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Draft',
  },
  {
    id: 2,
    invoice: '#Inv002',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Draft',
  },
  {
    id: 3,
    invoice: '#Inv003',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Draft',
  },
  {
    id: 4,
    invoice: '#Inv004',
    customer: 'Alex',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Draft',
  },
  {
    id: 5,
    invoice: '#Inv005',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Draft',
  },
  {
    id: 6,
    invoice: '#Inv006',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 11, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Draft',
  },
  {
    id: 7,
    invoice: '#Inv007',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 10, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Paid',
  },
  {
    id: 8,
    invoice: '#Inv008',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 9, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Paid',
  },
  {
    id: 9,
    invoice: '#Inv009',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 8, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Paid',
  },
  {
    id: 10,
    invoice: '#Inv0010',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 7, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Paid',
  },
  {
    id: 11,
    invoice: '#Inv0011',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Paid',
  },
  {
    id: 12,
    invoice: '#Inv0012',
    customer: 'Alex',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Declined',
  },
  {
    id: 13,
    invoice: '#Inv0013',
    customer: 'John Doe',
    category: 'Sale',
    issue_Date: 'Feb 12, 2024',
    due_Date: 'April 12, 2024',
    amount: '12300',
    status: 'Declined',
  },
]

export const Store_Detail_Data = [
  { id: 1, text: 'Products I buy or make myself' },
  { id: 2, text: 'Digital products' },
  { id: 3, text: 'Dropshipping products' },
  { id: 4, text: 'Print-on-demand products' },
  { id: 5, text: "I 'll decide later" },
  { id: 6, text: "I 'll decide later" },
]
