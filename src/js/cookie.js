class Cookie {
    constructor() {
        this._clicker = 98;
        this._tempClicker = 98;
    }

    cookieCounter() {   
        this._clicker += 1;
        this._tempClicker += 1;
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

    cookieTempReset(){
        this._tempClicker = 0;
    }

    getCookieTempCount(){
        return this._tempclicker;
    }
}