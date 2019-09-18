<template>
  <div class="home">
    <header>
      <section class="section">
        <router-link
          tag="a"
          class="button is-primary is-rounded is-pulled-left"
          to="/create-company"
        >Add New</router-link>
      </section>
    </header>
    <AddressList :companiesList="companiesList" :onDelete="deleteCompany" />
  </div>
</template>

<script>
import AddressList from "@/components/address-list.vue";
import apiService from "../api-service";

export default {
  name: "home",
  components: {
    AddressList
  },
  data() {
    return {
      companiesList: []
    };
  },
  async created() {
    const res = await apiService.getAllCompanies();
    this.companiesList = res.data;
  },
  methods: {
    deleteCompany(id) {
      apiService.deleteCompany(id);
      this.companiesList = this.companiesList.filter(el => el.id !== id);
    }
  }
};
</script>
