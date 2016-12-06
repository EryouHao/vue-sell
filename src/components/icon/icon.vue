<template>
  <span class="icon" :class="[iconSize,iconClass]"></span>
  <!-- class="decrease" -->
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    type: {
      type: Number
    },
    size: {
      type: String
    }
  },
  computed: {
    iconSize() {
      return 'icon-' + this.size;
    },
    iconClass() {
      return this.classMap[this.type];
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .icon
    display: block
    width: 100%
    height: 100%
    background-size: 100% 100%
    background-repeat: no-repeat
  .icon-1
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')
  .icon-2
    &.decrease
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.guarantee
      bg-image('guarantee_2')
    &.invoice
      bg-image('invoice_2')
    &.special
      bg-image('special_2')
  .icon-3
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.guarantee
      bg-image('guarantee_3')
    &.invoice
      bg-image('invoice_3')
    &.special
      bg-image('special_3')
  .icon-4
    &.decrease
      bg-image('decrease_4')
    &.discount
      bg-image('discount_4')
    &.guarantee
      bg-image('guarantee_4')
    &.invoice
      bg-image('invoice_4')
    &.special
      bg-image('special_4')    
</style>
