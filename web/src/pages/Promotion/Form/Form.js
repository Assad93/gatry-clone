import PromotionForm from 'components/Promotion/Form';
import { UIContainer } from 'components/UI/Container/Container';
import React from 'react';
import { useParams } from 'react-router-dom';
// import { Container } from './styles';

function PagesPromotionForm() {
  const { id } = useParams(); //catch the params in url
  return (
      <UIContainer>
          <PromotionForm id={id ? Number.parseInt(id, 10) : null}/>
      </UIContainer>
  );
}

export default PagesPromotionForm;