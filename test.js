const { spec } = require('pactum');

describe("Teste em API", () => {

    let baseUrl = "https://reqres.in"

    it('login com sucessos', async () => {
        let response = await spec()
            .post(`${baseUrl}/api/login`)
            .withJson({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
            .expectStatus(200)

        console.log(response.body)
    });


    it('login informando senha incorreta' , async () => {
       let response = await spec()
            .post(`${baseUrl}/api/login`)
            .withJson({
                "email": "eve.holt@reqres.in",
                "password": "teste@123"
            })
            .expectStatus(204)
        
        console.log(response.body)
        console.log(response.status)
    })


})