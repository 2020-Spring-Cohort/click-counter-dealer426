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
  })
}

const resetClicker = (buttonClickElement, dashboardElement, cookieObject) => {
  buttonClickElement.addEventListener('click', ()=>{
      cookieObject.cookieReset();
      updateClicker(dashboardElement, cookieObject);
  })
}


const myCookie = new Cookie();
const dashboardElement = document.querySelector('.dashboard_cookiecounter');
const buttonClickElement = document.querySelector('.cookie_clicker');
const buttonResetElement = document.querySelector('.cookie_reset');



makeCookieClickerButton(buttonClickElement, dashboardElement, myCookie);
updateClicker(dashboardElement, myCookie);
resetClicker(buttonResetElement, dashboardElement, myCookie);