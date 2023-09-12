const { spec } = require('pactum');

describe("Teste em API", () => {

    const baseUrl = "https://reqres.in"

    it('registrar usuário com sucesso', async () => {
        let response = await spec()
            .post(`${baseUrl}/api/register`)
            .withJson({
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            })
            .expectStatus(200)
            .expectJson({
                "id": 4,
                "token": "QpwL5tke4Pnpja7X4"
            })

        console.log(response.statusCode)
        console.log(response.body)
    });

    it('registrar usuário sem informar senha', async () => {
        let response = await spec()
            .post(`${baseUrl}/api/register`)
            .withJson({
                "email": "eve.holt@reqres.in"
            })
            .expectStatus(400)
            .expectJson({
                "error": "Missing password"
            })

        console.log(response.statusCode)
        console.log(response.body)
    });

    it('registrar usuário deixando senha em branco', async () => {
        let response = await spec()
            .post(`${baseUrl}/api/register`)
            .withJson({
                "email": "eve.holt@reqres.in",
                "password": ""
            })
            .expectStatus(400)
            .expectJson({
                "error": "Missing password"
            })

        console.log(response.statusCode)
        console.log(response.body)
    });

})