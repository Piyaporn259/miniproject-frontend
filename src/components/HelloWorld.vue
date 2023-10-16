<template>
  <div>
  <v-container >
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/market.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Marketplace space
        </h1>

        <h4>
          ยินดีต้องรับทุกท่าน ทุกท่านสามารถที่จะเลือกพื้นที่ขายของได้เลยโดยกดที่ปุ่มจองพื้นที่ขายของแล้วยืนยันการจอง ในส่วนของการชำระเงินจะสามารถชำระได้ที่ส่วนกลางของตลาดได้เลย
        </h4>


      </v-col>


      
    </v-row>
  </v-container>

 
</div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    admin: false,
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
      ],
    username: ''
  }),
  created () {
    this.$EventBus.$on('getUsername', this.getUsername)
    this.getUsername()
  },
  methods: {
    getUsername () {
      if (localStorage.getItem('username') !== null) {
        this.username = localStorage.getItem('username')
      }else
      {
        this.username = 'Vuetify'
      }
    }
  }
}
</script>
