function status() {
    return webix
        .ajax()
        .post('api/login/status')
        .then((a) => a.json());
}

function login(email, password) {
    return webix
        .ajax()
        .post('api/login', {
            email,
            password,
        })
        .then((a) => a.json());
}

function logout() {
    return webix
        .ajax()
        .post('api/logout')
        .then((a) => a.json());
}

export default {
    status,
    login,
    logout,
};
