module.exports = {
    method: 'POST',
    path: '/post',
    handler: (request, replay) => {
        const payload = request.payload;
        replay(payload);
        console.log(payload);
    }
}