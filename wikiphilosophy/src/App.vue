<template>
  <div id="app">
    <Title></Title>
    <Search
    @start-search="startSearch($event)"
    ></Search>
    <div class="component" id="cards">
      <Card v-for="card in data"
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
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Search from "./components/Search.vue"
import Card from "./components/Card.vue"

export default {
  name: 'App',
  components: {
    Title,
    Search,
    Card
  },
  data: function() {
    return {
      // DELETE LATER
      rawdata: [
        {
          title: "Apple",
          link: "https://en.wikipedia.org/wiki/Apple",
          key: 0
        },
        {
          title: "Fruit",
          link: "https://en.wikipedia.org/wiki/Fruit",
          key: 1
        },
        {
          title: "Botany",
          link: "https://en.wikipedia.org/wiki/Botany",
          key: 2
        },
        {
          title: "Science",
          link: "https://en.wikipedia.org/wiki/Science",
          key: 3
        },
        {
          title: "Knowledge",
          link: "https://en.wikipedia.org/wiki/Knowledge",
          key: 4
        },
        {
          title: "Fact",
          link: "https://en.wikipedia.org/wiki/Fact",
          key: 5
        },
        {
          title: "Reality",
          link: "https://en.wikipedia.org/wiki/Reality",
          key: 6
        },
        {
          title: "Object of the Mind",
          link: "https://en.wikipedia.org/wiki/Object_of_the_mind",
          key: 7
        },
        {
          title: "Object (philosophy)",
          link: "https://en.wikipedia.org/wiki/Object_(philosophy)",
          key: 8
        },
        {
          title: "Philosophy",
          link: "https://en.wikipedia.org/wiki/Philosophy",
          key: 9
        },
      ],
      data: [],
      pageTitle: "",
      animationComplete: false,
      styleObj: {
        opacity: 0
      }
    }
  },
  methods: {
    startSearch: function(title) {
      this.pageTitle = title;

      //const url = `https://en.wikipedia.org/wiki/${title.replace(" ", "_")}`;
      // search

      this.moveElements();
    },
    moveElements: function() {
      const stepper = setInterval(() => {
        if (this.rawdata.length == 1) { // we end at one because Vue adds weird components to objects that mess up the loop
          clearInterval(stepper);
          this.animationComplete = true;
          this.styleObj.opacity = 1;
        }
        this.moveElement();
      }, 1000);
    },
    moveElement: function() {
      const step = this.rawdata.shift();
      this.data.unshift(step);
    }
  }
}
</script>

<style>
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
  font-family: sans-serif;
  font-weight: normal;

  transition: opacity 500ms ease;
}
</style>
