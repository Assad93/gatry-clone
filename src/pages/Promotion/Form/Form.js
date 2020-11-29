import React from 'react';
import { useParams } from 'react-router-dom';
// import { Container } from './styles';

function PagesPromotionForm() {
  const { id } = useParams(); //catch the params in url
  return (
      <div>
          Form
          {id && (<div>id: {id}</div>)}
      </div>
  );
}

export default PagesPromotionForm;