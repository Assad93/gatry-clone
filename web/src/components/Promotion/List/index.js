import React, {useState} from 'react';
import PromotionCard from 'components/Promotion/Card';
import { Container } from './styles';
import PromotionModal from '../Modal';

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
                    key={promotion.id}
                    promotion={promotion} 
                    onClickComments={ ()=> {
                      setPromotionId(promotion.id)
                    }}
                 />
        })}
        {promotionId && (
            <PromotionModal 
              promotionId={promotionId} 
              onCLickClose={() => { setPromotionId(null) }}
            />
        )}
      </Container>
  );
}

export default PromotionList;