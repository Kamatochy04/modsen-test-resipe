import { styled } from 'styled-components';

import styles from '@/constants/styles';

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: space-around;

    @media ${(props) => props.theme.media.phone} {
        margin-top: 25px;
    }
`;
export const Wrapper = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 132px;
`;

export const Title = styled.h3`
    position: relative;
    color: #000;
    font-size: 40px;
    font-weight: lighter;
    line-height: 0.75;
    padding: 0 10px;
    margin: 0;

    &:before {
        position: absolute;
        content: '';
        width: 2px;
        height: 100%;
        background-color: ${styles.GOLDEN};
        display: inline-block;
        margin: 0 -10px;
    }

    @media ${(props) => props.theme.media.phone} {
        font-size: 18px;
        line-height: 1;
        padding: 0 20px;

        &:before {
            margin: 0 -10px;
        }
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
