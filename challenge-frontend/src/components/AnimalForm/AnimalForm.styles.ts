import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 2rem auto;
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0.5rem;

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: center;
        justify-content: stretch;
    }
`;

export const FormGroup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

export const Label = styled.div`
    font-weight: 700;
    height: 3rem;
    display: flex;
    align-items: center;
    width: 30%;

    @media (min-width: 1000px) {
        width: 100px;
    }
`;

export const Input = styled.input`
    width: 70%;
    padding: 1rem 0.5rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid var(--theme-color-border-input);
    background-color: var(--theme-color-background-input);

    @media (min-width: 1000px) {
        width: auto;
        flex: 1;
    }
`;

export const Select = styled.select`
    width: 70%;
    padding: 1rem 0.5rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid var(--theme-color-border-input);
    background-color: var(--theme-color-background-input);

    @media (min-width: 1000px) {
        width: auto;
        flex: 1;
    }
`;

export const TextArea = styled.textarea`
    width: 70%;
    padding: 1rem 0.5rem;
    height: 8rem;
    border-radius: 0.5rem;
    border: 1px solid var(--theme-color-border-input);
    background-color: var(--theme-color-background-input);

    @media (min-width: 1000px) {
        width: auto;
        flex: 1;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
`;

export const Button = styled.button`
    background-color: ${p => p.color ?? 'var(--theme-color-primary)'};
    color: white;
    height: 3rem;
    width: 8rem;
    border: 0;
    border-radius: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color .3s;
    
    &:hover {
        background-color: var(--theme-color-secondary);
    }
`;

export const Image = styled.img`
    width: 10rem;
    height: 10rem;
    display: block;
    margin: 0 auto;
`;