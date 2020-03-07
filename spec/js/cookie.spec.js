describe('Cookie should behave like a cookie:', () => {
    let underTest;
    
    beforeEach(() => {
        underTest = new Cookie();
    })

    describe('Counter should start at 0:', () => {
        describe('Counter should initialize at 0,', () => {   
            it('it should return a 0', function(){
                expect(underTest.getCookieCount()).toBe(0);
            })
        });

    });

    describe('Click should increase:', () => { 
            it('it should increase click count by 1', () =>{
                underTest.cookieCounter();
                expect(underTest.getCookieCount()).toBe(1);
            });
     
            it('it should increase click count by 2', () =>{
                underTest.cookieCounter();
                underTest.cookieCounter();
                expect(underTest.getCookieCount()).toBe(2);
            });
      
    });

    describe('Counter should reset', () => {
        describe('When reset button is clicked,', () => {
            it('counter should reset to 0', ()=>{
                underTest.cookieCounter();
                underTest.cookieReset();
                expect(underTest.getCookieCount()).toBe(0);
            })
        })
    })
    
});