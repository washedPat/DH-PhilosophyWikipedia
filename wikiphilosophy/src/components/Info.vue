<template>
    <div id="info">
        <span id="info-button"
        @click="click"
        >i</span>
        <div id="info-box"
        :style="styleObj"
        >
            <p>You may not of heard of this fact, but almost every Wikipedia page will eventually lead back to the Philosophy page!
            </p>
            <p>Cool, right?</p>
            <p>Our program uses an algorithm to traverse Wikipedia pages in a sequence until we find the Philosophy page.</p>
            <p>Then, we show the path we took to you!</p>
            <p>The website's style is, in part, inspired by Wikipedia's own style.</p>
            <p>Have fun and see all of your stops on the way to Philosophy! You may just learn something!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoBox",
    data: function() {
        return {
            styleObj: {
                opacity: 0
            }
        }
    },
    methods: {
        click: function() {
            this.styleObj.opacity = (this.styleObj.opacity == 0) ? 0.6 : 0;
        }
    }
}
</script>

<style>
div#info-box {
    z-index: 999;
    position: absolute;
    right: 0.1vw;
    top: 2.8vh;

    padding: 0.25vw;

    overflow-x: hidden;

    color: white;
    font-family: sans-serif;

    width: 25vw;
    height: auto;

    border-radius: 5px;

    background-color: #111111;
    opacity: 0.6;

    transition: opacity 200ms ease;
}

div#info-box>p, div#info-box>pre {
    position: relative;
    width: 100%;
    margin-bottom: 0.5vh;

    font-family: sans-serif;
    font-size: 0.8rem;

    word-wrap: normal;

    text-align: left;
}

span#info-button {
    position: absolute;
    right: 0.25vw;
    top: 0.25vh;

    height: 1rem;
    width: 1rem;

    text-align: center;

    border-radius: 50%;
    border: 1px solid black;

    font-family: "Tinos", serif;
}

span#info-button:hover {
    cursor: pointer;
}
</style>