import React from 'react';

// Components
import Title from './Title';
import Stars from '../../../../components/Stars';
import Description from './Description';
import Price from './Price';
import Buttons from './Buttons';
import FavoriteIcon from './FavoriteIcon';
import DividingLine from '../../../../components/DividingLine';

// Styles
import { Container } from './styles';

export default function Details({ title, price, description }) {
  return (
    <Container className="product_info">
      <Title title={title} />
      <FavoriteIcon />
      <Stars />
      <Description description={description} />

      <DividingLine margin="var(--m_md)" />

      <div className="price_and_btn_wrapper">
        <Price price={price} />
        <Buttons />
      </div>
    </Container>
  );
}
