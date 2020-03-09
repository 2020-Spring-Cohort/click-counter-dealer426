describe('app.js manipulates the DOM to reflect the status of a Cookie object.', () => {
    let testCookie;
    let testClickUpdater;
    let testIncreaseClick;

    beforeEach(() => {
        testCookie = new Cookie();
        testClickUpdater = document.createElement('div');
        testIncreaseClick = document.createElement('button');
        makeCookieClickerButton(testIncreaseClick, testClickUpdater, testCookie);
        resetClicker(testIncreaseClick, testClickUpdater, testCookie);
    });

    describe('updateClicker() - As the user clicks, the innerText of the passed element reflects the click count.', () => {
        it('Without clicking the count should be 0.', () => { 
            updateClicker(testClickUpdater, testCookie); 
            expect(testClickUpdater.innerText).toBe('0');
        });

        it('After clicking the cookie count should be 1.', () => {  
            testCookie.cookieCounter();
            updateClicker(testClickUpdater, testCookie); 
            expect(testClickUpdater.innerText).toBe('1');
        });
    });

    describe('resetClicker() -  resets clicker to 0.', () => {
        it('clicking reset should set the clicker back to 0.', () => {
            testCookie.cookieCounter();
            testCookie.cookieReset();
            resetClicker(testIncreaseClick, testClickUpdater, testCookie); 
            expect(testCookie.getCookieCount()).toBe(0);
        });
    });

    describe('getCookieCount - Holds the current state of all of the user clicks.', () => {
        it('Clicking thrice should return 3 clicks.', () => {
            testCookie.cookieCounter();
            testCookie.cookieCounter();
            testCookie.cookieCounter();
            expect(testCookie.getCookieCount()).toBe(3);
        });

        it('Clicking four times should return 4 clicks.', () => {
            testCookie.cookieCounter();
            testCookie.cookieCounter();
            testCookie.cookieCounter();
            testCookie.cookieCounter();
            expect(testCookie.getCookieCount()).toBe(4);
        });
    });


    describe('updateCheckEngineLight() - Changes the text and color of the passed element.', () => {
        beforeEach(() => {
            
        })
        describe('When engine health goes below 100, the check engine light turns amber.', () => {
            it('Perfect engine health should leave light off.', () => {
                
            });
            it('Engine health of 90 should turn light on.', () => {
                
            });
        });
    });
});
describe('The app.js file wires the elements of the Car.js and index.html files together.', () => {
    describe('The accelerator increases the displayed speed of the car.', () => {
       

        it('Hitting the accelerator once should increase the displayed speed to 10.', () => {
            
        })
    })
});