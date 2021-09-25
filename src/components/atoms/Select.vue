<template>
  <div class="mb-2 relative">
        <button @click="isShow = !isShow" type="button" class="relative border border-gray-400 w-full rounded-full p-1 mb-2 bg-white flex items-center focus:outline-none focus:ring-1 focus:ring-indigo-custom focus:border-indigo-custom sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span class="block truncate flex-auto bg-gray-200 py-1 text-xs text-center text-indigo-400 rounded-full">
                {{ selected || placeholder }}
            </span>
            <span class="flex-shrink px-3 text-gray-400 pointer-events-none">
                <i class="far fa-chevron-down"></i>
            </span>
        </button>
        <transition
            name="fade"
        >
            <ul v-if="isShow" class="absolute z-10  w-full bg-white shadow-lg max-h-60 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                <ClickAway @clickAway="isShow = false" />
                <SelectOption
                    v-for="(item, index) in items"
                    :key="index"
                    @chooseOne="chooseOne"
                    :option="item"
                />
            </ul>
        </transition>
    </div>
</template>

<script>
import SelectOption from '@/components/atoms/SelectOption';
import ClickAway from '@/components/atoms/ClickAway'
export default {
    props: {
        placeholder: {
            type: String
        },
        items: {
            type: Array
        }
    },
    components: {
        ClickAway,
        SelectOption
    },
    data() {
        return {
            isShow: false,
            selected: null
        }
    },
    methods: {
        chooseOne(value) {
            this.selected = value;
            this.isShow = false
        }
    }
}
</script>