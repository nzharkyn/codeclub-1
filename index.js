export default {
   fetch(request) {
       console.log(request.url);
       return new Response('Hello worker!, the url is ' + request.url, {
           headers: {
               'content-type': 'text/plain',
           },
       });
   },
};

