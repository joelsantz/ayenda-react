import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ErrorMessage = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--red);
    margin-top: 2rem;
    margin-bottom: -2rem;
    padding: 0;
`

const Error = ({message}) => {

    return (
        <ErrorMessage>{message}</ErrorMessage>
    );
}

export default Error;