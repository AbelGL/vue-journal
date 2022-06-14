<template>
  <div>
    <Navbar />
    <div class="d-flex">
      <div class="col-4">
        <EntryList />
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "DayBookLayout",
  components: {
    Navbar: defineAsyncComponent(() =>
      import("@/modules/daybook/components/Navbar")
    ),
    EntryList: defineAsyncComponent(() =>
      import("@/modules/daybook/components/EntryList.vue")
    )
  }
};
</script>

<style>
</style>