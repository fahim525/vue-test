<template>
    <div class="border border-gray-200 rounded-lg p-2">
        <div class="relative flex items-center gap-1 flex-wrap pr-10" style="min-height: 19px">
            <button v-for="(item, index) in selected" :key="index" class="bg-gray-100 py-1 text-xs px-2 rounded-full text-indigo-400">
                {{ item }}
                <i class="fal fa-times ml-1"></i>
            </button>

            <div class="absolute right-0 flex justify-end space-x-2">
                <button @click="selected = []" class="flex-shrink text-indigo-custom">
                    <i class="fal fa-times"></i>
                </button>
                <button @click="isShow = !isShow" class="flex-shrink text-indigo-custom">
                    <i class="far" :class="[isShow ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
                </button>
            </div>
        </div>
        
        <div class="relative">
            <ul v-if="isShow" class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md  text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                <li @click="selected.push('Tag 1')" class="text-gray-900 cursor-default select-none relative py-2 hover:bg-gray-100 px-4" id="listbox-option-0" role="option">
                    <span class="font-normal block truncate">  Tag 1 </span>
                </li>
                <li @click="selected.push('Tag 2')" class="text-gray-900 cursor-default select-none relative py-2 hover:bg-gray-100 px-4" id="listbox-option-0" role="option">
                    <span class="font-normal block truncate">  Tag 2 </span>
                </li>
                <li @click="selected.push('Tag 3')" class="text-gray-900 cursor-default select-none relative py-2 hover:bg-gray-100 px-4" id="listbox-option-0" role="option">
                    <span class="font-normal block truncate">  Tag 3 </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            selected: [
                'item 1', 'item 2', 'item 3', 'ite', 'item 5',
                'ite', 'item 2', ' 3', 'it', 'item 5', 'another ',
            ]
        }
    }
}
</script>

<style>

</style>