import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Search from '../ui/Search';
import Superheros from './Superheros';



const HeaderWrapper = styled.div`
    border: 2px solid red;
    padding: 0 2rem;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Header = () => {
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
                        margin: 3rem 0rem;
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
                                <a className="header-links" href = "https://developer.marvel.com/docs" target = "_blank">API Documentation <i class="fas fa-file-alt"></i></a>
                                
                            </li>
                            <li>
                                <a className="header-links" href = "">Private Repository <i className="fab fa-github"></i></a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                   <Search/>
                   <Superheros />
                </div>
            </HeaderWrapper>
        </header>
    );
}

export default Header;