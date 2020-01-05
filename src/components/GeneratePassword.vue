<template>
    <modal modal_id="gen-password" @close="$emit('close', 'gen-password')">

        <h2 slot="modal_header" class="text-2xl text-indigo-200">Generate Password</h2>
        
        <div slot="modal_body">

            <div class="password-output py-4 px-6">
                <input type="text" v-model="password" class="appearance-none focus:outline-none w-full bg-gray-800 rounded py-1 px-3 text-xl" />
            </div>

            <div class="password-length py-4 px-6">
                <span class="text-xl">Length:</span> <span class="text-sm">{{ password_length }}</span>
                <input type="range" v-model="password_length" :min="min_length" :max="max_length" @change="generatePassword" class="appearance-none block w-full h-1 my-4 bg-indigo-300 outline-none slider-thumb" />
            </div>
            
            <div class="password-options py-4 px-6 flex">

                <div class="text-lg mr-4">
                    <input type="checkbox" id="letters" v-model="options.letters" @change="generatePassword" />
                    <label for="letters">Letters</label>
                </div>

                <div class="text-lg mr-4">
                    <input type="checkbox" id="numbers" v-model="options.numbers" @change="generatePassword" />
                    <label for="numbers">Numbers</label>
                </div>

                <div class="text-lg mr-4">
                    <input type="checkbox" id="special" v-model="options.special" @change="generatePassword" />
                    <label for="special">Special</label>
                </div>
                
            </div>

            <div class="password-generate py-4 px-6 bg-gray-800">
                <button @click="generatePassword" class="rounded py-2 px-3 bg-indigo-800 font-bold">Generate Password</button>
            </div>

        </div>

    </modal>
</template>

<script>
    import Modal from './containers/Modal.vue';
    import { generatePassword } from '@/lib/PasswordGenerator.js';

    export default {
        name: 'GeneratePasswordModal',
        components: {
            Modal
        },
        data() {
            return {
                show_modal: false,
                password_length: 12,
                min_length: 6,
                max_length: 32,
                password: '',
                options: {
                    letters: true,
                    numbers: false,
                    special: false,
                },
            }
        },
        mounted() {
            this.generatePassword();
        },
        methods: {
            generatePassword() {
                this.password = generatePassword(this.password_length, this.options);
            }
        }
    }
</script>

<style lang="scss" scoped>
.slider-thumb::-webkit-slider-thumb {
    @apply appearance-none w-6 h-6 rounded-full bg-indigo-700 cursor-pointer;
}
  
.slider-thumb::-webkit-slider-thumb:hover {
    @apply bg-indigo-800;
}
.password-options {
    div {
        display: inline-block;
        label {
            font-weight: 400;
            letter-spacing: 0.5px;
            cursor: pointer;
        }
    }
    input[type="checkbox"] {
        margin: 0 5px 0 0;
        vertical-align: middle;
    }
}
.password-generate {
    text-align: right;
}
button {
    appearance: none;
    -webkit-appearance: none;
    color: rgba(255, 255, 255, 0.78);
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
}
</style>