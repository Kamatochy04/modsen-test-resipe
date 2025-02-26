import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageLink } from '../Header';
import Switch from '../Switch/Switch';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { Menu } from '.';

type BurgerMenuProps = {
    isOpen: boolean;
    clouseMenu: () => void;
};

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, clouseMenu }) => {
    const { toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    return isOpen ? (
        <Menu>
            <PageLink
                onClick={() => {
                    navigate('/');
                }}
            >
                Home
            </PageLink>
            <PageLink
                onClick={() => {
                    navigate('/cooked');
                    clouseMenu();
                }}
            >
                Cooked
            </PageLink>
            <Switch onClick={toggleTheme} />
        </Menu>
    ) : null;
};

export default BurgerMenu;
