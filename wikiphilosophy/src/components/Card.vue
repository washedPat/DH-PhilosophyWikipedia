<template>
    <div class="card">
        <h4>{{ title.replace("_", " ") }}</h4>
        <a :href="link"
        target="_blank"
        >{{ link }}</a>
        <br>
        <span v-if="title != 'Philosophy'" 
        class="arr"
        >&darr;</span>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        title: String,
        link: String
    },
    methods: {
        slideOut: function() {

        }
    }
}
</script>

<style scoped>
div.card {
    width: 40vh;
    height: 12vh;

    margin: 1vh;

    border-radius: 10px;

    text-align: center;
    font-family: sans-serif;

    animation-duration: 0.35s;
    animation-name: slidein;

    background-color: #FAFAFA;
}

div.card.slideright {
    animation-name: slideout;
}

h4 {
    font-weight: normal;
    font-size: 1.15rem;
}

a {
    text-decoration: none;
    color: #36c;
}

a:hover {
    color: #35b;
}

span.arr {
    font-weight: 500;
    font-size: 1.5rem;
}

@keyframes slidein {
  from {
    margin-left: -120%;
  }

  to {
    margin-left: 0%;
  }
}

@keyframes slideout {
  from {
    margin-left: 0%;
  }

  to {
    margin-left: 130%;
  }
}
</style>