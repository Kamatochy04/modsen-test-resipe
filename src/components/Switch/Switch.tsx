import { FC, useState } from 'react';

import { Slider, SwitchContainer, SwitchInput } from '.';

interface SwitchProps {
    checked?: boolean;
    onClick?: () => void;
}

const Switch: FC<SwitchProps> = ({ checked = false, onClick }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onClick) {
            onClick();
        }
    };

    return (
        <SwitchContainer>
            <SwitchInput type="checkbox" checked={isChecked} onChange={handleToggle} />
            <Slider checked={isChecked} onClick={handleToggle} />
        </SwitchContainer>
    );
};

export default Switch;
