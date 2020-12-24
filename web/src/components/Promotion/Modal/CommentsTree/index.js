import React from 'react';

import { CommentsList,CommentItem, Avatar, CommentInfo } from './styles';

function PromotionModalCommentsTree({ comments }) {

  if(!comments) {
      return <div>Carregando...</div>;
  }  

  return (
      <CommentsList>
          {comments.map((item) => {
             return(
              <CommentItem key={item.id}>
                <Avatar src={item.user.avatarUrl} alt={item.user.name} />
                <CommentInfo>
                  <span>{item.user.name}</span>
                  <p>{item.comment}</p>
                </CommentInfo>
              </CommentItem>
             );
          })}
      </CommentsList>
  );
}

export default PromotionModalCommentsTree;