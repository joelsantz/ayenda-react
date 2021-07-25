import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';

const Home = () => {

  // app state
  const [ search, setSearch ] = useState('');
  const [ comics, setComics ] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      //if(search === '') return;

      const comicsPerPage = 20;
      const privateApiKey = 'f0b97ebde26b5f01066513ea4194e7b9050e2ac9';
      const publicApiKey = 'bfb572428e14738d6a355e43b005f42a';
      const hash = '3321e625715b4f61c8ceca26799c5ac8';
      const url = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicApiKey}&hash=${hash}`;

      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      // setComics('TODO: setComics(result.comics)')
    }
    getComics();
  }, [search])

  return (
    <div>
      <Layout>
      </Layout>
    </div>
  );
}

export default Home;
