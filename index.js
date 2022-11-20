export default {
   fetch(request) {
       console.log('['+request.method+'] ' + request.url);
       
	const newRequestInit = {
		method: 'POST',
	};
	
	const newRequest = new Request(request.url, newRequestInit);
	
	if (newRequest.method=='POST') {
	return new Response('Hello worker!, the GET method was modified to ' + newRequest.method, {
           headers: {
               'content-type': 'text/plain',
           },
         });
	}
	else if (newRequest.method=='GET') {
        return new Response('Hello worker!, the GET method was NOT modified', {
           headers: {
               'content-type': 'text/plain',
           },
         });
        }
   },
};

