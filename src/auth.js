import config from './auth_config';


export const authDetails = {
    login,
    authResult: false,
}


async function login(username, password, authResult) {

    const user = username.toUpperCase();
    const formData = { 
        operation: 'read',
        UserPwd: password,
        payload: {
            Key: {
                UserName: user
            }
        }
    }
   
    const requestParms = {
        method: 'POST',

        headers: { 'Content-Type': 'application/json', 'Connection': 'keep-alive'},
        body: JSON.stringify(formData)
    };

    const response =  await fetch(`${config.domain}`, requestParms);
    const data = await response.json();
    //set some time of delay as API call happens too fast to backend!!!!
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    authResult = JSON.parse(data).Authentication;

    return authResult;

}