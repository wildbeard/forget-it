<template>
    <div class="modal">
        <div class="modal__wrapper">
            <div class="modal__container">
                
                <div class="modal__header py-3 px-4 relative">
                    <slot name="modal_header">
                        <button @click="$emit('close', modal_id)" class="close-btn appearance-none absolute text-2xl leading-none outline-none">&times;</button>
                    </slot>
                </div>

                <div class="modal__body">

                    <slot name="modal_body"></slot>
                    
                </div>

                <div v-if="hasSlot('modal_footer')" class="modal__footer py-3 px-4">
                    <slot name="modal_footer"></slot>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: [
            'modal_id',
        ],
        data() {
            return {
                
            }
        },
        computed: {

        },
        methods: {
            hasSlot(slot) {
                return this.$slots[slot] || this.$scopedSlots[slot];
            }
        }
    }
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s ease;
    &--dark {
        color: hsl(0, 0, 92.5%);
        .modal__container {
            background-color: #1e1f26;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.55);
        }
    }
    &--large {
        .modal__container {
            width: 600px;
        }
    }
    &--medium {
        .modal__container {
            width: 420px;
        }
    }
    &__container {
        position: relative;
        width: 300px;
        margin: 0 auto;
        background-color: #f2f2f2;
        border-radius: 2px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.45);
        z-index: 999;
        &--large {
            width: 800px;
        }
    }
    .close-btn {
        top: .65rem;
        right: 1rem;
    }
}
</style>