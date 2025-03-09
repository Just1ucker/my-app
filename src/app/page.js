"useClient"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const fruits = ["яблоко", "банан", "апельсин"]; // начальный массив

//1) добавить грушу в конец списка и ананас в начало
    fruits.push("груша");
    fruits.unshift("ананас");
    console.log(fruits);

//2) убрать яблоко из массива
    fruits.splice(1, 1);

//3) отсортировать по алфавиту
    fruits.sort();


    const newFruits = [
      {
      name: "яблоко",
      price: "3"
      },
      {
      name: "банан",
      price: "5"
      },
      {
      name: "апельсин",
      price: "10"
      }
      ]; // начальный массив с объектами
      
      //преобразовать данный массив в новый:
      const fruitStrings = newFruits.map(newFruits => `${newFruits.name} стоит ${newFruits.price} грн.`);
      console.log(fruitStrings);

      // const bananaData = newFruits[1];
      // const price = bananaData.price
      // console.log(price);
      // console.log(bananaData);

    return <h1>Hello World!</h1>
}
