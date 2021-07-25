import React, { useState } from 'react'
import styled from '@emotion/styled';
import Error from './Error';

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

const Search = ({setSearch}) => {

    const [ term, setTerm ] = useState('');
    const [ error, setError ] = useState(false);

    const enterKey = (e) => {
        if (e.key === 'Enter') {
          searchComic(e);
        }
      }

    const searchComic = e => {
        e.preventDefault();

        //validate
        if(term.trim() === '') {
            setError(true);
            return;
        }

        // send search term to main component
        setSearch(term);
    }

    return (
        <SearchWrapper>
            <form
                onSubmit = {searchComic}
            >
                <button type="submit" className="fas fa-search" ></button>
                <input 
                    type = "text" 
                    placeholder = "Your favourite comic..."
                    onChange = { e => setTerm(e.target.value) }
                    onKeyPress = {enterKey}
                />
            </form>
            {error ? <Error message = 'Oops, you forgot type something! 😬' /> : null}
        </SearchWrapper>
    );
}

export default Search;