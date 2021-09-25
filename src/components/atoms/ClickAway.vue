<template>
    <div
        @click="$emit('clickAway', false)"
        class="fixed inset-0 transition-opacity"
        aria-hidden="true"
    >
        <div class="absolute inset-0"></div>
    </div>
</template>