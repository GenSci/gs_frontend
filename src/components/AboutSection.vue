<template>
    <div class="container about-section">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AboutSection',

}
</script>   

<style lang="scss">
    .about-section {
        border-radius: 6px;
        box-shadow: 1px 2px 2px 3px #999;
        padding-top: 1em;
        padding-bottom: 1em
    }
</style>