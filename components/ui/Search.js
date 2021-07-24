import React from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SearchWrapper = styled.div`
    form {
        display: flex;
        border: 2px solid var(--gray);
        width: 100%;
        border-radius: 0.5px;
    }
    input[type=text] {
        height: 100%;
        width: 100%;
        padding: 10px;
        font-size: 1.8rem;
        color: var(--black);
        font-family: 'Lato', sans-serif;
        border: none;
        outline: none;
    }
    input[type=text]:focus {
        border: none;
    }
    button {
        padding: 0 15px;
        color: var(--gray);
        font-size: 2rem;
        background-color: white;
        border: none;
    }
`;

const Search = () => {

    return (
        <SearchWrapper>
            <form>
                <button type="submit" className="fas fa-search" ></button>
                <input type="text" placeholder="Your favourite comic..."/>
            </form>
        </SearchWrapper>
    );
}

export default Search;