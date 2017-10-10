module.exports = {
        method: 'GET',
        path: '/get',
        handler: (request, reply) => {
            reply('Hello Daniel');
        }
}