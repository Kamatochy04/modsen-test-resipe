import { ReactNode } from 'react';
import styled from 'styled-components';

import styles from '@/constants/styles';

const HeaderElement = styled.header`
    font-family: Space_Grotesk;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.main_color};
    box-shadow: 0px 4px 16.1px rgba(0, 0, 0, 0.1);
    z-index: 100;
    height: 150px;
`;

const CenterFrame = styled.div`
    width: 1440px;
    margin: 0 auto;
    min-height: 150px;
    padding: 50px 0;
    box-sizing: border-box;

    @media (max-width: 1460px) {
        width: 100%;
        padding: 50px 20px;
    }
`;

export const HeaderBlock = ({ children }: { children: ReactNode }) => {
    return (
        <HeaderElement>
            <CenterFrame>{children}</CenterFrame>
        </HeaderElement>
    );
};

export const RecipeLogo = styled.img`
    width: 48px;
    margin-right: 15px;
    fill: ${styles.DARK_BLUE};

    @media ${(props) => props.theme.media.mobileS} {
        width: 36px;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 42px;

    @media ${(props) => props.theme.media.tablet} {
        display: none;
    }
`;

export const RecipeHost = styled.h1`
    color: ${styles.WHITE};
    font-size: 24px;

    display: flex;
    align-items: center;
    gap: 24px;

    @media ${(props) => props.theme.media.mobileS} {
        font-size: 20px;
    }
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    z-index: 10;
    @media ${(props) => props.theme.media.tablet} {
        flex-direction: column;
    }
`;

export const LogoButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media ${(props) => props.theme.media.tablet} {
        width: 100%;
    }
`;

export const PageLink = styled.p`
    display: block;
    color: ${styles.WHITE};
    font-size: 24px;
    cursor: pointer;
`;

const MenuButtonContainer = styled.button`
    width: 66px;
    height: 45px;
    position: relative;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: none;

    @media ${(props) => props.theme.media.tablet} {
        display: block;
    }

    @media ${(props) => props.theme.media.mobileS} {
        width: 44px;
        height: 30px;
    }
`;

const MenuButtonLine = styled.div`
    width: 50%;
    background-color: ${styles.WHITE};
    height: 2px;
`;

const UpperLine = styled(MenuButtonLine)<{ $menuOpen: boolean }>`
    position: absolute;
    top: 0;
    left: 0;

    transform: translate(${(props) => (props.$menuOpen ? '29px' : '0')}, 0);
    transition: 0.3s;
`;

const CenterLine = styled(MenuButtonLine)`
    width: 100%;
`;

const BottomLine = styled(MenuButtonLine)<{ $menuOpen: boolean }>`
    position: absolute;
    bottom: 0;
    right: 0;

    transform: translate(${(props) => (props.$menuOpen ? '-29px' : '0')}, 0);
    transition: 0.3s;
`;

export const MenuButton = ({ onClick, menuOpen }: { onClick: () => void; menuOpen: boolean }) => {
    return (
        <MenuButtonContainer onClick={onClick}>
            <UpperLine $menuOpen={menuOpen} />
            <CenterLine />
            <BottomLine $menuOpen={menuOpen} />
        </MenuButtonContainer>
    );
};
