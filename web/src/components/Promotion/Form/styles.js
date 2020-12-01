import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    > label {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 500;
        color: #555;
    }

    > input {
        border: 1px solid #AAA;
        border-radius: 8px;
        background-color: #FFF;
        height: 36px;
        padding: 0 10px;
    }
`;
