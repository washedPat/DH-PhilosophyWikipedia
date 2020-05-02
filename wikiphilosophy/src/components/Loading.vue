<template>
    <div id="loading-circle" class="component"
    >
    </div>
</template>

<script>
export default {
name: "LoadingIcon",
}
</script>

<style>
div#loading-circle {
    z-index: 999;
    position: absolute;
    box-sizing: border-box;

    left: 47.5vw;

    width: 5vw;
    height: 5vw;

    border-radius: 50%;

    border-top: 0.6vw solid silver;
    border-bottom: 0.6vw solid silver;
    border-left: 0.6vw solid silver;
    border-right: 0.6vw solid #36c;

    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>