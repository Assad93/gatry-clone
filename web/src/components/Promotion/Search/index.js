import React, { useState, useEffect } from 'react';
import useApi from 'components/utils/useApi';
import { Container, HeaderPromo, TitleHeaderPromo, InputSearchPromo } from './styles';
import { Link } from 'react-router-dom';
import PromotionList from '../List';

function PromotionSearch() {
    const [ search, setSearch] = useState('');
    const [load, loadInfo] = useApi({
      url: '/promotions',
      method: 'get',
      params: {
        _embed: 'comments',
        _order: 'desc',
        _sort: 'id',
        title_like: search || undefined
      }
    });
    
    useEffect(() => {
      load();
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

          <PromotionList 
            promotions={loadInfo.data} 
            loading={loadInfo.loading}
            error={loadInfo.error}
          />
        </Container>
    );
}

export default PromotionSearch;