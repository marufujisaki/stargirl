import { Item } from "../../data/items.ts";
import styles from "./Items.module.scss";

const sizes = ["XS", "S", "M", "L"];

const ItemComponent = ({ mini, data }: { mini: boolean; data: Item }) => {
  return (
    <div className={mini ? styles.mini : styles.normal}>
      <div className={styles.image}>
        <img src={"/public/static/images/" + data.image} />
      </div>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.price}>${data.price} USD</p>
      {!mini && (
        <div className={styles.buttonRow}>
          {sizes.map((s, key) => (
            <button
              key={key}
              disabled={data.sizes.findIndex((el) => el === s) === -1}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemComponent;
