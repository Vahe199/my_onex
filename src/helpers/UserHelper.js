

export default class UserHelper {
    static logIn(jwt) {
        localStorage.setItem('authToken', jwt);
    }

    static logOut() {
        localStorage.removeItem('authToken');
    }

    static isLoggedIn() {
        return !!localStorage.getItem('authToken')?.length
    }
}
