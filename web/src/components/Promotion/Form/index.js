import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, FormGroup } from './styles';

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0
}

function PromotionForm({ id }) {
  const [values, setValues] = useState(id ? null : initialValue); 
  const history = useHistory();

  useEffect(() => {
    if(id) {
        axios.get(`http://localhost:5000/promotions/${id}`)
            .then((response) => {
                setValues(response.data);
            })
    }
  }, []);

  function onChange(ev) {
      const { name, value } = ev.target;

      setValues({...values, [name]: value})
  }

  function onSubmit(ev) {
      ev.preventDefault();
      const method = id ? 'put' : 'post';
      const url = id
        ? `http://localhost:5000/promotions/${id}`
        : 'http://localhost:5000/promotions'

      axios[method](url, values)
        .then((response)=>{
            history.push('/');
        });
  }

  if(!values) {
      return (
        <Container>
            <h1>Promo Show</h1>
            <h2>Nova promoção</h2>
            <span>Carregando...</span>
        </Container>
      );
  }

  return (
    <Container>
      <h1>Promo Show</h1>
      <h2>Nova promoção</h2>

      <form onSubmit={onSubmit}>
          <FormGroup>
              <label htmlFor="title">Título</label>
              <input id="title" name="title" type="text" value={values.title} onChange={onChange} />
          </FormGroup>
          <FormGroup>
              <label htmlFor="url">Link</label>
              <input id="url" name="url" type="text" value={values.url} onChange={onChange} />
          </FormGroup>
          <FormGroup>
              <label htmlFor="imageUrl">Imagem (URL)</label>
              <input id="imageUrl" name="imageUrl" type="text" value={values.imageUrl} onChange={onChange} />
          </FormGroup>
          <FormGroup>
              <label htmlFor="price">Preço</label>
              <input id="price" name="price" type="number" value={values.price} onChange={onChange}/>
          </FormGroup>
          <div>
              <button type="submit">Salvar</button>
          </div>
      </form>
    </Container>
  );
}

export default PromotionForm;