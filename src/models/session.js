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
        .then((a) => {
            localStorage.setItem('token', a);
            return a.json();
        });
}

function logout() {
    return webix
        .ajax()
        .post('api/logout')
        .then((a) => {
            localStorage.removeItem('token');
            return a.json();
        });
}

export default {
    status,
    login,
    logout,
};
