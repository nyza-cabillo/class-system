<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <!--<v-app-bar class="px-3" color="green-lighten-2">
        <v-spacer></v-spacer>

         <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn> 
      </v-app-bar>-->

      <v-main>
        <v-img src="img/bg.jpg">
          <v-container>
            <v-row class="d-flex justify-center">
              <v-col cols="12" md="6">
                <v-card class="mx-auto" prepend-icon="mdi-account" color="green-darken-3">
                  <template v-slot:title>
                    <span class="font-weight-black">Cacao Disease <br />Classification System</span>
                  </template>

                  <v-card-text class="bg-surface-light pt-4">
                    <v-form fast-fail @submit.prevent>
                      <v-text-field label="Email" variant="outlined"></v-text-field>

                      <v-text-field
                        label="Password"
                        type="password"
                        variant="outlined"
                      ></v-text-field>

                      <v-text-field label="Role" type="text" variant="outlined"></v-text-field>

                      <v-btn class="mt-2" type="submit" block color="green-darken-3">Login</v-btn>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-main>

      <!-- <v-footer color="green-lighten-2" border app>copyright2025</v-footer> -->
    </v-app>
  </v-responsive>
</template>
