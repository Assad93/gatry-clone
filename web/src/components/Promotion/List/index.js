import React from 'react';
import PromotionCard from 'components/Promotion/Card';
import { Container } from './styles';

function PromotionList({ loading, promotions }) {
  if(loading) {
      return <div>Carregando...</div>
  }
  return (
      <Container>
        {promotions.map(promotion => {
          return <PromotionCard promotion={promotion} />
        })}
      </Container>
  );
}

export default PromotionList;