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
        lastName: '',
        people: [{
          namePeople: 'Анна',
          lastNamePeople: 'Смирнова',
          positionPeople: 'Директор',
          imgPeople: 'media/people/people1.jpg',
        },
        {
          namePeople: 'Екатерина',
          lastNamePeople: 'Петрова',
          positionPeople: 'Стрижка кошек',
          imgPeople: 'media/people/people2.jpg',
        },
        {
          namePeople: 'Михаил',
          lastNamePeople: 'Масленников',
          positionPeople: 'Администратор',
          imgPeople: 'media/people/people3.jpg',
        },
        {
          namePeople: 'Мирослава',
          lastNamePeople: 'Назарова',
          positionPeople: 'Стрижка собак',
          imgPeople: 'media/people/people4.jpg',
        }
      ],
        services: [{
          imgService: 'media/pets/dogstr.jpg',
          nameService: 'Стрижка собаки',
          priceService: 2000,
        },
        {
          imgService: 'media/pets/catstr.jpg',
          nameService: 'Стрижка кошки',
          priceService: 2000,
        },
        {
          imgService: 'media/pets/dogman.jpg',
          nameService: 'Маникюр для собаки',
          priceService: 2000,
        },
        {
          imgService: 'media/pets/catman.jpg',
          nameService: 'Маникюр для кошки',
          priceService: 2000,
        }],
        social:[{
          id: '1',
          path: 'icon/vk.png',
        },
        {
          id: '2',
          path: 'icon/telegram.png',
        },
        {
          id: '3',
          path: 'icon/facebook.png',
        },
        {
          id: '4',
          path: 'icon/youtube.png',
        }],
        menuItem: ['Главная','Наши услуги','Акции', 'О нас'],
        cardAdvantages: [{
          title: 'Творческий процесс',
          text: 'В салонном груминге мастера получают простор для творчества - можно подобрать стрижку под особенности собаки, ее шерсти, фантазировать с креативом, создать целый образ. Словом, нести красоту в жизнь!'
        },
        {
          title: 'Гармония с собой',
          text: 'Большинство грумеров находят в груминге именно тот покой, релакс, который они не могли обрести на своей старой работе, например, в офисе. Животные, красота, полет творчества - такому богатству позавидуют представители многих профессий.'
        },
        {
          title: 'Исполнение детской мечты',
          text: 'Все мы в детстве мечтали кем-то стать, и работать с собачками-кошечками хотели многие. Не у всех сложилось - "животных" профессий мало, разве что ветеринар или зоотехник, и они не всем подходят. Но теперь все проще - груминг дает такую возможность!'
        },
        {
          title: 'Хороший заработок',
          text: 'Немаловажный аспект в наше сложное время.  Хотя, если в эту профессию люди идут именно за деньгами, у них не получается ничего. А вот те, кто увлечен грумингом по другим причинам, всегда добиваются успехов и хороших доходов. Вот такой парадокс.'
        },],
      }
    },
    methods: {
      inputChangedName() {
        this.Name = event.target.value.toUpperCase();
      },
      inputChangedLastName() {
        this.lastName = event.target.value.toUpperCase();
      },
    }
  })
});
// Vue.createApp(App)