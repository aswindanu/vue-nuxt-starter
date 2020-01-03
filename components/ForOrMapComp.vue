<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Id Card</div>
        <v-list-item-title class="headline mb-1">
          {{ firstname }}
        </v-list-item-title>
        <v-list-item-subtitle>
          last name:
          {{ lastname }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          mail:
          {{ email }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
        :style="{ backgroundImage: 'url(' + avatar + ')' }"
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: false
    },
    firstname: {
      type: String,
      required: false
    },
    lastname: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    }
  }
}
</script>
