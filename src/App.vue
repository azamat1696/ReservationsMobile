


<template>
  <div id="app">

    <v-google-translate
      :defaultLanguageCode="defaultLanguageCode"
      :defaultPageLanguageCode="defaultPageLanguageCode"
      :fetchBrowserLanguage="false"
      @select="languageSelectedHandler"
    />
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <div ref="testSourceLanguage" class="notranslate">
      <div class="test">
        <h4>
          &nbsp; ①一个前端的自我修养<button
          class="cnblogs-toc-button"
          title="显示目录导航"
          aria-expanded="false"
        />
        </h4>

        <p>
          大学期间读过的书很多，豆瓣上记录过&nbsp;<a
          href="https://book.douban.com/people/hustskyking/collect"
          rel="noopener"
          target="_blank"
        >大学读的书</a
        >，从每本书都吸收点知识，所以总的知识储备其实是足够应付面试和一般需求的。不谦虚地说，我对前端硬知识的了解比较全面，这对我后续的提升奠定了坚实的基础。
        </p>
        <p id="p-2">知识体系和能力阶梯</p>
        <p>
          但是，毕业工作后，才发现，我学的那点东西远远不够。事实上，毕业之前的实习就深有体会了。
        </p>
        <p>
          为什么公司期望学生能够去实习？公司有自己的一套流程和技术体系，这一套东西是适配公司业务，方便各个工种之间协同作战的，而且每个公司的那一套都不太一样。刚毕业的同学最熟练的是对
          API
          的使用，而进入一个新环境后，会发现之前熟悉的那一套并不好使，有很多软件环境需要搭建，很多框架类库需要熟悉，还有一堆开发流程、上线流程、业务流程等等，这些东西会让一个自信的新人变得没有任何优越感。再加上分配的业务上还有几个小
          bug
          要修理，你几乎不会有自己的时间，学习变得变成了一种奢侈的事情。这也是给还在学校的同学一个警示，如果你要走技术这条路，基本功一定要打扎实，否则工作第一年你会相当吃力。
        </p>
        <p>
          百度实习那几个月对我的改变很大，象牙塔外拼搏三个月，个人阅历见长且不说，技术上的认识有了很大幅度的提升。当然，这要感谢公司。在公司里很容易知道哪些技术是公司需要的，哪些技能是业务中必须熟练掌握的。慢慢的，对技术就有了一定的甄别能力，曾经摆在心中的技术关键词是单线程、兼容性、冒泡捕获、事件代理等等，而现在变成了组件化、调试模式、自动化测试、前端集成环境等等，完全是两个知识维度上的分类。
        </p>
        <p>
          公司有不同层级的人，他们做的事情也有些差异，从这些差异中也能够体会出，自己跟这群人相比亮点和缺点分别是什么，如果需要提升还需要做些什么。越大的公司，对人能力的分级越明显，对个人来讲，也越容易找准自己的位置。知道自己水平在什么位置，也知道下一个水平在什么位置之后，我们需要的就只有努力了。
        </p>
        <p>&nbsp;</p>
        <p id="p-3">业务和新技术</p>
        <p>&nbsp;</p>
        <p>
          我从来不担心社区又出来几个什么新的技术名词，因为我已经给这些词安排了座位，就在脑海中。比如
          grunt、gulp、webpack
          等名词出来的时候，我没有忙着去深入学习，脑子里有一张大概的体系图，先把它们打包扔到脑子里命名为“工程化-打包类”，先存起来，等到需要的时候再去学习。实际上，我也是隔了三四个月才去学习和使用他们的。
        </p>
        <p>
          但是存进大脑之前，我会先简单了解这些工具：它能做什么？哪些场景可以用？大概如何用？社区在哪里？组件库如何搜索？三者之间的差异是什么？然后看看基本的
          API，这些工作花不了多少时间，但是对我后续深入了解它们提供了很大的帮助。我一直很认可这句话：「知道从哪里可以学到知识，就就学会了这个知识的一半」。
        </p>
        <p>
          所以我不担心有新技术出来，我不忙着学它，因为即便是我学会了，我的团队中也不会去用它，甚至业务中根本就用不上。对新知识做分类并且了解全貌，至于细节部分嘛，先放放。不要动不动就搞什么源码分析，React
          的 diff 算法，Vue 的
          MVVM，这种事情费事费力，其实稍微想象下就知道是个啥了么，中间的细节实现和实现原理不是不重要，而是暂时不重要。可以等到你闲下来或者预知业务中有需要时，再下工夫深入也不迟。
        </p>
        <p>
          大多数情况下，技术都是跟着需求的变化而变化的，需求从哪里来？当然是从你的团队和业务之中出来的。跟着业务走，你的方向不会错！
        </p>
        <p>小结</p>
        <p>
          &nbsp;可以说没有人系统地学过前端，大学没这门课，公司也没这门课。前端这个词是
          ajax
          流行时出现，它朝气蓬勃，发展却异常迅猛。要在技术这条路上走的长久，首先要把基础打扎实，然后才能能力和闲工夫循序渐进。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
  data: () => ({
    defaultLanguageCode: "en",
    defaultPageLanguageCode: "zh-CN",
  }),
  methods: {
    languageSelectedHandler(info) {
      console.log(">>>>>>", info);
    },
  },
  mounted() {
    setTimeout(() => {
      const testSourceLanguageEl = this.$refs.testSourceLanguage;
      console.log(testSourceLanguageEl);
      if (testSourceLanguageEl.classList.contains("notranslate")) {
        testSourceLanguageEl.classList.remove("notranslate");
      }
    }, 2000);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




<!--<template>-->
<!--  <router-view />-->
<!--</template>-->
<!--<script>-->
<!--import { defineComponent } from 'vue'-->
<!--export default defineComponent({-->
<!--  name: 'App',-->
<!--  mounted() {-->
<!--   this.$store.dispatch('AuthModule/initAuth')-->
<!--  }-->
<!--})-->
<!--</script>-->
<!--<style>-->
<!--body.body&#45;&#45;dark {-->
<!--  background-color: #263238 !important;-->
<!--  color: #ffffff !important;-->
<!--}-->
<!--body.body&#45;&#45;light {-->
<!--  background: #ffffff !important;-->
<!--  color: black !important;-->
<!--}-->
<!--</style>-->
