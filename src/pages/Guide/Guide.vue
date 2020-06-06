<template>
    <div class="guide">
      <h2>GUIDE</h2>

      <h3 class="title">Vue: <code>2.6.11</code></h3>
      <h3 class="title">Vuex: <code>3.1.2</code></h3>
      <h3 class="title">Bootstrap: <code>4.1.1</code></h3>

      <!-- ========================================== -->
      <!-- ========================================== -->

      <h3 class="title">Base Date Picker: <code>1.5.4</code></h3>
      <p>Value: <code>{{ pickerData.value || "Nope"}}</code></p>
      <base-date-picker
        :ref="'picker'"
        :date="pickerData.value"
        :label="'Date Label:'"
        :placeholder="'DD/MM/YYYY'"
        :allow-clear-button="true"
        @cleared="pickerData.value = ''"
        @selected="dateValue => pickerData.value = dateValue"
      />

      <!-- ========================================== -->
      <!-- ========================================== -->

      <h3 class="title">Base Validate Input: <code>2.2.3</code></h3>
      <b-form @submit.prevent="validateSubmit">
        <p>Error: <code>{{ errors }}</code></p>
        <b-form-group label="Name:">
          <b-form-input
            name="input-name"
            type="text"
            v-validate="'required'"
            v-model="validateData.name"
            :class="{ 'error-border': errors.has('input-name') }"
          />
        </b-form-group>
      </b-form>

      <!-- ========================================== -->
      <!-- ========================================== -->

      <h3 class="title">Base Drop Down:</h3>
      <b-form-group label="Name:">
        <base-dropdown
          :ref="'dropdown-ref'"
          :has-search="true"
          :placeholder="'Names'"
          :selected-default="''"
          :placeholder-input="'Enter suggest value'"
          :dropdown-items="[
            { value: 'Dai', label: 'Nguyen Van Dai' },
            { value: 'Dat', label: 'Nguyen Van Dat' },
            { value: 'Dong', label: 'Nguyen Van Dong' }
          ]"
          @selected="$event => logger($event)"
        />
      </b-form-group>

      <!-- ========================================== -->
      <!-- ========================================== -->

      <h3 class="title">Base Modal:</h3>
      <button
        class="btn btn-primary"
        @click="$refs['modal-ref'].$refs['modal-name'].show()"
      >
        show modal
      </button>
      <base-modal
        :ref="'modal-ref'"
        :modal-name="'modal-name'"
        :modal-title="'modal title'"
        @hidden="$refs['modal-ref'].$refs['modal-name'].hide()"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit tempore earum odio aspernatur maxime tenetur laborum neque culpa quidem nisi asperiores doloribus hic illum corrupti quis doloremque commodi repudiandae natus porro quaerat suscipit, ex aliquam provident. Ex molestiae architecto quos sapiente veritatis suscipit? Eveniet quod maiores debitis enim quas, quaerat eos? Unde tenetur aliquid ab, alias tempore repellat necessitatibus totam ullam animi soluta. Nulla iste dolorem voluptates facere maxime ex, quas dignissimos reiciendis! Harum veritatis fugiat, esse quisquam culpa animi facere consequatur rem amet corrupti officia reiciendis, optio minima facilis unde. Praesentium pariatur dignissimos inventore vero, nihil corporis explicabo! Quis ad tempore commodi cupiditate temporibus minima deserunt laboriosam blanditiis recusandae neque sed ea numquam quibusdam, nesciunt, omnis tenetur eligendi officia magni enim suscipit nemo. Quas, quaerat! Natus corporis quam quisquam</p>
        <button
          class="btn btn-primary"
          @click="$refs['modal-ref'].$refs['modal-name'].hide()"
        >
          hide modal
        </button>
      </base-modal>

      <!-- ========================================== -->
      <!-- ========================================== -->

      <h3 class="title">Base Data Table:</h3>
      <base-data-table
        @sort-table="$event => logger($event)"
        :table-list="tableData.tableData"
        :table-columns="tableData.tableColumns"
        :table-empty-label="tableData.tableEmptyLabel"
      >
        <template slot-scope="props" slot="download">
          <a href="javascript:" @click="logger('something')">
            This is slot: 
            <br/>
            <code>{{ props }} </code>
          </a>
        </template>
      </base-data-table>
      <base-paging
        :page-id="2"
        :total-items="12"
        :items-per-page="10"
        @go-to-page="$event => logger($event)"
      />
    </div>
</template>

<script>
import BaseModal from "@/components/Base/BaseModal/BaseModal"
import BaseDatePicker from "@/components/Base/BaseDatePicker/DatePicker"
import BaseDataTable from '@/components/Base/BaseDataTable/BaseDataTable'
import BasePaging from '@/components/Base/BasePaging/BasePaging'
import BaseDropdown from '@/components/Base/BaseDropdown/Dropdown'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Guide',

  components: {
    BaseModal,
    BaseDataTable,
    BasePaging,
    BaseDatePicker,
    BaseDropdown
  },

  data() {
    return {
      pickerData: {
        value: ""
      },

      validateData: {
        name: "Nguyen Van Dai"
      },

      tableData: {
        tableData: [{
          "fileName": "Enrolled Account_2019-Nov-20.csv",
          "typeOfReport": "Enrolled Account",
          "createdDate": "2019 Nov 22",
          "tableColumns": [{
              "label": "File Name",
              "keyMapping": "fileName"
            },
            {
              "label": "Type of report",
              "keyMapping": "typeOfReport"
            },
            {
              "label": "Created date",
              "keyMapping": "createdDate"
            },
            {
              "label": "",
              "keyMapping": "download"
            }
          ],
          "download": "Download"
        },
        {
          "fileName": "Transaction_2019-Nov-20.csv",
          "typeOfReport": "Transaction",
          "createdDate": "2019 Nov 22",
          "tableColumns": [{
              "label": "File Name",
              "keyMapping": "fileName"
            },
            {
              "label": "Type of report",
              "keyMapping": "typeOfReport"
            },
            {
              "label": "Created date",
              "keyMapping": "createdDate"
            },
            {
              "label": "",
              "keyMapping": "download"
            }
          ],
          "download": "Download"
        }],

        tableColumns: [{
          "label": "File Name",
          "keyMapping": "fileName"
        }, {
          "label": "Type of report",
          "keyMapping": "typeOfReport"
        }, {
          "label": "Created date",
          "keyMapping": "createdDate"
        }, {
          "label": "",
          "keyMapping": "download"
        }],

        tableEmptyLabel: 'No report found from <b>16 Feb 2020</b> to <b>17 Feb 2020</b>'
      }
    }
  },

  created() {
      const dataSend = { url: "/data/test.json" };
      this.getTestData(dataSend);
  },

  computed: { ...mapState(["dataTest"]) },

  methods: {
    ...mapActions(["getTestData"]),

    logger(msg) { 
      console.log(`msg: ${msg}`);
    },

    validateSubmit() {
      this.$validator.validateAll().then(valid => {
        if(valid) {
          alert("OK");

        } else {
          alert("FAIL");

        }
      });
    }
  }
}
</script>

<style scoped>
  .guide { padding: 30px 0;}
  .title { padding: 40px 0 20px; font-weight: 600; }
</style>
