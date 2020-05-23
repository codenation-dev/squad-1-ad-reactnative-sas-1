import api from './api';

const getDevelopersAround = (cidade, currentPage) => {
  api
    .get(`search/users?q=location:${cidade}&page=${currentPage}&per_page=10`)
    .catch(function(error) {
      console.log(error);
    });
};

export default getDevelopersAround;
