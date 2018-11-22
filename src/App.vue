<template>
  <v-app id="flight-eye" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action @click="logIt('loggit!')">
            <v-icon>airplanemode_active</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/airportinput">
              Flight Monitoring
              </router-link> 
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>airport_shuttle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <router-link to='/numbers'>
            <v-list-tile-title>
              Numbers
            </v-list-tile-title>
              </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>mid-account-multiple-outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <router-link to='/timeline'>
            <v-list-tile-title>
              Timeline
            </v-list-tile-title>
              </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Flight Eye</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-space-around column align-center>

          <router-view />
          
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    logIt(message) {
      console.log(message);
    }
  }
};
</script>