<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ on }">
          <v-card color="yellow" class="todoBody">
              <v-container>
            <v-row>
                <v-col col="10">
              <v-card-title>
                {{ questList[0].name }}
              </v-card-title>
               <v-card-text>
                {{ questList[0].date[0] }}
                ~ {{ questList[0].date[1] }}
              </v-card-text>
                </v-col>
            
                <v-col col="2">
              <v-icon v-on="on">{{ "mdi-information-outline" }}</v-icon>
                </v-col>
            </v-row>
              </v-container>
          </v-card>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump'
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    questList: [
      {
        check: false,
        name: "리액트 공부하기",
        date: ["2020-01-20", "2020-01-22"],
        detail: ["구현하고 깃헙에 올리기.", "내용 정리하기"]
      },
      {
        check: false,
        name: "리액트 공부하기",
        date: ["2020-01-20", "2020-01-22"],
        detail: ["구현하고 깃헙에 올리기.", "내용 정리하기"]
      }
    ],
    dialog: false
  })
};
</script>

<style scoped>
.todoBody {
  width: -webkit-fill-available;
}
</style>
