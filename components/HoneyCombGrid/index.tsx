import Image from "next/image"
import styles from "./styles.module.css"
import honeycomb1 from "@/public/imgs/honeycomb-1.jpg"
import honeycomb2 from "@/public/imgs/honeycomb-2.jpg"
import honeycomb3 from "@/public/imgs/honeycomb-3.jpg"
import honeycomb4 from "@/public/imgs/honeycomb-4.jpg"
import honeycomb5 from "@/public/imgs/honeycomb-5.jpg"
import honeycomb6 from "@/public/imgs/honeycomb-6.jpg"

const images = [honeycomb1, honeycomb2, honeycomb3, honeycomb4, honeycomb5, honeycomb6]

const HoneyCombDisplay = () => {
  return (
    <div>
      <ul className={styles.contain}>
        {images.map((image, index) => (
          <li key={index}>
            <Image src={image} alt="Honey comb image"/>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HoneyCombDisplay;
