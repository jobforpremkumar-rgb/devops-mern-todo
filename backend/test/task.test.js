const reqest = require('supertest');
const {server , app} = require('../index');
const mongoose = require('mongoose');


describe('get api/tasks', () => {

    it('should return 200 is OK', async() => {
        const res = await reqest(app).get('/api/tasks');
        expect(res.statusCode).toBe(200);
       
      
    });
     it('should return an object', async() => {
        const res = await reqest(app).get('/api/tasks');
        expect(typeof res.body).toBe('object');

      
    });
});


afterAll(async () => {
    await mongoose.connection.close();
    await server.close();
})