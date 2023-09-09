const { spec } = require('pactum');

describe("Teste em API", () => {

    const baseUrl = "https://reqres.in"

    it('login com sucessos', async () => {
        let response = await spec()
            .post(`${baseUrl}/api/login`)
            .withJson({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
            .expectStatus(200)
            .expectJson({
                "token": "QpwL5tke4Pnpja7X4"
            })

        console.log(response.body)
        console.log(response.statusCode)
    });


    it('login informando senha incorreta', async () => {
        let response = await spec()
            .post(`${baseUrl}/api/login`)
            .withJson({
                "email": "eve.holt@reqres.in",
                "password": "teste@123"
            })
            .expectStatus(400)

        console.log(response.body)
        console.log(response.statusCode)
    });

    it('login sem informar senha', async () => {
        let response = await spec()
            .post(`${baseUrl}/api/login`)
            .withJson({
                "email": "eve.holt@reqres.in",
            })
            .expectStatus(400)
            .expectJson({
                "error": "Missing password"
            })

        console.log(response.body)
        console.log(response.statusCode)
    });


})