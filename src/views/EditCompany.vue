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
      <form @submit.prevent="editCompany">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Компания</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" v-model="company.name" />
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
                <input class="input" type="text" v-model="company.country" />
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
                <input class="input" type="text" v-model="company.state" />
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
                <input class="input" type="text" v-model="company.city" />
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
                <input class="input" type="text" v-model="company.address" />
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
  name: "editCompany",
  data() {
    return {
      id: this.$router.currentRoute.params["id"],
      company: {},
      saved: false
    };
  },
  async created() {
    const res = await apiService.getCompany(this.id);
    this.company = res.data;
  },
  methods: {
    editCompany() {
      apiService.updateCompany(this.id, this.company);
    }
  }
};
</script>