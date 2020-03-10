/*For configuting the test variable if the status code is 200*/
if(pm.response.code == 201) {
    console.log(pm.response.json().token)
    pm.environment.set('authToken', pm.response.json().token);
}
