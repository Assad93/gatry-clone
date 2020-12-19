import React from 'react';
import { 
  Container, 
  CardImg, 
  CardInfo, 
  Comments, 
  CommentCounter, 
  CardLink, 
  EditLink 
} 
from './styles';

function PromotionCard({ promotion, onClickComments }) {
  return (
      <Container>
          <CardImg src={promotion.imageUrl} alt={promotion.title}/>
          <CardInfo>
            <h1>{promotion.title}</h1>
            <span>{promotion.price}</span>
            <footer>
                {promotion.comments.length > 0 && (
                  <Comments>{promotion.comments[0].comment}</Comments>
                )}
                <CommentCounter onClick={onClickComments}>
                  {promotion.comments.length}{' '}
                  {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
                </CommentCounter>
                <CardLink href={promotion.url} target="_blank" >Ir para o site</CardLink>
                <EditLink to={`/edit/${promotion.id}`}>Editar</EditLink>
            </footer>
          </CardInfo>
      </Container>
  );
}

export default PromotionCard;