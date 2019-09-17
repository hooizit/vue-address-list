<template>
  <main>
    <section class="section">
      <header>
        <router-link tag="a" class="is-pulled-left" to="/">
          <span class="icon">
            <i class="fas fa-3x fa-times"></i>
          </span>
        </router-link>
      </header>
    </section>
    <section class="section">
      <form @submit="addCompany">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Компания</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="newCompany.companyName" />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Страна</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="newCompany.country" />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Область</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="newCompany.state" />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Город</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="newCompany.city" />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Адрес</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="newCompany.address" />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input type="submit" class="button is-primary" value="Сохранить" />
                <router-link class="button" tag="a" to="/">Отмена</router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import apiService from "../api-service";
export default {
  data() {
    return {
      newCompany: {
        companyName: null,
        country: null,
        state: null,
        city: null,
        address: null
      }
    };
  },
  methods: {
    addCompany: function(e) {
      apiService.addCompany(this.newCompany);
      this.newCompany.companyName = null;
      this.newCompany.country = null;
      this.newCompany.state = null;
      this.newCompany.city = null;
      this.newCompany.address = null;
      e.preventDefault();
    }
  }
};
</script>