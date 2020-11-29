import PromotionCard from 'components/Promotion/Card';
import { Container } from './styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PagesPromotionSearch() {
    const [ promotions, setPromotions] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
          .then((response) => {
            setPromotions(response.data);
          });
    }, []);

    return (
        <Container>
          {promotions.map(promotion => {
            return <PromotionCard promotion={promotion} />
          })}
        </Container> 
    )
}

export default PagesPromotionSearch;