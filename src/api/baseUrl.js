export default function getBaseUrl() {
  //const inDevelopment = window.location.hostname === 'localhost';
  //return inDevelopment ? 'http://localhost:3001/' : '/';

  //Removed in Prod build module,
  //as we are using an example of how to run a prod. build firstly on our local machine to check that things work
  return getQueryStringParamneterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParamneterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
