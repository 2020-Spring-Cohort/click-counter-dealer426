class Cookie {
    constructor() {
        this._clicker = 98;
    }

    cookieCounter() {   
        this._clicker += 1;
    }

    cookieReset() { 
        this._clicker = 0;  
    }

    getCookieCount() {   
        return this._clicker;
    }

    addCompanion(amount) {

        this._clicker += amount;
    }
}