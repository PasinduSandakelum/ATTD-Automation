$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify login for valid credentials",
  "description": "",
  "id": "login;verify-login-for-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have OrangeHRM application loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login with username \"Admin\" and password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to dashboard page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});