function status() {
    const token = localStorage.getItem('token');

    return webix
        .ajax()
        .headers({
            Authorization: `Bearer ${token}`,
        })
        .post('api/login/status')
        .then((a) => a.json());
}

function login(email, password) {
    let user;
    return webix
        .ajax()
        .post('api/login', {
            email,
            password,
        })
        .then((a) => {
            user = a.json();
            return user;
        })
        .then(() => {
            return webix.ajax().post('api/token', {
                id: user._id,
                email: user.email,
            });
        })
        .then((token) => token.json())
        .then(({ token }) => {
            localStorage.setItem('token', token);
            return user;
        })
        .catch((err) => console.log(err));
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
