import React from 'react'
import NextHead from 'next/head'

const defaultDescription = 'Kacper Mironski personal website contains projects, hobby and about';

const Head = () => (
    <NextHead>
        <meta charSet="UTF-8"/>
        <title>{'Kacper Mironski personal website'}</title>
        <meta
            name="description"
            content={defaultDescription}
        />
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />
    </NextHead>
);

export default Head
