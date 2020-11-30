import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPromo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;  
`;

export const TitleHeaderPromo = styled.h1`
    text-transform: uppercase;
    color: #888;
`;

export const InputSearchPromo = styled.input`
    display: flex;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 20px;
    padding: 0 10px;
    font-size: 16px;
`;