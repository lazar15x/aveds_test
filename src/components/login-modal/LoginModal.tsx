import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { useAuth } from './AuthContext';
interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

interface ICredentials {
  login: string;
  password: string;
}

const LoginModal: FC<IProps> = ({ onClose, isOpen }) => {
  const { login } = useAuth();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [credentials, setCredentials] = useState<ICredentials>({
    login: '',
    password: '',
  });

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
      setCredentials({
        login: '',
        password: '',
      });
    }
  }, [isOpen]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currInput = event.target.name;
    setCredentials({ ...credentials, [currInput]: event.target.value });
  };

  const handleLogin = (event: React.MouseEvent) => {
    event.preventDefault();
    login(credentials);
  };

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}>
      <dialog className={styles.modal} ref={dialogRef}>
        <button className={styles.close} onClick={onClose}>
          Закрыть
        </button>
        <h2>Вход</h2>
        <form className={styles.modal_form}>
          <div className={styles.input_wrapper}>
            <label htmlFor="login">Логин</label>
            <input
              autoFocus
              onChange={e => handleInput(e)}
              type="text"
              required
              min={6}
              max={32}
              value={credentials.login}
              name="login"
              id="login"
            />
          </div>

          <div className={styles.input_wrapper}>
            <label htmlFor="password">Пароль</label>
            <input
              onChange={e => handleInput(e)}
              type="password"
              name="password"
              id="password"
              required
              min={6}
              max={32}
              value={credentials.password}
            />
          </div>
          <button
            onClick={event => handleLogin(event)}
            className={styles.login_btn}>
            Войти
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;
