<template>
  <transition name="fade">
    <div class="fixed z-0 inset-0 overflow-y-auto" v-if="value" style="background: rgba(0,0,0,.5)">
        <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
        <div
            @click="closeDialog"
            class="fixed inset-0 transition-opacity"
            aria-hidden="true"
        >
            <div class="absolute inset-0"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true" >&#8203;</span>
        <div :class="{'shakeX':bounceIn}" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
            <slot></slot>
        </div>
        </div>
    </div>
  </transition>
</template>

<script>

export default {
    name: "Dialog",
    props: {
        value: {
            type: Boolean
        },
        persistent: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            bounceIn: false
        }
    },
    methods: {
        closeDialog() {
            if(!this.persistent) {
                this.$emit('input',false);
                return;
            }
            this.bounceIn = true;
            setTimeout(() =>  this.bounceIn = false, 400)
        }
    }
};
</script>

<style scoped>
     .shakeX {
        animation: .2s shakeX ease-out;
        animation-iteration-count: 2;
    }
    @keyframes shakeX {
        0%   { transform: translateX(0); }
        50%  { transform: translateX(-10px); }
        100% { transform: translateX(0); }
    }
</style>