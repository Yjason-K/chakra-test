import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const div = css({
    margin: '20px 0'
});

export const button = css({
    padding: '10px 15px',
    backgroundColor: 'hotpink',
    fontSize: '24px',
    borderRadius: '4px',
    '&:hover': {
        color: 'white',
    },
});

export const GitButton = styled.button`
    display: flex;
    align-content: center;
    right: 0;
    top: 5rem;
    padding: 1rem;
    background: #ffffff;
    box-shadow: 0px 1px 9px rgba(10, 31, 68, 0.1),
        0px 0px 1px rgba(10, 31, 68, 0.08), 0px 8px 10px rgba(10, 31, 68, 0.1);
    border-radius: 4px;
`;