<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 10}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022, Jueves</span>
    </div>
    <div
      class="entry-description"
    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nihil quaerat qui tempore atque veritatis quae soluta officiis esse vitae natus architecto, quidem minima asperiores cupiditate repudiandae deleniti vero id.</div>
  </div>
</template>

<script>
export default {
  name: "Entry"
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all easer-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all easer-in;
  }
  .entry-description{
      font-size: 12px;
  }
}
</style>