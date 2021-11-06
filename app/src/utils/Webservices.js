// Webservices
import axios from 'axios';
import {LogDisplay} from './LogDisplay';

const default_url = 'https://api.virdi.no/v2/';

export function PublicPostUrl(url, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${default_url}${url}`,
      timeout: 1000 * 5, // Wait for 5 seconds
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        LogDisplay('Here Error');
        LogDisplay(error.response.data);
        LogDisplay(error.response.status);
        LogDisplay(error.response.headers);
        if (error.response) {
          resolve(error.response);
        } else if (error.request) {
          resolve(error.request);
        } else {
          LogDisplay(error.message);
          resolve(error.message);
        }
        reject('Error');
      });
  });
}

export function PublicGetUrl(url, token) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${default_url}${url}`,
      timeout: 1000 * 5, // Wait for 5 seconds
      headers: {
        'Content-type': 'application/json',
        'x-api-key': 'Ukcc3ZTIom4UhEsRS9sH3iDL35t2Je34k9GgmC0e',
      },
    })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        if (error.code === 'ECONNABORTED') {
          resolve(error);
        }
        if (error.response) {
          // LogDisplay(error.response)
          // Request made and server responded
          resolve(error.response);
        } else if (error.request) {
          // The request was made but no response was received
          resolve(error.request);
        } else {
          LogDisplay(error);
          // Something happened in setting up the request that triggered an Error
          resolve(error.message);
        }
        reject('Error');
      });
  });
}
