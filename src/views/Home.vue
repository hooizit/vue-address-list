<template>
  <div class="home">
    <AddressList :addressList="addressList" />
  </div>
</template>

<script>
import axios from "axios";
import AddressList from "@/components/AddressList.vue";

export default {
  name: "home",
  components: {
    AddressList
  },
  data() {
    return {
      addressList: []
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/data`);
      this.addressList = res.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
