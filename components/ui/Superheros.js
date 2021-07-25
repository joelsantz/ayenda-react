import React from 'react';
import styled from '@emotion/styled';
import ButtonHero from './ButtonHero';

const NavWrapper = styled.nav`
    margin: 5rem 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;

    .spiderman-btn:hover {
        border: 4px solid var(--red2);
        color: var(--red2);
    }
    .wolverine-btn:hover {
        border: 4px solid var(--yellow);
        color: var(--yellow);
    }
    .hulk-btn:hover {
        border: 4px solid var(--green);
        color: var(--green);
    }
    .thor-btn:hover {
        border: 4px solid var(--blue);
        color: var(--blue);
    }
`;

const Superheros = ({setSearch}) => {

    return (
        <NavWrapper>
                 <ButtonHero className="spiderman-btn"
                    value = 'Spider-man'
                    onClick = {e => setSearch(e.target.value)}
                 >Spider-Man</ButtonHero> 
                 <ButtonHero className="wolverine-btn"
                    value = 'Wolverine'
                    onClick = {e => setSearch(e.target.value)}
                 >Wolverine</ButtonHero> 
                 <ButtonHero className="hulk-btn"
                    value = 'Hulk'
                    onClick = {e => setSearch(e.target.value)}
                 >Hulk</ButtonHero> 
                 <ButtonHero className="thor-btn"
                    value = 'Thor'
                    onClick = {e => setSearch(e.target.value)}
                 >Thor</ButtonHero> 
        </NavWrapper>
    );
}

export default Superheros;
