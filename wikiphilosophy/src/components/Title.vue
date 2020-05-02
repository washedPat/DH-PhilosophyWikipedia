<template>
  <div id="Title" class="component">
    <h1>Steps to Philosophy</h1>
    <p><pre>Have you ever wondered how far away a Wikipedia page is from philosophy?
      Of course you have!

      Wonder no more: this amazing tool will tell you just how far away any given page is from
      Wikipedia's philosophy page!</pre>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
div.component {
  padding-bottom: 5vh;
}

h1, p, pre {
  font-family: "Tinos", serif;
  font-weight: normal;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.2rem;
}

p {
  margin: auto;
  width: 50vw;
}
</style>
