import React from 'react';
import styled from '@emotion/styled';

const UlWrapper = styled.div`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 3rem 0;
`;


const LinkLi = styled.a`
    font-family: 'Oswald', sans-serif;
    color: var(--black);
    text-decoration: none;
    margin: 1rem 2rem;
    padding: .8rem 2rem;

    &:hover {
        color: var(--red);
        transition: 0.3s;
    }
`;

const Nav = () => {

    return (
        <div>
            <div>
                <UlWrapper>
                    <li>
                        <LinkLi
                            href="https://developer.marvel.com/docs"
                            target="_blank">API Documentation <i className="fas fa-file-alt"></i>
                        </LinkLi>
                    </li>
                    <li>
                        <LinkLi
                            href="https://github.com/joelsantz/ayenda-react"
                            target="_blank">Private Repository <i className="fab fa-github"></i>
                        </LinkLi>
                    </li>
                </UlWrapper>
            </div>
        </div>
    );
}

export default Nav;