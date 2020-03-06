
describe('Is JS Working', function(){

   
    describe('Hello', function(){
        it('should return hello', function(){
            expect(getHello('Hello')).toBe('Hello');
        });
    })

    describe('DOM element', function(){
        beforeEach(function(){
            counterButton = document.querySelector('#counterButton');
        })

        describe('button', function(){
            it('should exist', function(){
                expect(counterButton).not.toBeNull();
            })

        })

    })

})


