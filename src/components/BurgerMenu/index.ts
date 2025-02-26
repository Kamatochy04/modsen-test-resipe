import styled from 'styled-components';

export const Menu = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    position: fixed;
    width: 100%;
    height: 100vh;
    padding-top: 16px;
    right: calc(-391px);
    bottom: 0;

    border: none;

    background-color: ${({ theme }) => theme.colors.main_color};
    transition:
        right 0.3s,
        box-sadow 0.1s;

    @media ${(props) => props.theme.media.tablet} {
        display: flex;
        right: 0;
        box-shadow: -5px 0px 10px #b2b2b2;
    }
`;
