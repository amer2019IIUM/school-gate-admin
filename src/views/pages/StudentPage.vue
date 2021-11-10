<template>
  <div>
    <div v-if="$apollo.loading">loading.........</div>
    <div v-else>
      <v-card class="my-5" style="background-color:#DFF1EF">
        <v-container>
          <v-row>
            <v-col cols="3" md="4">
              <v-text-field label="بحث"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-select label="Item" required> </v-select>
            </v-col>
            <v-col cols="12" md="4" class="pt-6">
              <v-btn dark color="teal"> بحث </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-data-table :headers="headers" :items="students" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  إضافة طالب
                </v-btn>
              </template>

              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.passport"
                          label="الرقم الوطني"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          label="اسم الطالب"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.grade.center.name"
                          :items="[1, 2, 3, 5, 6]"
                          menu-props="auto"
                          label="المركز"
                          hide-details
                          single-line
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.grade.name"
                          :items="[1, 2, 3, 5, 6]"
                          menu-props="auto"
                          label="الصف"
                          hide-details
                          single-line
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.teams_email"
                          label="الايميل الخاص بتميز"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.phone_number_1"
                          label="رقم الجوال"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    الغاء
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    حفظ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >هل حقا تريد حذف هذا الطالب؟
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >الغاء</v-btn
                  >
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="deleteStudentConfirm"
                  >
                    نعم
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editStudent(item)" color="blue">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteStudent(item)" color="red darken-4">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import Students from "../../graphql/students/queries/students.gql";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "المركز", value: "passport" },
      {
        text: "اسم الطالب",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "المركز", value: "grade.center.name" },
      { text: "الصف", value: "grade.name" },
      { text: "إيميل الخاص بتيمز", value: "teams_email" },
      { text: "رقم الجوال", value: "phone_number_1" },
      { text: " ", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      passport: "",
      gender: "",
      password: "",
      grade: {
        name: "",
        center: {
          name: "",
        },
      },
      phone_number_1: "",
      teams_email: "",
      personal_email: "",
    },
  }),
  apollo: {
    students: {
      query: Students,

      update(data) {
        return data.students.data;
      },
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editStudent(std) {
      this.editedItem = Object.assign({}, std);
      console.log(std);
      this.dialog = true;
    },

    // eslint-disable-next-line no-unused-vars
    deleteStudent(id) {
      this.dialogDelete = true;
    },

    deleteStudentConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    save() {},
  },
};
</script>
