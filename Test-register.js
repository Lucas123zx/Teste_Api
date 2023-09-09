const { spec } = require('pactum');

describe("Teste em API", () => {

    const baseUrl = "https://reqres.in"

    it('login com sucessos', async () => {
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

        console.log(response.status)
        console.log(response.body)
    });

})