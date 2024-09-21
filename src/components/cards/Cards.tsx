import { FC } from 'react';
import styles from './styles.module.css';
import table from '/table.svg';
import heart from '/heart.svg';
import heads from '/heads.svg';

const cardInfo = [
  {
    id: 1,
    img: {
      picture: heart,
      alt: 'Картинка с пульсирующим сердечком',
    },
    title: 'Онлайн-прием',
    description: 'Рыба текст',
  },
  {
    id: 2,
    img: {
      picture: heads,
      alt: 'Картинка с тетоскопом',
    },
    title: 'Экстренный Случай',
    description: 'Рыба текст',
  },
  {
    id: 3,
    img: {
      picture: table,
      alt: 'Картинка доски',
    },
    title: 'Лечение рака',
    description: 'Рыба текст',
  },
];

const Cards: FC = () => {
  return (
    <div className={styles.cards}>
      {cardInfo.map(card => (
        <div className={styles.card} key={card.id}>
          <div className={styles.card_icon}>
            <img src={card.img.picture} alt={card.img.alt} />
          </div>
          <div className={styles.card_title}>{card.title}</div>
          <div className={styles.card_description}>{card.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
