<template>
  <section class="section">
    <div class="select">
      <form @submit.prevent="addCompany">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Выберите страну</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <select v-model="newCompany.selectedCountry">
                  <option v-for="(item, country) of locality" :key="country">{{country}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal" v-if="newCompany.selectedCountry.length > 0">
          <div class="field-label is-normal">
            <label class="label">Выберите область</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <select v-model="newCompany.selectedState">
                  <option
                    v-for="(item, state) of locality[newCompany.selectedCountry]"
                    :key="state"
                  >{{state}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal" v-if="newCompany.selectedState.length > 0">
          <div class="field-label is-normal">
            <label class="label">Выберите город</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <select v-model="newCompany.selectedCity">
                  <option
                    v-for="(item, index) of locality[newCompany.selectedCountry][newCompany.selectedState]"
                    :key="index"
                  >{{item}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal" v-if="newCompany.selectedCity.length > 0">
          <div class="field-label is-normal">
            <label class="label">Введите адрес</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="newCompany.address" />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal" v-if="newCompany.address.length > 0">
          <div class="field-label is-normal">
            <label class="label">Введите компанию</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="newCompany.name" />
              </div>
            </div>
          </div>
        </div>

        <input class="button is-prymary" type="submit" value="Сохранить" />
      </form>
    </div>
  </section>
</template>

<script>
import apiService from "../api-service";
export default {
  data() {
    return {
      locality: [],
      newCompany: {
        selectedCountry: "",
        selectedState: "",
        selectedCity: "",
        address: "",
        name: ""
      }
    };
  },
  async created() {
    const res = await apiService.getLocality();
    this.locality = res.data;
  },
  methods: {
    addCompany: function(e) {
      apiService.createCompany(this.newCompany);
      this.newCompany.name = "";
      this.newCompany.selectedCountry = "";
      this.newCompany.selectedState = "";
      this.newCompany.selectedCity = "";
      this.newCompany.address = "";
      e.preventDefault();
    }
  }
};
</script>