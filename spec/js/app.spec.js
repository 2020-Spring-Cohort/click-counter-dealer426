describe('app.js manipulates the DOM to reflect the status of a Cookie object.', () => {
    let testCookie;
    let testClickUpdater;
    let testIncreaseClick;

    beforeEach(() => {
        testCookie = new Cookie();
        testClickUpdater = document.createElement('div');
        testIncreaseClick = document.createElement('button');
        makeCookieClickerButton(testIncreaseClick, testClickUpdater, testCookie);
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

    describe('updateSpeedometer() - As the car brakes, the innerText of the passed element reflects the cars speed.', () => {
        it('Braking to 10 should show a speed of 10.', () => {
            
        });
    });

    describe('makeAcceleratorButton() - Creates an accelerator button out of the passed button, calls accelerate() one time when clicked.', () => {
        it('Clicking once on the new accelerator will increase the car\'s speed.', () => {
            testIncreaseClick.click();
            expect(testCookie.getSpeed()).toBe(10);
        });

        it('Clicking once on the accelerator will increase the speedometer elements innerText to \'10\'.', () => {
            testIncreaseClick.click();
            expect(testClickUpdater.innerText).toBe('10');
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