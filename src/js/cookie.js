class Cookie {
    constructor() {
        this._clicker = 0;
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
}