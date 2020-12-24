import styled from 'styled-components';

export const CommentsList = styled.ul`
  list-style: none;
  font-size: 14px;
  padding-left: 0px;
`;

export const CommentItem = styled.li`
  display: flex;
`;

export const Avatar = styled.img`
    width: 49px;
    height: 49px;
    margin-right: 15px;
`;

export const CommentInfo = styled.div`
  
  > span {
    font-weight: 600;
  }
  
  > p {
    margin-top: 5px;
  }
`;