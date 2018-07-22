importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js')

var config = {
  apiKey: 'AIzaSyCKLn5apWE8-vwbUJhBuIrE4QH8kPTpzTw',
  authDomain: "pwa-hello-world-44e73.firebaseapp.com",
  databaseURL: "https://pwa-hello-world-44e73.firebaseio.com",
  projectId: "pwa-hello-world-44e73",
  storageBucket: "pwa-hello-world-44e73.appspot.com",
  messagingSenderId: "230950018536",
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler((payload) => {
  return self.registration.showNotification('hello world', {
    body: payload.data.body,
  })
})