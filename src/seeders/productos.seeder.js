import db from "../config/firebase.js";

import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

const productsSeeders = [
  {
    name: "Anillo clásico de plata 925",
    description: "Anillo de plata 925 con diseño clásico y elegante.",
    price: 12.99,
    stock: 40,
  },
  {
    name: "Anillo corazón",
    description: "Anillo con forma de corazón, ideal para regalar.",
    price: 15.99,
    stock: 25,
  },
  {
    name: "Anillo minimalista",
    description: "Diseño delgado y moderno, perfecto para uso diario.",
    price: 18.99,
    stock: 30,
  },
  {
    name: "Anillo piedra turquesa",
    description: "Anillo con piedra turquesa incrustada.",
    price: 25.99,
    stock: 20,
  },
  {
    name: "Anillo sirconita",
    description: "Anillo con piedra sirconita, ideal para regalar.",
    price: 34.5,
    stock: 30,
  },
];

const createProducts = () => {
  productsSeeders.forEach(async (product) => {
    await addDoc(productsCollection, product);
  });
};

createProducts();