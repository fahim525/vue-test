<template>
    <button class="flex-shrink flex items-center text-xs px-2 py-1 capitalize rounded-full border-2 border-gray-200  text-white">
        <slot>
            <i class="mr-1 text-xs" :class="iconClass"></i>
            {{ label }}
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        },
        iconClass: {
            type: String
        }
    }
}
</script>