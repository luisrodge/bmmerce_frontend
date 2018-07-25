let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'belizers.com') {
  backendHost = 'http://178.128.79.228:8000';
} else {
  backendHost = 'http://localhost:3000';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;