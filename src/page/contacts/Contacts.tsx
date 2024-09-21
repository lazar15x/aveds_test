import { FC } from 'react';
import styles from './styles.module.css';

const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className="container">
        <h1 className="page-title">Контакты</h1>;
      </div>
    </div>
  );
};

export default Contacts;
