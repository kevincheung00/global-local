class User {
    constructor(username, password, email, newName, newAge, newLocation){
        let _username_ = username;
        let _password_ = password;
        let _email_ = email;
        let _name_ = newName;
        let _age_ = newAge;
        let _location_ = newLocation;

        this.setUsername = function(username){
            _username_ = username;
        }
        this.setPassword = function(password){
            _password_ = password;
        }
        this.setEmail = function(email){
            _email_ = email;
        }
        this.setName = function(name){
            _name_ = name;
        }
        this.setAge = function(age){
            _age_ = age;
        }
        this.setLocation = function(location){
            _location_ = location;
        }
        this.getUsername = function(){
            return _username_;
        }
        this.getEmail = function(){
            return _email_;
        }
        this.getName = function(){
            return _name_;
        }
        this.getAge = function(){
            return _age_;
        }
        this.getLocation = function(){
            return _location_;
        }
    }
}

class Tourist extends User {
    constructor(username, password, email, newName, newAge, newLocation){
        super(username,password,email,newName,newAge,newLocation)
    }
}

let addTourist = function(username, password, email, newName, newAge, newLocation){
    return new Tourist(username, password, email, newName, newAge, newLocation);
}

module.exports = {
    touristClass: Tourist,
    addTouristMethod: addTourist
};