import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
    justify-content: stretch;
    align-items: center;
`;


export const Label = styled.div`
    height: 2rem;
    display: flex;
    align-items: center;
    flex: 1;

    &:first-child {
        text-align: left;
    }

    &:last-child {
        text-align: right;
    }
`;

export const Switch = styled.div`
    height: 1.5rem;
    width: 2rem;
    border-radius: 1rem;
    background-color: var(--theme-color-background-input);
    border: 1px solid var(--theme-color-border-input);
    cursor: pointer;
    position: relative;
    margin: 0 0.5rem;
    transition: background-color .3s ease 0s;

    &:before {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: var(--theme-color-background-hover);
        top: 50%;
        left: 50%;
        transform: translate3d(-80%, -50%, 0);
        transition: translate .3s ease 0s;
    }

    &.checked {
        background-color: var(--theme-color-primary);
    }
    &.checked:before {
        transform: translate3d(-20%, -50%, 0);
        background-color: var(--theme-color-font);
    }
`;