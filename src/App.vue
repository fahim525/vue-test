<template>
    <div class="h-screen bg-gray-100">
        <div class="container mx-auto max-w-screen-xl py-4 px-4 h-full">
            <div class="flex justify-center space-x-2">
                <div class="flex-shrink pb-6 border-2 border-gray-200 bg-white rounded-lg w-1/4">
                    <SideBar />
                </div>
                <div class="flex-auto w-3/4 py-3">
                    <h1 class="text-gray-400 text-3xl mb-3 font-bold">
                        Search Results
                    </h1>
                    <div class="flex items-center space-x-2 mb-3">
                        <div class="flex-auto">
                            <p class="text-xs text-gray-500">
                                Matches for your requirements: 25 results
                            </p>
                        </div>
                        <div class="flex-shrink flex items-center space-x-2 justify-end">
                            <button class="bg-indigo-custom rounded-full p-1 text-white text-xs">
                                <span class="w-full border border-white leading-5 rounded-full px-3 flex items-center">
                                    Manage Filter
                                    <i class="fal fa-bars ml-2"></i>
                                </span>
                            </button>
                            <button class="bg-indigo-custom rounded-full p-1 text-white text-xs">
                                <span class="w-full border border-white leading-5 rounded-full px-3 flex items-center">
                                    Advance Search
                                    <i class="far fa-search ml-2"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                     <div class="flex items-center space-x-2 mb-3">

                        <div class="flex-shrink flex items-center space-x-1">
                            <button
                                @click="componentName = 'GridItem'"
                                class="p-1 leading-3 hover:bg-indigo-custom hover:text-white"
                                :class="[componentName == 'GridItem' ? 'bg-indigo-custom text-white' : 'text-indigo-custom ']"
                            >
                                <i class="fas fa-th-large"></i>
                            </button>
                            <button
                                @click="componentName = 'ListItem'"
                                class="p-1 leading-3 hover:bg-indigo-custom hover:text-white"
                                :class="[componentName == 'ListItem' ? 'bg-indigo-custom text-white' : 'text-indigo-custom ']"
                            >
                                <i class="far fa-list"></i>
                            </button>
                        </div>

                        <div class="flex-auto flex items-center space-x-2 justify-end">
                           <div class="flex items-center gap-1 flex-wrap">
                                <template v-for="(item, index) in filterOptions">
                                    <Chip :label="item.label" :key="index" />
                                </template>
                                <button class="border-b border-red-700 text-red-700 text-xs">See More ..</button>
                            </div>
                        </div>
                    </div>
                    <transition name="fade" mode="out-in">
                        <components :is="componentName" :records="records" />
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import ListItem from '@/components/table/ListItem';
import GridItem from '@/components/table/GridItem'
import Chip from '@/components/atoms/Chip'
import { records, filterOptions } from '@/data'
export default {
    components: {
        Chip,
        SideBar,
        ListItem,
        GridItem
    },
    data() {
      return {
        filterOptions,
        records,
        componentName: 'ListItem'
      }
    }
}
</script>
