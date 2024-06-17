import { Item, products } from "../data/items";
import ItemComponent from "./items/Items";
import styles from "./home.module.scss";

const Home = ({ selectProduct }: { selectProduct: (data: Item) => void }) => {
  const handleClick = (data: Item) => {
    selectProduct(data);
  };
  return (
    <div className={styles.content}>
      {products.map((el, key) => (
        <div onClick={() => handleClick(el)} key={key}>
          <ItemComponent mini={true} data={el} />
        </div>
      ))}
    </div>
  );
};

export default Home;
