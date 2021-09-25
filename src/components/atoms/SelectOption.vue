<template>
    <li @click="$emit('chooseOne', label)" class="text-gray-900 cursor-default select-none relative py-2 hover:bg-gray-100 px-4" id="listbox-option-0" role="option">
        <span class="font-normal block truncate">  {{ label || 'Option here' }} </span>
    </li>
</template>

<script>
export default {
    props: {
        option: {
            type: [Object, String],
            require: true
        },
        itemText: {
            type: String,
            default: () => 'name'
        }
    },
    computed: {
        label() {
            const isObject = this.option != null && this.option.constructor.name === "Object"
            return isObject ? this.option[this.itemText] : this.option;
        }
    }
}
</script>

<style>

</style>