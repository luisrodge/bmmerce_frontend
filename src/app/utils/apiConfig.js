let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'belizesell.herokuapp.com') {
  backendHost = 'https://belizesell-api.herokuapp.com';
} else {
  backendHost = 'http://localhost:3000';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;