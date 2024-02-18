// import { createApp } from './vendor/vue.esm-browser.js';
import { createApp } from "./vendor/vue.esm-browser.js";

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Создаем Vue приложение
const app = createApp({
  data() {
    return {
      searchText: '',
      emails: emails.map(email => ({ address: email, marked: false }))
    };
  },
  computed: {
    filteredEmails() {
      const searchQuery = this.searchText.toLowerCase();
      return this.emails.map(email => {
        const marked = email.address.toLowerCase().includes(searchQuery);
        return { ...email, marked };
      });
    }
  },
  methods: {
    handleSearch() {
      console.log('Search:', this.searchText);
    }
  }
});

app.mount('#app');
