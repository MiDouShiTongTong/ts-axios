import axios, { AxiosError, AxiosResponse } from './axios';

// params test
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     favoriteList: ['qqq', 'www', 'eee']
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     person: {
//       name: 'qqq'
//     }
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     date: new Date()
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     qqq: '@$),+'
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     name: 'Andy'
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1',
//   params: {
//     age: 23
//   }
// });
//
// axios({
//   url: 'http://127.0.0.1?qqq=2#qwe',
//   params: {
//     name: 'Andy'
//   }
// });

// data test
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data:{
//     q: [
//       '123',
//       '222',
//       '333'
//     ]
//   }
// });

// headers test
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: {
//     q: 123,
//     w: 231,
//     e: 123
//   },
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json, text/plain, */*'
//   }
// });
//
// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: {
//     q: 123,
//     w: 231,
//     e: 123
//   }
// });

// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: new URLSearchParams('q=1&w=5')
// });

// axios({
//   method: 'post',
//   url: 'http://127.0.0.1',
//   data: {
//     a: 1,
//     b: 2
//   }
// }).then((res: AxiosResponse) => {
//   console.log(res);
// });

// response status code test
// axios({
//   method: 'get',
//   url: 'http://127.0.0.1'
// }).then((res: AxiosResponse) => {
//   console.log(res);
// }).catch(e => {
//   console.error(e);
// });

// timeout test
// axios({
//   method: 'get',
//   url: 'http://127.0.0.1',
//   params: {
//     q: 2
//   }
// }).then((res: AxiosResponse) => {
//   console.log(res);
// }).catch(e => {
//   console.error(e);
// });

// network test
setTimeout(() => {
  axios({
    method: 'get',
    url: 'http://127.0.0.1',
    params: {
      q: 2
    }
  }).then((res: AxiosResponse) => {
    console.log(res);
  }).catch((e: AxiosError) => {
    console.error(e.message);
    console.error(e.isError);
    console.error(e.config);
    console.error(e.code);
    console.error(e.request);
    console.error(e.response);
  });
}, 3000);

