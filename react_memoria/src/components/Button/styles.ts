import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    background-color: #1550ff;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s ease;
    display: flex;
   
    &:hover {
        opacity: 0.8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 15px;
`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 20px;
`;