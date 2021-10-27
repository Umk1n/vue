function ready(f) {
  /in/.test(document.readyState) ? setTimeout('ready(' + f + ')', 9) : f();
}
ready(function() {
  var demo = new Vue({
    el: '#demo',
    data() {
      return {
        placeholderName: 'Введите имя',
        placeholderLastName: 'Введите фамилию',
        placeholderPhone: 'Введите номер',
        counter: 0,
        Name: '',
        lastName: ''
      }
    }
  })
});
// Vue.createApp(App)