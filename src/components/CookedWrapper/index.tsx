import styled from 'styled-components';

export const Title = styled.h3`
    position: relative;
    display: flex;
    align-items: center;
    gap: 17px;
    min-height: 44px;

    &::before {
        content: '';
        width: 5px;
        background-color: #efc81a;
        height: 100%;
        position: absolute;
        left: -17px;
    }
`;

export const Container = styled.div``;

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    align-content: stretch;
    gap: 42px;
`;

export const Typography = styled.p`
    font-weight: 400;
    font-size: 40px;
    color: #000;
`;
