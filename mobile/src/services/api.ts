import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.31:3333',
});

export default api;

// localhost para emulador ios
// localhost para emulador android usando o comando adb reverse tcp:3333 tcp:3333 no terminal
