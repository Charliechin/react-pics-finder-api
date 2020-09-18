import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fPYkazvTkiz6HlXvMrZMRHHQeF2MTDh9k1OEcNdJU8k',
  }
});