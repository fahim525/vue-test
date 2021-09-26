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
        <transition name="fade">
            <div v-if="isShow" class="relative">
                <ClickAway @clickAway="isShow = false" />
                <ul class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md  text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <SelectOption
                        v-for="(item, index) in tags"
                        :key="index"
                        @chooseOne="chooseOne"
                        :option="item"
                />
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import ClickAway from '@/components/atoms/ClickAway';
import SelectOption from '@/components/atoms/SelectOption';

export default {
    data() {
        return {
            isShow: false,
            selected: [
                'Non smoker'
            ]
        }
    },
    props: {
        tags: {
            type: Array,
            require: true
        }
    },
    components: {
        SelectOption,
        ClickAway
    },
    methods: {
        chooseOne(value) {
            this.selected.push(value);
            this.isShow = false;
        }
    }
}
</script>