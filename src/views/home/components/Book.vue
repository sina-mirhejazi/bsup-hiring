<template functional>
<div class="card card-l-1 book-card">
  <div class="book-card__image card-l-3"
       :style="{ backgroundImage: `url(${props.book.cover_url})` }">
  </div>

  <div class="book-card__content">
    <h4 class="text-primary">
      {{props.book.title}}
    </h4>
  </div>
  <div class="book-card__footer m-t-15">
    <div class="text-secondary">
      <font-awesome-icon icon="user-alt"/> {{props.book.author}}
    </div>
    <div class="text-secondary">
      <font-awesome-icon icon="hand-holding-usd"/> {{props.book.price}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.book-card {
  width: 300px;
  padding: 0 25px 25px;
  margin-top: 200px;
  flex: 1;

  &__image {
    width: 230px;
    height: 320px;
    background-size: cover;
    background-position: center;

    border-radius: 10px;
    margin: -150px 10px 20px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
