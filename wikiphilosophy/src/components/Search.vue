<template>
    <div id="Search" class="component">
        <p>Start your search...</p>
        <div>
            <input type="text" 
            v-model="pageTitle"
            placeholder="Enter the Wiki page title here"
            @keypress="enter"
            >
            <button
            @click="$emit('start-search', pageTitle)"
            >GO</button>
        </div>
        <div class="error"
        :style="errorStyle"
        >
            Invalid article title!
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data: function() {
        return {
            pageTitle: "",
            errorStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        enter: function(e) {
            if (e.keyCode == 13)
                this.$emit("start-search", this.pageTitle);
        },
        showError: function() {
            this.errorStyle.opacity = 0.75;
            this.errorStyle.animationName = "bounce";

            setTimeout(() => {
                this.errorStyle.opacity = 0;
                this.errorStyle.animationName = "";
            }, 1500)
        }
    }
}
</script>

<style>
div.error {
    font-family: sans-serif;
    color: white;

    margin-top: 0.5vh;
    padding: 0.2vh;

    width: auto;
    height: auto;

    border-radius: 3px;

    background-color: #E10000;

    transition: opacity 250ms ease;

    animation-delay: 300ms;
    animation-duration: 100ms;
    animation-iteration-count: 3;
    animation-timing-function: linear;
}

p {
    font-family: "Tinos", serif;
}

input {
    font-family: sans-serif;
    font-size: 1.15rem;

    border-radius: 3px;
    border: 1px solid silver;

    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
    padding-left: 0.25vw;
    padding-right: 0.25vw;

    box-sizing: border-box;
    width: 20vw;
    height: 3.5vh;

    outline: none;
}

button {
    font-family: sans-serif;
    font-size: 1.15rem;

    box-sizing: border-box;
    height: 3.5vh;

    position: absolute;

    border-radius: 3px;
    border: 1px solid #36c;

    background-color: #36c;
    color: white;

    outline: none;
}

button:hover {
    cursor: pointer;
    background-color: #35b;
}

@keyframes bounce {
    from {
        margin-left: 0;
    }

    25% {
        margin-left: 1.5%;
    }

    50% {
        margin-left: 0;
    }

    75% {
        margin-left: -1.5%;
    }

    to {
        margin-left: 0;
    }
}
</style>