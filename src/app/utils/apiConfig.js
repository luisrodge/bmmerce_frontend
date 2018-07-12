let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'bnsthere.herokuapp.com') {
  backendHost = 'https://bnsthere-api.herokuapp.com';
} else {
  backendHost = 'http://localhost:3000';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;