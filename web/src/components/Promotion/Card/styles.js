import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const CardImg = styled.img`
    max-width: 100px;
    margin-right: 20px;
`;

export const CardInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    > h1 {
        font-size: 16px;
        color: #2c3e50;
    }

    > span {
        font-size: 26px;
        font-weight: 700;
        color: #3498DB;
    }

    > footer {
        float: right;
        display: flex;
        align-items: center; 
    }
`;

export const Comments = styled.div`
    color: #95A5A6;
    font-weight: 700;
    max-width: 345px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const CommentCounter = styled.button`
    margin-left: auto;
    margin-right: 20px;
    color: #3498DB;
    background-color: unset;
    border: unset;
    white-space: nowrap;
`;

export const CardLink = styled.a`
    border: 1px solid #3498DB;
    border-radius: 4px;
    color: #3498DB;
    text-decoration: none;
    padding: 8px 10px;
    margin-right: 20px;
    white-space: nowrap;
`;

export const EditLink = styled(Link)`
    border: 1px solid #3498DB;
    border-radius: 4px;
    color: #3498DB;
    text-decoration: none;
    padding: 8px 10px;
    margin-right: 20px;
`;