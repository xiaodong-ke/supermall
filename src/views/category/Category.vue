<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
      <scroll id="tab-content">
        <tab-content-category />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabMenu from "./childComps/TabMenu";
import Scroll from "components/common/scroll/Scroll";
import TabContentCategory from "./childComps/TabContentCategory"

import { getCategory, getSubcategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      currentIndex: -1
    };
  },
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        console.log(res);
        
      });
    }
  },
  created() {
    getCategory().then(res => {
      // console.log(res)
      this.categories = res.data.category.list;
    });
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}

#tab-content {
  height: 100%;
  flex: 1;
}
</style>