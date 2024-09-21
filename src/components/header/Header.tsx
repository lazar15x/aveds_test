import { FC } from 'react';
import styles from './styles.module.css';
import logo from '/logo.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../login-modal/AuthContext';

const Header: FC = () => {
  const { user, logout } = useAuth();
  console.log('Current user in header:', user);

  const handleAuthAction = () => {
    if (user) {
      logout();
    }
  };

  return (
    <header>
      <div className={styles.header_container}>
        <nav>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Логотип" />
            </Link>
          </div>

          <div className={styles.right_side}>
            <Link to="/contacts" className={styles.contacts}>
              Контакты
            </Link>
            <button onClick={handleAuthAction} className={styles.login}>
              {user ? 'Выйти' : 'Войти'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
