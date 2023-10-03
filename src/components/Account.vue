<template>
  <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>

      <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
           
              <v-list-item-title>Admin</v-list-item-title>
           
          </template>

        </v-list-group>

      </v-list-group>
    </v-list>
  </v-card>
</template>