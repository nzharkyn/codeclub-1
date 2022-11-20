export default {
   fetch(request) {

     const randomResponses = {
      0: 'First Random Response',
      1: 'Now it is the second response',
      2: 'Maybe this is a third one',
      3: 'Fifth option...jk, fourth one'
};
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const x = getRandomInt(4);

	    return new Response(randomResponses[x])

   },
};
