<template>
  <div class="botton-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计: {{totalPrice}}
    </div>

    <div class="calculate">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

import { mapGetters } from 'vuex'

export default {
  name: "CartBottonBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter( item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.count * item.price
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      if(this.cartList.length === 0) return false
      // return !(this.cartList.filter(item => !item.checked).length) //遍历数组
      return !this.cartList.find(item => !item.checked) // 效率更高，找到一个未选中的就返回
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.botton-bar {
  height: 40px;
  position: relative;
  background-color: #eee;
  line-height: 40px;
  display: flex;
  font-size: 14px;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 20px;
  flex: 1;
}

.calculate{
  width: 90px;
  background-color:red;
  color: #fff;
  text-align: center;
}
</style>