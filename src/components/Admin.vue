<template>
  <div>
    <BarAdmin/>
    <v-data-table
        :headers="headers"
        :items="reserveItem"
        class="elevation-1"
      >

      <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>จัดการข้อมูล</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  @click="openDialog('add', defaultItem)"
                >
                  เพิ่มข้อมูล
                </v-btn>
    
          </v-toolbar>
        </template>

      <template v-slot:[`item.actions`] = "{ item }">
          <v-btn small outlined @click="openDialog('edit', item)" color="blue">
          <v-icon>
            mdi-pencil
          </v-icon>
          </v-btn>
          <v-btn small outlined @click="deleteItem(item)" color="red" class="ml-2">
          <v-icon>
            mdi-delete
          </v-icon>
          </v-btn>
        </template>

      <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
      <v-dialog
              v-model="dialogCreate"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <!-- เพิ่มข้อมูล -->
                <v-card-text>    
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="userId"
                          label="id"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="reserveDate"
                          label="วันที่จอง"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="areaId"
                          label="พื้นที่"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
    
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    ยกเลิก
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save(formTitle)"
                  >
                    บันทึกข้อมูล
                  </v-btn>
                </v-card-actions>

              </v-card>
            </v-dialog>

            <!-- ลบข้อมูล -->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">ตุณต้องการลบข้อมูลนี้ในตารางใช่ หรือ ไม่?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">ยกเลิก</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">ตกลง</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>

    </div>
    </template>
  <script>
    
import BarAdmin from "@/components/BarAdmin.vue"

export default {
      data: () => ({
        reserveId: '',
        reserveDate: '',
        userId: '',
        areaId: '',
        dialogCreate: false,
        dialogDelete: false,
        headers: [
          {
            text: 'ไอดี',
            align: 'start',
            sortable: false,
            value: 'user.userId'
          },
          
          { text: 'วันที่จอง', value: 'reserveDate' },
          { text: 'พื้นที่จอง', value: 'area.areaName' },
          { text: 'จัดการ', value: 'actions', sortable: false }
        ],
        reserveItem: [],
        editedIndex: -1,
        editedItem: {
          userId: '',
          reserveDate: 0,
          areaId: 0
        },
        defaultItem: {
          userId: '',
          reserveDate: 0,
          areaId: 0
        },
        formTitle: '',
        idreserve: '',
        idforDelete: ''
      }),
    
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        }
      },
    
      created () {
        this.initialize()
      },
  components: {
    BarAdmin
  },

  methods: {
        async initialize () {
          this.reserveItem = []
          try {
            var data = await this.axios.get('http://localhost:8000/reserve')
            console.log('data reserve ====>', data)
            this.reserveItem = data.data
            console.log(reserveItem)
          } catch (error) {
    
          }
        },
        openDialog (Action, item) {
          this.formTitle = ''
          if (Action === 'add') {
            this.dialogCreate = true
            this.formTitle = 'เพิ่มข้อมูล'
            this.editedItem = item
          } else {
            this.formTitle = 'แก้ไขข้อมูล'
            this.dialogCreate = true
            this.userId = item.userId
            this.reserveDate = item.reserveDate
            this.areaId = item.areaId
            this.idreserve = item.id
          }
        },
    
        editItem (item) {
          console.log('item select', item)
          this.editedIndex = this.reserveItem.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
    
        deleteItem (item) {
          this.idforDelete = item.id
          this.dialogDelete = true
        },
    
        async deleteItemConfirm () {
          try {
            var response = await this.axios.delete('http://localhost:8000/reserve/' + this.idforDelete)
            this.initialize()
          } catch (error) {
            console.log(error.message)
          }
          this.closeDelete()
        },
    
        close () {
          this.dialogCreate = false
          this.editedItem = []
          this.editedIndex = -1
          this.defaultItem = {
            userId: '',
            reserveDate: 0,
            areaId: 0
            
          }
        },
    
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
    
        async save (action) {
          var data = {
            userId: this.userId,
            reserveDate: this.reserveDate,
            areaId: this.areaId,
            
          }
          if (action === 'เพิ่มข้อมูล') {
            try {
              var dataResponse = await this.axios.post('http://localhost:8000/reserve', data)
              console.log('dataResponse ====>', dataResponse)
              this.close()
              this.initialize()
            } catch (error) {
              console.log(error.message)
            }
          } else {
            try {
              var dataResponse = await this.axios.put('http://localhost:8000/reserve/' + this.idreserve, data)
              console.log('dataResponse ====>', dataResponse)
              this.close()
              this.initialize()
            } catch (error) {
              console.log(error.message)
            }
          }
        }
      }
    }
    </script>
    
    <style>
    
    </style>