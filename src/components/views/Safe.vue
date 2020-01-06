<template>
    
    <div class="safe">

        <div class="safe__container py-4 px-6">

            <h3 class="text-2xl border-b border-indigo-700 mb-5">The Safe</h3>

            <ul>
                <li class="provider py-2 cursor-pointer" v-for="login in logins" :key="login.id">
                    <div class="flex">
                        <div class="provider__image mr-4"><div class="bg-indigo-800 rounded"></div></div>
                        <div class="provider__info">
                            <div class="font-bold pb-1">{{ login.provider }}</div>
                            <div class="text-gray-400">{{ login.username }}</div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>

    </div>

</template>

<script>
    export default {
        name: 'Safe',
        data() {
            return {
                logins: [
                    {
                        id: 1,
                        username: 'username',
                        password: 'password',
                        provider: "Facebook",
                        domain: 'facebook.com/login',
                    },
                    {
                        id: 2,
                        username: 'username',
                        password: 'password',
                        provider: "Gmail",
                        domain: 'mail.google.com/login',
                    },
                    {
                        id: 3,
                        username: 'username',
                        password: 'password',
                        provider: "Twitch",
                        domain: 'twitch.tv/login',
                    },
                    {
                        id: 4,
                        username: 'username',
                        password: 'password',
                        provider: "Twitter",
                        domain: 'twitter.com/login',
                    },
                    {
                        id: 5,
                        username: 'username',
                        password: 'password',
                        provider: "NelNet",
                        domain: 'nelnet.com/login',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.provider {
    &:hover {
        background-color: lighten(#1e1f26, 10%);
    }
    &__image {
        div {
            width: 60px;
            height: 40px;
        }
    }
    &__info {
        line-height: 1;
    }
}

</style>