<template>
  <section class="section">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Company</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of companiesList" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.country}}, {{item.state}}, {{item.city}}, {{item.address}}</td>
          <td>
            <router-link tag="a" :to="'/company/' + item.id">
              <span class="icon has-text-info">
                <i class="fas fa-edit"></i>
              </span>
            </router-link>
            <span class="icon has-text-danger">
              <i class="fas fa-trash"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: ["companiesList"]
};
</script>
