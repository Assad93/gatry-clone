import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, HeaderPromo, TitleHeaderPromo, InputSearchPromo } from './styles';
import { Link } from 'react-router-dom';
import PromotionList from '../List';

function PromotionSearch() {
    const [ promotions, setPromotions] = useState([]);
    const [ search, setSearch] = useState('');
    
    useEffect(() => {
      const params = {};
    
      if(search) {
        params.title_like = search;
      }

      axios.get('http://localhost:5000/promotions?_embed=comments', { params })
          .then((response) => {
            setPromotions(response.data);
          });
    }, [search]);
    
    return (
        <Container>
          <HeaderPromo>
              <TitleHeaderPromo>Promo Show</TitleHeaderPromo>
              <Link to="/create">Nova Promoção</Link>              
          </HeaderPromo>

          <InputSearchPromo 
            type="search" 
            placeholder="Buscar"
            value={search}  
            onChange={(ev) => { setSearch(ev.target.value) }}
          />

          <PromotionList promotions={promotions} loading={!promotions.length}/>
        </Container>
    );
}

export default PromotionSearch;