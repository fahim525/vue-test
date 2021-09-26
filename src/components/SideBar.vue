<template>

    <div class="relative">
        <button class="bg-indigo-custom border border-white h-14 text-white px-3 pr-2 py-2 rounded-l-full absolute top-3 right-0">
            <i class="fas fa-caret-left text-base"></i>
        </button>
        <div class="bg-indigo-custom p-3 flex rounded-t-lg items-center space-x-4 border-b border-gray-200">
            <button class="flex-shrink flex items-center text-xs px-2 capitalize rounded-full border-2 border-gray-200 bg-white text-indigo-custom">
                <i class="fas fa-caret-left mr-1 text-base"></i>back
            </button>
            <p class="flex-auto text-base text-white font-light">
                Search Manager
            </p>
        </div>
        <div class="px-2 py-3 border-b border-gray-200 flex items-center justify-center flex-wrap">
            <Button class="bg-indigo-custom" label="Save Search" icon-class="far fa-search-plus" />
            <Button class="bg-indigo-custom" label="Load Save Search" icon-class="far fa-undo" />
        </div>
        <div class="px-2 py-3 border-b border-gray-200">
            <Range
                label="Age"
                :min="+min"
                :max="+max"
                @update:min="value => min = value"
                @update:max="value => max = value"
                @onIncrease="increase"
                @onDecrease="decrease"
            />
            <div class="text-center text-indigo-custom">
                <strong>{{ min }} - {{ max }}</strong> Years old
            </div>
        </div>
        <div>
            <Number />
        </div>
        <div class="px-2 py-3">
            <Select placeholder="Religion" :items="items" />
            <Select placeholder="Country" :items="items" />
            <Select placeholder="Ethnicity" :items="items" />
            <Select placeholder="Martial Status" :items="items" />

            <h3 class="my-3 text-sm text-indigo-400 text-center mb-3 font-semibold">Tags</h3>

            <Tag :tags="tags" />
        </div>

        <div class="px-2 py-3 text-center">
            <button class="w-2/3 mb-2 mx-auto flex items-center justify-center text-base px-4 py-2 capitalize rounded-full border-2 border-white shadow-lg text-white bg-indigo-custom">
                <i class="far fa-search-plus text-xl mr-3"></i>Search
            </button>
            <a class="inline-block text-indigo-400 underline text-xs">
                Advanced Search
            </a>
        </div>
    </div>

</template>
<script>
import Select from '@/components/atoms/Select';
import Tag from '@/components/atoms/Tag';
import Button from '@/components/atoms/Button';
import Range from '@/components/atoms/Range'
import Number from '@/components/atoms/Number'

export default {
  
    components: {
        Tag,
        Range,
        Select,
        Number,
        Button,
    },
    data() {
        return {
            min: 27,
            max: 40,
            items: [
                'Option one', 'Option two'
            ],
            tags: ['Non smoker', 'Smoker', 'Male', 'Female', 'London', 'Islam', 'Muslim', 'Another']
        }
    },
    methods: {
        increase() {
            this.max = +this.max + 5;
        },
        decrease() {
            this.min = +this.min - 5;
        },
        
    }
}
</script>