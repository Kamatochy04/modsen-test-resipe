import styled from 'styled-components';

import styles from '@/constants/styles';

export const SearchResults = styled.div`
    width: 1280px;
    margin: 200px auto;
    font-family: Inter;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 90%;
    }

    @media ${(props) => props.theme.media.tablet} {
        margin: 100px auto;
    }
`;

export const ResultsLabel = styled.h2`
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

export const NextItemsButton = styled.button`
    font-size: 16px;
    font-weight: lighter;
    font-family: Roboto;
    letter-spacing: 0.01em;
    color: ${styles.WHITE};

    background: linear-gradient(272.88deg, #27355a 4.52%, #27355a 93.19%);
    box-shadow: 0px 4px 20px rgba(104, 109, 224, 0.5);
    border-radius: 50px;
    width: 250px;
    height: 50px;

    display: block;
    margin: 40px auto;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const NoRecipesLabel = styled.h1`
    text-align: center;
    margin-top: 50px;
    font-family: Inter;
    font-size: 48px;
    font-weight: normal;
    color: ${styles.HEADER_BLUE};

    @media ${(props) => props.theme.media.phone} {
        font-size: 24px;
    }
`;
