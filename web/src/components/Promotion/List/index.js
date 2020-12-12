import React from 'react';
import PromotionCard from 'components/Promotion/Card';
import { Container } from './styles';

function PromotionList({ loading, error,  promotions }) {

  if(error) {
    return <div>Algo de errado não está certo!</div>
  }

  if(loading || !promotions) {
      return <div>Carregando...</div>;
  }

  if(promotions.length === 0) {
    return <div>Nenhum resultado encontrado!</div>;
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