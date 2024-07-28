import styled from 'styled-components';
import { DataColumnType } from '../../types/DataColumn.type';

export const Datatable = styled.table`
    margin-top: 2rem;
    width: 100%;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 1px;
    border: 0;
`;

export const DataHeader = styled.tr`
    background-color: var(--theme-color-background-aux);
    height: 3rem;
    padding: 0;
    `;

export const DataRow = styled.tr`
    background-color: var(--theme-color-background);
    height: 3rem;
    padding: 0;
    cursor: pointer;
    border-bottom: 1px solid var(--theme-color-background-hover);

    &:nth-child(odd) {
        background-color: var(--theme-color-background-aux);
    }

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background-color: var(--theme-color-background-hover);
    }
`;

export const DataHeaderColumn = styled.th<{$definition:DataColumnType}>`
    width: ${(p) => `${p.$definition.width}%`};
    text-align: left;
    margin: 0;
    padding: 0.5rem;
    border: 0;
    border-bottom: 1px solid var(--theme-color-primary);
    border-right: 1px solid var(--theme-color-background-hover);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--theme-color-primary);

    &:last-child {
        border-right: 0;
    }
`;

export const DataColumn = styled.td<{$definition:DataColumnType}>`
    text-align: ${(p) => `${p.$definition.align || 'left'}`};
    margin: 0;
    padding: 0.5rem;
    border: 0;
    border-right: 1px solid var(--theme-color-background-hover);

    &:last-child {
        border-right: 0;
    }
`;