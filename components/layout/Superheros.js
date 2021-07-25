import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ButtonHero from '../ui/ButtonHero';

const NavWrapper = styled.nav`
    margin: 5rem 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

const Superheros = () => {

    return (
        <NavWrapper>
            <Link href = "/spiderman">
                 <ButtonHero>Spider-Man</ButtonHero> 
            </Link>
            <Link href = "/wolverine">
                 <ButtonHero>Wolverine</ButtonHero> 
            </Link>
            <Link href = "/hulk">
                 <ButtonHero>Hulk</ButtonHero> 
            </Link>
            <Link href = "/thor">
                 <ButtonHero>Thor</ButtonHero> 
            </Link>
        </NavWrapper>
    );
}

export default Superheros;
