import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Search from '../ui/Search';
import ComicsList from '../ui/ComicsList';
import Superheros from './Superheros';



const HeaderWrapper = styled.div`
    border: 2px solid red;
    padding: 0 2rem;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
`

const Header = () => {

    // app state
    const [ search, setSearch ] = useState('');
    const [ comics, setComics ] = useState([]);
    const [ actualpage, setActualPage ] = useState(1);
    const [ totalpages, setTotalPages ] = useState(1);

    useEffect(() => {
        const getComics = async () => {
            if(search === '') return;
      
            const comicsPerPage = 15;
            const privateApiKey = 'f0b97ebde26b5f01066513ea4194e7b9050e2ac9';
            const publicApiKey = 'bfb572428e14738d6a355e43b005f42a';
            const hash = '3321e625715b4f61c8ceca26799c5ac8';
            const url = `http://gateway.marvel.com/v1/public/comics?title=${search}&limit=${comicsPerPage}&ts=1&apikey=${publicApiKey}&hash=${hash}&offset=${actualpage}`;
      
            const response = await fetch(url);
            const result = await response.json();
      
            setComics(result.data.results);

            // calculate total pages
            const calculateTotalPages = Math.ceil(result.data.total / comicsPerPage);
            setTotalPages(calculateTotalPages);
          }
          getComics();
    }, [search, actualpage])

    // Previous Page
    const previousPage = () => {
        const newActualPage  = actualpage - 1;
        if(newActualPage === 0) return;
        setActualPage(newActualPage);
    }

    // Next Page
    const nextPage = () => {
        const newActualPage  = actualpage + 1;
        if(newActualPage > totalpages) return;
        setActualPage(newActualPage);
    }

    return (
        <header
            css={css`
                    ul {
                        list-style: none;
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: row;
                        align-items: center;
                        align-content: center;
                        justify-content: center;
                    }
                    .header-links {
                        font-family: 'Oswald', sans-serif;
                        color: var(--black);
                        text-decoration: none;
                        margin: 1rem 2rem;
                        padding: .8rem 2rem;
                    }
                    .header-links:hover {
                        color: var(--red);
                        transition: 0.3s;                 }
            `}
        >
            <HeaderWrapper>
                <div>
                    <div>
                        <ul>
                            <li>
                                <a className="header-links" href = "https://developer.marvel.com/docs" target = "_blank">API Documentation <i className="fas fa-file-alt"></i></a>
                                
                            </li>
                            <li>
                                <a className="header-links" href = "">Private Repository <i className="fab fa-github"></i></a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                   <Search setSearch={setSearch} />
                   <Superheros />
                </div>
            </HeaderWrapper>
            <div>
                <ComicsList 
                    comics = {comics}
                />
            </div>
            <div>
                { (actualpage ===1) ? null : (
                    <button
                        type = "button"
                        onClick = {previousPage}
                    >Previous</button>
                )}
                { (actualpage === totalpages) ? null : (
                    <button
                        type = "button"
                        onClick = {nextPage}
                    >Next</button>
                )}
            </div>
        </header>
    );
}

export default Header;