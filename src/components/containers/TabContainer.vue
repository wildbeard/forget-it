<template>
    
    <div class="tabs">

        <div class="tabs__header flex">

            <div class="tabs__tab" :class="{ 'tabs__tab--active': active_tab === tab.id }" v-for="tab in tab_headers" :key="tab.id" @click="changeTab(tab.id)">
                <div class="tab__header">{{ tab.text }}</div>
            </div>

        </div>

        <div class="tabs__content">
            <slot name="tabs_content"></slot>
        </div>

    </div>

</template>

<script>
    /* eslint-disable no-console */
    export default {
        name: 'TabContainer',
        props: [
            'tab_headers',
        ],
        data() {
            return {
                active_tab: null,
            }
        },
        mounted() {
            const active = this.tab_headers.find(t => t.default === true);
            this.active_tab = ( active ? active.id : this.tab_headers[0].id );
        },
        methods: {
            changeTab(tab) {
                this.active_tab = tab;
                this.$emit('changeTab', tab);
            }
        }
    }
</script>

<style lang="scss" scoped>
.tabs {
    width: 420px;
    &__header {

    }
    &__content {
        background-color: #1e1f26;
        @apply border-t border-indigo-700 text-gray-200;
    }
    .tabs__tab {
        width: 120px;
        text-align: center;
        @apply bg-gray-800 py-3 px-4 text-gray-100 cursor-pointer;
        &--active {
            @apply border-indigo-700 border-t border-r border-l;
        }
    }
}
</style>