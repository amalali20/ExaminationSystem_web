class User {
    constructor(name, Email, pass) {
        this.name = name;
        this.Email = Email;
        this.pass = pass;
    }
}


export const users = [
    new User("Amal", "amal@gmail.com", "amal12345"),
    new User("aya", "aya@gmail.com",   "aya12345"),
    new User("mohamed", "mohamed@gmail.com", "mohamed12345"),
    new User("ali", "ali@gmail.com", "ali12345"),
    new User("eman", "eman@gmail.com", "eman12345"),
];