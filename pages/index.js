import React, { useState, useEffect } from 'react';

const Home = () => {

  // app state
  const [ search, setSearch ] = useState('');
  const [ comics, setComics ] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      if(search === '') return;

      const comicsPerPage = 20;
      const apiKey = '';
      const url = ``;

      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      setComics('TODO: setComics(result.comics)')
    }
    getComics();
  }, [search])

  return (
    <div>
      <h1>COMICS</h1>
      //TODO: form to setSearch
    </div>
  );
}

export default Home;
