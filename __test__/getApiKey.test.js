import {getApiKey} from '../src/client/js/getApiKey'
const dotenv= require('dotenv')
dotenv.config()
describe("Testing the submit functionality", () => {

    test("Testing the handleSubmit() function", () => {
        const result={
            apiKey:process.env.API_KEY
        }

           expect(getApiKey()).resolves.toStrictEqual(result)
})});