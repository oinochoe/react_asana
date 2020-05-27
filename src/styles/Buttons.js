import styled, { css } from 'styled-components';
import { colors } from './';

// mode를 정하여 스타일을 각각 준다.
const modes = {
    primary: {
        background: 'transparent',
        backgroundHover: 'transparent',
        border: colors.gray90,
        color: colors.gray90,
    },
    caution: {
        background: 'transparent',
        backgroundHover: colors.red10,
        border: colors.red70,
        color: colors.red70,
    },
};

// 기본 modeValue 선언
const modeValue = (key) => ({ mode = 'primary' }) => modes[mode][key];

// buttonStyle을 선언하여 css를 선언한다.
export const buttonStyles = css`
    background: ${modeValue('background')};
    border: 1px solid ${modeValue('border')};
    border-radius: 1rem;
    color: ${modeValue('color')};
    font-size: 1.2rem;
    outline: none;
    opacity: 0.5;
    padding: 0.2rem 0.6rem;
    transition: background 0.15s ease-in-out, opacity 0.15s ease-in-out;
    margin: ${(p) => p.margin || '0'};

    :hover,
    :focus {
        background: ${modeValue('backgroundHover')};
        opacity: 1;
    }

    ${(p) =>
        p.active &&
        css`
            background: ${modeValue('backgroundHover')};
            opacity: 1;
        `}
`;

export const Button = styled.button`
    ${buttonStyles}
`;
