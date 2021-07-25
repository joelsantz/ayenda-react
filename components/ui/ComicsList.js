import React from 'react';
import styled from '@emotion/styled';
import Comic from './Comic';

const WrapperListComics = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 10rem;
    margin-left: 10rem;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: auto;
`;

const ComicsList = ({comics}) => {

    return ( 
        <WrapperListComics>
            {comics.map(comic => (
                <Comic 
                    key = {comic.id}
                    comic = {comic}
                />
            ))}
        </WrapperListComics>
     );
}

export default ComicsList;