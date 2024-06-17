import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.scss";

const Header = ({
  home,
  sendData,
}: {
  home: boolean;
  sendData: (data: boolean) => void;
}) => {
  const handleClick = () => {
    sendData(!home);
  };
  return (
    <>
      {!home && (
        <FontAwesomeIcon
          className={styles.back}
          icon={faArrowLeft}
          onClick={handleClick}
        />
      )}

      <div className={styles.title}>
        <h1>STARGIRL</h1>
      </div>
    </>
  );
};

export default Header;
