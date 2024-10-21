import { FC } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../components/login-modal/AuthContext';

const Account: FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className={styles.account}>
      <div className="container">
        <h1 className="page-title">Привет, {user?.name}</h1>
        <div className={styles.buttons}>
          <button className="btn btn-fill" onClick={logout}>
            Выйти из аккаунта
          </button>
          <Link className="btn" to="/contacts">
            Перейти в контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
