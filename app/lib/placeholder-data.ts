const users = [
  {
    id: "bb9f8a10-8724-4b44-a0c4-fb4ee882d9d1",
    name: "Count Vladislaus", 
    username: "admin123",
    password: "12345",
    role: "admin",
  },
  {
    id: "a5d6a8d1-39e7-4f4e-bf4a-9cb9a781730a",
    name: "Witch Morgana",
    username: "darkwitch",
    password: "hex666",
    role: "admin",
  },
  {
    id: "ae7438c9-3653-4bb5-82e1-c6aa563e1c3e",
    name: "Phantom Grim",
    username: "shadowlord",
    password: "ghost999",
    role: "admin",
  },
];

const customers = [
  {
    id: "d7c1e2d4-0c9a-423a-a3c7-c64d1e5c471f",
    name: "Vlad Dracul",
    email: "user123",
    password: "12345",
    role: "customer",
  },
  {
    id: "2199f310-3061-44a0-8f3e-403370177937",
    name: "Morgana LeFay",
    email: "morlefay01@gmail.com",
    password: "darkmagic2023",
    role: "customer",
  },
  {
    id: "ff17e017-155b-4764-820b-bf83ea5a3df7",
    name: "Grim Reaper",
    email: "grimrside@gmail.com",
    password: "death666",
    role: "customer",
  },
  {
    id: "9bc24a7c-2028-47e4-a1b8-2f3d3b7b7cde",
    name: "Lilith Nightshade",
    email: "lilithana@gmail.com",
    password: "shadow999",
    role: "customer",
  },
  {
    id: "ca77cd7a-6f42-4f2c-9f01-3dba7e8ff0a3",
    name: "Banshee Wail",
    email: "wailananana@gmail.com",
    password: "scream1010",
    role: "customer",
  },
  {
    id: "edf0e13a-0b38-4bc6-a84c-7dbb0c9f5e9d",
    name: "Nosferatu Zodd",
    email: "nosferatu.zodd@gmail.com",
    password: "bloodthirst321",
    role: "customer",
  },
  {
    id: "7c0d61dc-12b0-42ef-9c83-27bd58d47699",
    name: "Raven Hex",
    email: "raven.hex@gmail.com",
    password: "curse777",
    role: "customer",
  },
  {
    id: "7a3e4e38-17b3-4f50-9df0-9e7493a07b3c",
    name: "Draven Gloom",
    email: "draven.glom@gmail.com",
    password: "darkness456",
    role: "customer",
  },
  {
    id: "a23d8591-296e-40b0-a65d-e9c403014d2f",
    name: "Selene Wraith",
    email: "selene.wraith@gmail.com",
    password: "ghostly123",
    role: "customer",
  },
  {
    id: "dbc17449-34eb-4023-98f4-3a6150ec9f58",
    name: "Zephyr Ghoul",
    email: "zephyr.ghoul@gmail.com",
    password: "haunt555",
    role: "customer",
  },
];

const products = [
  {
    id: "d3f1b270-fb90-48aa-9312-2d93f4c7e496",
    name: "Spiderweb Quesadilla",
    price: 50000,
    image: "/spider.jpg",
    description:
      "Quesadilla hitam dengan keju meleleh yang membentuk jaring laba-laba. Hati-hati, jangan sampai laba-laba keluar dari dalamnya!",
    category: {
      id: 120,
      name: "food",
    },
  },
  {
    id: "3e96e4f5-38d4-4f42-b06f-712b39cb2d42",
    name: "Bloody Eyeball Bites",
    price: 30000,
    image: "/eyeball.jpg",
    description:
      "Gigitan bola daging dengan bola mata zaitun hitam, mengeluarkan darah setiap gigitan. Siap-siap terkejut!",
    category: {
      id: 120,
      name: "food",
    },
  },
  {
    id: "33a85ce1-9fd4-4e0b-8f8b-2d71c78b3ab1",
    name: "Spooky Ghost Pizza",
    price: 75000,
    image: "/pizza.jpg",
    description:
      "Pizza dengan keju mozzarella berbentuk hantu yang melayang. Rasakan sensasi dingin di tenggorokan seperti roh yang menuntut balas!",
    category: {
      id: 120,
      name: "food",
    },
  },
  {
    id: "62f07602-f0e4-4fe1-94a2-1b680db6cba3",
    name: "Witch’s Fingers",
    price: 20000,
    image: "/fingers.jpg",
    description:
      "Telur setan disulap jadi tatapan horor—mata berdarah yang siap memeriahkan pesta Halloween-mu!",
    category: {
      id: 120,
      name: "food",
    },
  },
  {
    id: "beaf9f23-b2be-4f88-88ff-5e9bc9c4be0e",
    name: "Buried Alive Bites",
    price: 25000,
    image: "/makanan.jpg",
    description:
      "Kue cokelat yang tampak terkubur di dalam tanah, dengan lapisan brownie yang lembut dan cacing gummy yang menjulur keluar dari dalamnya. Jangan takut, itu hanya rasa manis!",
    category: {
      id: 120,
      name: "food",
    },
  },
  {
    id: "091af16f-92df-44a2-92cb-93c949d79608",
    name: "Bloody Vision",
    price: 30000,
    image: "/minuman.jpg",
    description:
      "Koktail merah menyala berisi 'bola mata' buah dan jelly—minuman segar yang tampak mengerikan tapi nikmat!",
    category: {
      id: 121,
      name: "drink",
    },
  },
  {
    id: "6103deac-3a0e-4629-803e-8cce30b4a05c",
    name: "Bloody Elixir",
    price: 30000,
    image: "/elixir.jpg",
    description:
      "Ramuan merah pekat yang menggoda, terbuat dari jus delima yang memiliki kekuatan gelap. Hati-hati, sekali menyesap, kamu takkan bisa berhenti!",
    category: {
      id: 121,
      name: "drink",
    },
  },
  {
    id: "3626c1ff-d469-4f3a-b6a9-0ad15d1a1659",
    name: "Graveyard Pudding",
    price: 25000,
    image: "/puding.jpg",
    description:
      "Puding gelap dengan rasa mencekam, siap membawa Anda ke dunia yang tak terlihat",
    category: {
      id: 121,
      name: "drink",
    },
  },
  {
    id: "2d114fb1-4e45-4c1e-83de-84232f67aef1",
    name: "Haunted Ghost Shake",
    price: 28000,
    image: "/ghost.jpg",
    description:
      "Minuman es krim yang membawa sensasi arwah gentayangan, menambah misteri di setiap tegukan. Hati-Hati kamu bisa didatangi oleh arwah gentayangan!",
    category: {
      id: 121,
      name: "drink",
    },
  },
  {
    id: "f99d46bc-6e76-4211-9db6-98d992ab7897",
    name: "Vampire Blood Bags",
    price: 40000,
    image: "/vampire.jpg",
    description:
      "Minuman darah vampir yang penuh misteri, menggetarkan dalam setiap tetesnya. Berani coba?",
    category: {
      id: 121,
      name: "drink",
    },
  },
];


export { users, customers, products };