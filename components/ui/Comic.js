import React from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const ComicCard = styled.div`
    text-align: left;
    width: 35rem;
    height: 50rem;
    color: var(--gray2);
    margin: 2rem 2rem;
    background-color: white;
    border: 3px solid var(--black);

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

const Comic = ({comic}) => {

    // Destructuring variables
    const { title, creators, thumbnail} = comic;
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
                </WrapperContent>
            </ComicCard>
        </div>
    );
}

export default Comic;