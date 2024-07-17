const pyPilotUrl = () => {
  const storageValue = localStorage.getItem('pyPilotUrl');
  return storageValue ? storageValue : 'http://192.168.123.254:8000';
}

const signalKHost = () => {
  const storageValue = localStorage.getItem('signalKUrl');
  return storageValue ? storageValue : '192.168.123.254';
}

const signalKPort = () => {
  const storageValue = localStorage.getItem('signalKPort');
  return storageValue ? +storageValue : 3000;
}

export const environment = {
  pyPilotUrl: pyPilotUrl(),
  signalKHost: signalKHost(),
  signalKPort: signalKPort(),
  fixValues: false
};
