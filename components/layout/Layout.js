import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

const Layout = (props) => {

    return (
        <>
            <Global 
                styles = {css`
                    :root {
                        --black: #1e272e;
                        --red: #f53b57;
                        --gray: #95afc0;
                        --gray2: #535c68;
                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: boder-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-family: 'Lato', sans-serif;
                        font-size: 2rem;
                        line-height: 1.5;
                    }
                    h1, h2, h3 {
                        font-family: 'Oswald', sans-serif;
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    a {
                        text-decoration: none;
                        color: var(--black);
                    }
                `}
            />
            <Head>
                <html lang="en" />
                <title>Ayenda Test | Joel Santana</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap" rel="stylesheet" />
            </Head>

            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;