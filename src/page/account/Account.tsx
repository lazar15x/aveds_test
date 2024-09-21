import { FC, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/login-modal/AuthContext';

const Account: FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    } else if (!loading) {
      setLoading(false);
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return;
  }

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
