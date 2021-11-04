<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3>الصفحة الرئيسية</h3>
    </v-subheader>
    <br />
    <v-row>
      <v-col cols="12">
        <v-alert dense text type="teal">
          تم تسجيلك بنجاح <strong>استاذ عامر عبدالله </strong>
        </v-alert>
        <v-row>
          <v-col
            lg="6"
            cols="12"
            v-for="(item, index) in activityLog"
            :key="index"
          >
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div>
                  <strong>{{ item.title }}</strong> <br />
                  <span>Last 3 weeks</span>
                </div>
                <v-avatar
                  size="60"
                  :color="item.color"
                  style="border: 3px solid #444"
                >
                  <span style="color: white">{{ item.amount }} +</span>
                </v-avatar>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-card color="teal" dark class="justify-center">
          <v-card-title primary-title class="justify-center">
            قائمة الطلاب</v-card-title
          >
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      activityLog: [
        {
          title: "مجموع الطلاب",
          amount: 50,
          icon: "mdi-account",
          color: "cyan lighten-3",
        },
        {
          title: "مجموع المعلمين",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "teal darken-2",
        },
        {
          title: "مجموع المراكز",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "blue-grey darken-1",
        },
        {
          title: "مجموع الفصول",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
      ],
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
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
  },
};
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
</style>
