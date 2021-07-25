import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Search from '../components/ui/Search';
import ComicsList from '../components/ui/ComicsList';
import Superheros from '../components/layout/Superheros';

const Home = () => {


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
    <div>
      <Layout>
        <h1>COMICS</h1>
      </Layout>
    </div>
  );
}

export default Home;
