<template>
  <div>
    <v-card color="teal" dark class="justify-center">
      <v-card-title primary-title class="justify-center">
        قائمة الطلاب</v-card-title
      >
    </v-card>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="بحث"
          single-line
          hide-details
        >
        </v-text-field>
        <v-btn color="teal" class="ma-2 white--text">
          اضافة طالب
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "اسم الطالب",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "بلد الانتساب", value: "calories" },
        { text: "المركز", value: "fat" },
        { text: "الصف", value: "carbs" },
      ],
      desserts: [
        {
          name: "عامر",
          calories: "استراليا",
          fat: "سيدني",
          carbs: "الاول متوسط",
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "صالح",
          calories: "استراليا",
          fat: "سيدني",
          carbs: "الاول متوسط",
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "علوش",
          calories: "استراليا",
          fat: "سيدني",
          carbs: "الاول متوسط",
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "هند",
          calories: "استراليا",
          fat: "سيدني",
          carbs: "الاول متوسط",
          protein: 4.3,
          iron: "8%",
        },
      ],
    };
  },
};
</script>
