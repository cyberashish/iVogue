export const PHONE_BRAND = [
  {
    key: "brand1",
    brand: "Apple",
    model: [
      {key:'Apple1', badge: true, modelName: "iphone 15",href:"category/mobile-covers", brand: "Apple", },
      {key:'Apple2', badge: true, modelName: "iphone 15 Pro Max",href:"category/mobile-covers", brand: "Apple", },
      {key:'Apple3', badge: true, modelName: "iphone 15 Pro",href:"category/mobile-covers", brand: "Apple", },
      {key:'Apple4', badge: false, modelName: "iphone 14",href:"category/mobile-covers", brand: "Apple", },
      {key:'Apple5', badge: false, modelName: "iphone 14 Pro Max",href:"category/mobile-covers", brand: "Apple", },
    ],
  },
  { key: "brand2", brand: "Samsung", model: [
    {key:'Samsung1', badge: true, modelName: "Galaxy S24 Ultra",href:"category/mobile-covers",brand: "Samsung" },
    {key:'Samsung2', badge: true, modelName: "Galaxy A52S",href:"category/mobile-covers",brand: "Samsung" },
    {key:'Samsung3', badge: true, modelName: "Galaxy S24 Plus",href:"category/mobile-covers",brand: "Samsung" },
    {key:'Samsung4', badge: false, modelName: "Galaxy S24",href:"category/mobile-covers",brand: "Samsung" },
    {key:'Samsung5', badge: false, modelName: "Galaxy S23 FE",href:"category/mobile-covers",brand: "Samsung" },
    {key:'Samsung6', badge: false, modelName: "Galaxy A54",href:"category/mobile-covers",brand: "Samsung" },
  ] },
  { key: "brand3", brand: "OnePlus", model: [
    {key:'OnePlus1', badge: true, modelName: "Oneplus 11 5G",href:"category/mobile-covers",brand: "OnePlus" },
    {key:'OnePlus2', badge: true, modelName: "Oneplus Nord 3",href:"category/mobile-covers",brand: "OnePlus" },
    {key:'OnePlus3', badge: true, modelName: "OnePlus 11R",href:"category/mobile-covers",brand: "OnePlus" },
    {key:'OnePlus4', badge: false, modelName: "OnePlus Ace Racing",href:"category/mobile-covers",brand: "OnePlus" },
    {key:'OnePlus5', badge: false, modelName: "Oneplus 10T",href:"category/mobile-covers",brand: "OnePlus" },
    {key:'OnePlus6', badge: false, modelName: "Oneplus 10R",href:"category/mobile-covers",brand: "OnePlus" },
  ] },
  { key: "brand4", brand: "Google", model: [
    {key:'Google1', badge: true, modelName: "Google Pixel 7 Pro",href:"category/mobile-covers",brand: "Google" },
    {key:'Google2', badge: true, modelName: "Google Pixel 7",href:"category/mobile-covers",brand: "Google" },
  ] },
  { key: "brand5", brand: "Nothing", model: [
    {key:'Nothing1', badge: true, modelName: "Nothing Phone (2a)",href:"category/mobile-covers",brand: "Nothing" },
    {key:'Nothing2', badge: true, modelName: "Nothing Phone (2)",href:"category/mobile-covers",brand: "Nothing" },
    {key:'Nothing3', badge: true, modelName: "Nothing Phone (1)",href:"category/mobile-covers",brand: "Nothing" },
  ] },
  { key: "brand6", brand: "Xiaomi", model: [
    {key:'Xiaomi1', badge: true, modelName: "Xiaomi 13 Pro",href:"category/mobile-covers",brand: "Xiaomi" },
    {key:'Xiaomi2', badge: true, modelName: "Xiaomi 11T",href:"category/mobile-covers",brand: "Xiaomi" },
    {key:'Xiaomi3', badge: true, modelName: "Xiaomi 12 Pro",href:"category/mobile-covers",brand: "Xiaomi" },
    {key:'Xiaomi4', badge: false, modelName: "Xiaomi Mi 11 Ultra",href:"category/mobile-covers",brand: "Xiaomi" },
    {key:'Xiaomi5', badge: false, modelName: "Xiaomi Mi 10T",href:"category/mobile-covers",brand: "Xiaomi" },
  ] },
  { key: "brand7", brand: "Oppo", model: [
    {key:'Oppo1', badge: true, modelName: "Oppo F19 Pro Plus",href:"category/mobile-covers",brand: "Oppo" },
    {key:'Oppo2', badge: true, modelName: "Oppo F21 Pro",href:"category/mobile-covers",brand: "Oppo" },
    {key:'Oppo3', badge: true, modelName: "Oppo F11 Pro",href:"category/mobile-covers",brand: "Oppo" },
  ] },
  { key: "brand8", brand: "Vivo", model: [
    {key:'Vivo1', badge: true, modelName: "Vivo X80",href:"category/mobile-covers",brand: "Vivo" },
    {key:'Vivo2', badge: true, modelName: "Vivo V25",href:"category/mobile-covers",brand: "Vivo" },
    {key:'Vivo3', badge: true, modelName: "Vivo V23",href:"category/mobile-covers",brand: "Vivo" },
    {key:'Vivo4', badge: false, modelName: "Vivo X60 Pro",href:"category/mobile-covers",brand: "Vivo" },
    {key:'Vivo5', badge: false, modelName: "Vivo X60",href:"category/mobile-covers",brand: "Vivo" },
  ] },
];

import collectionImg1 from "/public/images/Products/Phone_Cases/Filter_Collection/common-ground.webp"
import collectionImg2 from "/public/images/Products/Phone_Cases/Filter_Collection/celestial-chaos.webp"
import collectionImg3 from "/public/images/Products/Phone_Cases/Filter_Collection/Sticker.webp"
import collectionImg4 from "/public/images/Products/Phone_Cases/Filter_Collection/Floral.webp"
import collectionImg5 from "/public/images/Products/Phone_Cases/Filter_Collection/city-tag.webp"
import collectionImg6 from "/public/images/Products/Phone_Cases/Filter_Collection/k3-klutch-kick-komic-collection.webp"
import collectionImg7 from "/public/images/Products/Phone_Cases/Filter_Collection/abstract-art-collection-icon.webp"
import collectionImg8 from "/public/images/Products/Phone_Cases/Filter_Collection/retro-play-collection.webp"
import collectionImg9 from "/public/images/Products/Phone_Cases/Filter_Collection/orb-portal-collection-icon-desktop.webp"


export const FILTER_COLLECTION = [
  {key:'collection1',title:"Common Ground",img:collectionImg1},
  {key:'collection2',title:"Celestial Chaos",img:collectionImg2},
  {key:'collection3',title:"Sticker",img:collectionImg3},
  {key:'collection4',title:"Floral Collection",img:collectionImg4},
  {key:'collection5',title:"City Tags",img:collectionImg5},
  {key:'collection6',title:"K3",img:collectionImg6},
  {key:'collection7',title:"Abstract Art",img:collectionImg7},
  {key:'collection8',title:"Retro Play",img:collectionImg8},
  {key:'collection9',title:"orb Portal",img:collectionImg9},
]
export const FILTER_COLOR = [
  {key:'color1',colorCode:"black",colorName:"Black"},
  {key:'color2',colorCode:"info",colorName:"Blue"},
  {key:'color3',colorCode:"success",colorName:"Green"},
  {key:'color4',colorCode:"warning",colorName:"Yellow"},
  {key:'color5',colorCode:"danger",colorName:"Red"},
]

export const FILTER_OPTIONS = [
  {key:"filterType1",title:"Newest"},
  {key:"filterType2",title:"Popularity"},
  {key:"filterType3",title:"Clearance"},
  {key:"filterType4",title:"Price: Low to High"},
  {key:"filterType5",title:"Price: High to Low"},
]