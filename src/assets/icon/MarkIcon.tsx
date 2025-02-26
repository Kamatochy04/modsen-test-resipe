import { FC } from 'react';

type MarkIconProps = {
    onClick?: (e: React.MouseEvent) => void;
};

export const MarkIcon: FC<MarkIconProps> = ({ onClick }) => {
    return (
        <svg
            onClick={onClick}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.7375 7.475L10.5 15.7125L6.0125 11.2375L4.25 13L10.5 19.25L20.5 9.25L18.7375 7.475ZM13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM13 23C7.475 23 3 18.525 3 13C3 7.475 7.475 3 13 3C18.525 3 23 7.475 23 13C23 18.525 18.525 23 13 23Z"
                fill="#323232"
            />
        </svg>
    );
};

export const MarkActiveIcon: FC<MarkIconProps> = ({ onClick }) => {
    return (
        <svg
            onClick={onClick}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.7375 7.475L10.5 15.7125L6.0125 11.2375L4.25 13L10.5 19.25L20.5 9.25L18.7375 7.475ZM13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM13 23C7.475 23 3 18.525 3 13C3 7.475 7.475 3 13 3C18.525 3 23 7.475 23 13C23 18.525 18.525 23 13 23Z"
                fill="#2CC148"
            />
        </svg>
    );
};
