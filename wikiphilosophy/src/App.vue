<template>
  <div id="app">
    <Title></Title>
    <Search
    @start-search="startSearch($event)"
    ref="searchComponent"
    ></Search>
    <LoadingIcon v-if="loading"
    ></LoadingIcon>
    <div class="component" id="cards">
      <Card ref="cardsComponent"
      v-for="card in data"
      :title="card.title"
      :link="card.link"
      :key="card.key"
      ></Card>
      <div id="search-data"
      :style="styleObj"
      >
        {{ pageTitle }} was {{ data.length - 1 }} steps away from Philosophy!
      </div>
    </div>
    <InfoBox></InfoBox>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Search from "./components/Search.vue"
import Card from "./components/Card.vue"
import InfoBox from "./components/Info.vue"
import LoadingIcon from "./components/Loading.vue"

export default {
  name: 'App',
  components: {
    Title,
    Search,
    Card,
    InfoBox,
    LoadingIcon
  },
  data: function() {
    return {
      rawdata: [],
      data: [],
      pageTitle: "",
      animationComplete: false,
      loading: false,
      styleObj: {
        opacity: 0
      }
    }
  },
  methods: {
    startSearch: async function(title) {
      this.loading = true;

      // Fix common mistakes w/ title
      this.pageTitle = title.trim();
      while (this.pageTitle.indexOf(" ") == 0)
        this.pageTitle = this.pageTitle.slice(1);

      const url = `https://en.wikipedia.org/wiki/${this.pageTitle.replace(" ", "_")}`;
      
      const data = { url };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await fetch("/api/findLink", options);
      const resObj = await response.json();

      this.loading = false;

      for (let i = 0; i < resObj.path.length; i++) {
        this.rawdata.push({
          title: resObj.path[i].slice(30).replace("_", " "),
          link: resObj.path[i],
          key: i
        });
      }
      const error = resObj.error;
      
      if (error) {
        this.$refs.searchComponent.showError();
        return;
      }

      if (this.data.length >= 1) {
        setTimeout(this.moveElements, 300 * this.data.length)
        this.clearElements();
      } else if (this.rawdata.length >= 1)
        this.moveElements();
    },
    clearElements: function() {
      this.animationComplete = false;
      this.styleObj.opacity = 0;
    
      const stepper = setInterval(() => {
        if (this.data.length <= 1) {
          clearInterval(stepper);
        }

        this.clearElement();
      }, 300);
    },
    clearElement: function() {
      const el = this.$refs.cardsComponent[0];
      el.$el.style.animationDuration = "0.15s";
      el.$el.className += " slideright";

      setTimeout(() => this.data.pop(), 150);
    },
    moveElements: function() {
      const stepper = setInterval(() => {
        if (this.rawdata.length <= 1) { // we end at one because Vue adds weird components to objects that mess up the loop
          clearInterval(stepper);
          this.animationComplete = true;
          this.styleObj.opacity = 1;
        }

        this.moveElement();
      }, 750);
    },
    moveElement: function() {
      const step = this.rawdata.shift();
      this.data.unshift(step);
    }
  }
}
</script>

<style>
body {
  overflow-x: hidden;
}

div.component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

div#cards {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
}

div#search-data {
  font-size: 1.25rem;
  font-family: "Tinos", serif;
  font-weight: normal;

  transition: opacity 500ms ease;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #FFFFFF;
}

::-webkit-scrollbar-thumb {
  background: #36c;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #35b;
}
</style>
