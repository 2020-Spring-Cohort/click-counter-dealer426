
describe('Is JS Working', function(){

   
    describe('Hello', function(){
        it('should return hello', function(){
            expect(getHello('Hello')).toBe('Hello');
        });
    })

    describe('DOM element', function(){
        beforeEach(function(){
            counterButton = document.querySelector('#counterButton');
            fizzBuzzNumber = document.querySelector('#fizzbuzz-number');
            fizzBuzzValue = document.querySelector('#fizzbuzz-value');
        })

        describe('button', function(){
            it('should exist', function(){
                expect(counterButton).not.toBeNull();
            })

        })

    })

})


