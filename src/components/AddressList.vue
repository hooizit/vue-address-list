<template>
  <section class="section">
    <div class="container">
      <div>
        <a class="button is-primary is-rounded">Add New</a>
      </div>
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
          <tr v-for="item of addressList" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.company}}</td>
            <td>{{item.country}}, {{item.state}}, {{item.city}}, {{item.address}}</td>
            <td>
              <span class="icon has-text-info">
                <i class="fas fa-edit"></i>
              </span>
              <span class="icon has-text-danger">
                <i class="fas fa-trash"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: ["addressList"]
};
</script>
