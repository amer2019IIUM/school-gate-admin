<template>
  <v-navigation-drawer
    v-model="isSelectedChild"
    color="teal lighten-4"
    right
    app
  >
    <v-img
      height="140"
      temporary
      class="pa-4"
      src="data:image/jpeg;base64,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"
    >
    </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="[icon, text, route] in links" :key="icon" link>
        <router-link
          style="text-decoration: none; color: inherit;"
          :to="{ name: route }"
        >
          <v-list-item-icon>
            <v-icon style="color:teal">{{ icon }} </v-icon>
          </v-list-item-icon>

          <span style="color:teal"> {{ text }} </span>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      isSelectedChild: this.$props.drawer,
      links: [
        ["mdi-home", "الصفحة الرئيسية", "dashboard"],
        ["mdi-sd", "الطلاب", "student-page"],
        ["mdi-s", "المعلمين", "teacher-page"],
        ["mdi-f", "المدارس", "school-page"],
        ["mdi-g", "المراكز", "center-page"],
        ["mdi-h", "الفصول", "grade-page"],
      ],
    };
  },

  watch: {
    drawer: function() {
      this.isSelectedChild = this.$props.drawer;
    },
  },
};
</script>

<style scoped></style>
