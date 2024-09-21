import { FC, useState } from 'react';
import styles from './styles.module.css';
import LoginModal from '../../components/login-modal/LoginModal';
import Cards from '../../components/cards/Cards';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.main_screen}>
          <h1 className={styles.title}>
            Место для получения медицинской помощи
          </h1>
          <div className={styles.buttons}>
            <button onClick={handleOpenModal}>Войти</button>
            <Link to="/contacts">Контакты</Link>
          </div>
        </div>

        <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
