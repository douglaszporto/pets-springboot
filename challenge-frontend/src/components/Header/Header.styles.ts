import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    width: 100%;
    border-bottom: 1px solid var(--theme-color-primary);
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    line-height: 1.5rem;
    text-transform: uppercase;
`;

export const Button = styled.button`
    background-color: var(--theme-color-primary);
    color: white;
    height: 3rem;
    width: 8rem;
    border: 0;
    border-radius: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color .3s;
    
    &:hover {
        background-color: var(--theme-color-secondary);
    }
`;