<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车( {{length}} )</div>
    </nav-bar>
    <cart-list/>
    <cart-botton-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import CartList from "./childComps/CartList"
import CartBottonBar from "./childComps/CartBottonBar"

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottonBar
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // }

    // mapGetters 辅助函数仅仅是将store中的getter映射到局部计算属性 
    // 两种语法：
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.cart{
  height: 100vh;
}
</style>