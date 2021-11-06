import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const bloodTestAPI = {
    addBloodTestApi(btData){
        return instance.post(`blood-test`, {
            testName: btData.testName,
            testValue: btData.testValue
        })
        .then(response => {
            return response.data;
        });
    }
}
