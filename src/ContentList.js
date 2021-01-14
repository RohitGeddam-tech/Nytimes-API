import React from 'react';
import ContentCard from './ContentCard';
import './ContentList.css'

const ContentList = ({News}) => {
    const NewsList = News.map((news) => { 
        return <ContentCard key={news.published_date} date={news.updated_date} info={news.title} content={news.multimedia[0].url}/>
    });
    console.log();
    return <div className='content-list'>{NewsList}</div>;
};


export default ContentList;