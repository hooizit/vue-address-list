<template>
  <div class="home">
    <header>
      <section class="section">
        <router-link
          tag="a"
          class="button is-primary is-rounded is-pulled-left"
          to="/add-company"
        >Add New</router-link>
      </section>
    </header>
    <AddressList :companiesList="companiesList" :onDelete="deleteCompany" />
  </div>
</template>

<script>
import AddressList from "@/components/AddressList.vue";
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
      this.$router.go(); // ------------------
    }
  }
};
</script>
