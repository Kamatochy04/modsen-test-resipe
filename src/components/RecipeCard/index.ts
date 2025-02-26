import styled from 'styled-components';

import ImageLoader from '@/components/ImageLoader/ImageLoader';
import styles from '@/constants/styles';

export const ItemFooter = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    padding: 15px;
    bottom: 0;
    right: 15px;
    width: 100%;
`;

export const ItemImage = styled(ImageLoader)`
    width: 100%;
    height: 318px;
`;

export const ItemLabel = styled.h3`
    padding: 20px 10px 50px;
    color: ${({ theme }) => theme.colors.main_color};
    font-weight: bolder;
    font-size: 22px;
    text-align: center;
`;

export const ListItem = styled.div`
    width: 292px;
    background-color: ${styles.GRAY};
    border-radius: 28px;
    overflow: hidden;
    margin-bottom: 30px;
    cursor: pointer;
    position: relative;

    @media (max-width: 450px) {
        width: 95%;
    }
`;
