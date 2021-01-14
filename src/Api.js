// import { queryAllByAltText } from '@testing-library/react';
import axios from 'axios';

//"url": "https://api.nytimes.com/svc/topstories/v2/sundayreview.json?api-key=[YOUR_API_KEY]",
    
export default axios.create({
    baseURL: 'https://api.nytimes.com/svc/topstories/v2',
    headers: {
        'Content-Type': "application/json"
    } 
});