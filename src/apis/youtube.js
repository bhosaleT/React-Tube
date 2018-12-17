import axios from 'axios';

const KEY = "AIzaSyCPM9P9ly7ixWkMDJ2AogIZg1WR5YvTG5E";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})