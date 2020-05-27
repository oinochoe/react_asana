import styled from 'styled-components';
import { colors } from './';

// 모달 초기값 설정
export const ModalOverlay = styled.div`
    height: 100vh;
    position: fixed;
    top: -999rem;
    left: 0;
    right: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.65);
    opacity: 0;
    transition: opacity 0.35s ease-in-out;

    /* 모달 active 일시 스르륵 내려옴 */
    &.is-active {
        top: 0;
    }

    /* 모달이 보이면 opacity:0; */
    &.is-visible {
        opacity: 1;
    }
`;

export const ModalWindow = styled.div`
    width: ${(p) => p.width}px;
    height: 0;
    position: absolute;
    top: calc(40% + 1rem);
    left: 50%;
    z-index: 20;
    padding: 2rem;
    opacity: 0;
    border-radius: 0.2rem;
    transform: translate(-50%, -50%);
    transition: opacity 0.35s ease-in-out, top 0.25s ease-in-out;
    background: ${colors.white};

    &.is-active {
        height: auto;
    }

    &.is-visible {
        opacity: 1;
        top: 40%;
    }
`;
