import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
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


const Superheros = () => {

    return (
        <NavWrapper>
                 <ButtonHero className="spiderman-btn" >Spider-Man</ButtonHero> 
                 <ButtonHero className="wolverine-btn">Wolverine</ButtonHero> 
                 <ButtonHero className="hulk-btn">Hulk</ButtonHero> 
                 <ButtonHero className="thor-btn">Thor</ButtonHero> 
        </NavWrapper>
    );
}

export default Superheros;
