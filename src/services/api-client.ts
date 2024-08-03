import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c2f997a764b54da1a87a34de56d0d529',
  },
});
