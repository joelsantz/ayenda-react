import React from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const ComicCard = styled.div`
    text-align: left;
    width: 33rem;
    height: 50rem;
    color: var(--gray2);
    margin: 3rem 3rem;
    background-color: white;
    box-shadow: 10px 10px 27px -1px rgba(0,0,0,0.10);

    &:hover {
        cursor: pointer;
        box-shadow: 10px 10px 27px -1px rgba(0,0,0,0.15);
        transition: 0.3s;
    }

`;

const WrapperImg = styled.div`
    background-color: var(--black);
    width: auto;
`;

const ComicImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 20rem;
    height: auto;

`;

const WrapperContent = styled.div`
    padding: 2rem;
    line-height : 0;

    p {
        color: var(--gray);
    }
`;
const PriceP = styled.p`
    line-height: 1rem;
`;

const Comic = ({comic}) => {

    // Destructuring variables
    const { title, creators, thumbnail, prices} = comic;
    const [{price}] = prices;
    const { path, extension } = thumbnail;
    const {items:[{name}]} = creators;

    return ( 
        <div>
            <ComicCard>
                <WrapperImg>
                   <ComicImg src = {`${path}.${extension}`} /> 
                </WrapperImg>
                <WrapperContent>
                    <h3>{title}</h3>
                    <p>{name}</p>
                    <PriceP>${price}</PriceP> 
                </WrapperContent>
            </ComicCard>
        </div>
    );
}

export default Comic;