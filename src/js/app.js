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

const buttonClickElement = document.querySelector('.cookie_clicker');
const dashboardElement = document.querySelector('.dashboard_cookiecounter');
const myCookie = new Cookie();

makeCookieClickerButton(buttonClickElement, dashboardElement, myCookie);
updateClicker(dashboardElement, myCookie);