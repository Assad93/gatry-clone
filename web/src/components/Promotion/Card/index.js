import React from 'react';

import { Container, CardImg, CardInfo, CardComment, CommentCounter, CardLink } from './styles';

function PromotionCard({ promotion }) {
  return (
      <Container>
          <CardImg src={promotion.imageUrl} alt={promotion.title}/>
          <CardInfo>
            <h1>{promotion.title}</h1>
            <span>{promotion.price}</span>
            <footer>
              {promotion.comments.length > 0 && (
                <CardComment>{promotion.comments[0].comment}</CardComment>
              )}

              <CommentCounter>
                {promotion.comments.length}{' '}
                {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
              </CommentCounter>
              <CardLink href={promotion.url} target="_blank" >Ir para o site</CardLink>
            </footer>
          </CardInfo>
      </Container>
  );
}

export default PromotionCard;