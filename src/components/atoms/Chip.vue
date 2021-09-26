<template>
    <button :class="{ 'bg-indigo-custom-300': isActive }" class="bg-indigo-custom-100 py-1 text-xs px-2 rounded-full text-white">
        <slot>
            {{ label }}
            <i class="fal fa-times ml-1 hover:text-red-400"></i>
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        }
    }
}
</script>