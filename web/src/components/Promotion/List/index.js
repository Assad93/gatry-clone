import React, {useState} from 'react';
import PromotionCard from 'components/Promotion/Card';
import { Container } from './styles';
import UIModal from 'components/UI/Modal/Modal';

function PromotionList({ loading, error,  promotions }) {
  const [promotionId, setPromotionId] = useState(null);

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
          return <PromotionCard 
                    promotion={promotion} 
                    onClickComments={ ()=> {
                      setPromotionId(promotion.id)
                    }}
                 />
        })}
        <UIModal 
          isOpen={Boolean(promotionId)} 
          onCLickClose={() => { setPromotionId(null) }}
        >
          <h1>Comentários</h1>
        </UIModal>
      </Container>
  );
}

export default PromotionList;