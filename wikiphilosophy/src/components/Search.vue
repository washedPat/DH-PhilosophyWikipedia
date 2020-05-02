<template>
    <div id="Search" class="component">
        <p>Start your search...</p>
        <div>
            <input type="text" 
            v-model="pageTitle"
            placeholder="Enter the Wiki page title here"
            >
            <button
            @click="$emit('start-search', pageTitle)"
            >GO</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data: function() {
        return {
            pageTitle: ""
        }
    }
}
</script>

<style>
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
}

button:hover {
    cursor: pointer;
}
</style>