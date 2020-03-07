const getHello = function(greeting) {
        return greeting;
}

const updateClicker = (dashboardElement, cookieObject) => {
  dashboardElement.innerText = cookieObject.getCookieCount();
}

const makeCookieClickerButton = (buttonClickElement, dashboardElement, cookieObject) => {
  buttonClickElement.addEventListener('click', ()=>{
      cookieObject.cookieCounter();
      updateClicker(dashboardElement, cookieObject);
      makeCookieCompanionClicker(cookieObject);
  })
}

const resetClicker = (buttonClickElement, dashboardElement, cookieObject) => {
  buttonClickElement.addEventListener('click', ()=>{
      cookieObject.cookieReset();
      updateClicker(dashboardElement, cookieObject);
  })
}

const makeCookieCompanionClicker = (cookieObject) => {
    if(cookieObject.getCookieCount() === 10)
    {
      alert('You reached 10 clicks!');
      buttonCookieCompanionClicker.classList.remove('hide');
      buttonCookieCompanionClicker.classList.add('show');
      buttonCookieCollectiveCulminatioCompounder.classList.remove('hide');
      buttonCookieCollectiveCulminatioCompounder.classList.add('show');
    }
}


const myCookie = new Cookie();
const dashboardElement = document.querySelector('.dashboard_cookiecounter');
const buttonClickElement = document.querySelector('.cookie_clicker');
const buttonResetElement = document.querySelector('.cookie_reset');
const buttonCookieCompanionClicker = document.querySelector('.cookie_companion_clicker');
const buttonCookieCollectiveCulminatioCompounder = document.querySelector('.cookie_collective_culmination_compounder');



makeCookieClickerButton(buttonClickElement, dashboardElement, myCookie);
updateClicker(dashboardElement, myCookie);
resetClicker(buttonResetElement, dashboardElement, myCookie);