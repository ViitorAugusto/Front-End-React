import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 768px) {
        align-items: center;
        margin-bottom: 50px;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;


    @media (max-width: 768px) {
        justify-content: center;
        margin: 0 20px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    width: 430px;
    
`;