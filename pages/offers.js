import React from 'react'
// import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
// import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';
import PostLinks from '../components/commons/PostLinks'

// const PostLinks = props => (
//     <li>
//         <Link href="/p/[id]" as={`/p/${props.show.id}`}>
//             <a>{props.show.name}</a>
//         </Link>
//     </li>
// );

const Index = props => {
    const { t, i18n } = useTranslation();

    return (
    <>
        <h1>{t('date', {date: Date.now(), currentDate: 'check calendar'})}</h1>
        <ul>
            {props.shows.map(show => (
                <PostLinks key={show.id} show={show} />
            ))}
        </ul>
    </>
);
            };

Index.getInitialProps = async function() {
    const resp = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await resp.json();

    console.log(`batman dara ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};
export default Index;