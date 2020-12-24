import React, {useEffect, useState} from 'react';
import UIModal from 'components/UI/Modal/Modal';
import useApi from 'components/utils/useApi';
import CommentsTree from './CommentsTree';
import { CommentForm, CommentBox } from './styles';

function PromotionModal({promotionId, onCLickClose}) {
  const [comment, setComment] = useState('');

  const [load, loadInfo] = useApi({
    url: '/comments',
    params: {
      promotionId,
      _expand: 'user'
    }
  })  

  const [sendComment, sendCommentInfo] = useApi({
    url: '/comments',
    method: 'POST'
  })

  useEffect(()=>{
      load();
  },[])

  async function onSubmit(ev) {
    ev.preventDefault();
    try {
      await sendComment({
        data: {
          userId: 1,
          promotionId,
          comment
        }
      });
      setComment('');
      load('');
    } catch (error) {
      
    }
  }

  return (
    <UIModal 
      isOpen 
      onCLickClose={onCLickClose}
    >
    <CommentForm onSubmit={onSubmit}>
      <CommentBox 
        placeholder='Comentar...' 
        onChange={(ev) => {setComment(ev.target.value)}} 
        value={comment}
      />
      <button type="submit" disabled={sendCommentInfo.loading}>
        {sendCommentInfo.loading ? 'Enviando...' : 'Enviar'}
      </button>
    </CommentForm>  
    <CommentsTree comments={loadInfo.data} />
  </UIModal>
  );
}

export default PromotionModal;