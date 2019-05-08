<template>
<div class="modal" :class="{show: visibility}" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" v-if="title">{{title}}</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          @click="dismiss">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot/>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="dismiss">{{dismissButtonText}}</button>
        <button
          type="button"
          class="btn btn-primary"
          @click="confirm">{{confirmButtonText}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    dismissButtonText: {
      type: String,
      default: 'Close',
    },
    confirmButtonText: {
      type: String,
      default: 'Save',
    },
    title: {
      type: String,
      default: null,
    },
    visibility: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    dismiss() {
      this.$emit('dismiss');
      this.$emit('update:visibility', false);
    },
    confirm() {
      this.$emit('confirm');
      this.$emit('update:visibility', false);
    },
  },
};
</script>

<style lang="scss">
.modal {
  background-color: rgba(0, 0, 0, 0.4);

  &.show {
    display: block;
  }

  button.close {
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;

    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
  }
}
</style>
