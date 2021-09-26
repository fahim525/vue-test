<template>
    <div class="h-screen bg-gray-100">
        <div class="container mx-auto max-w-screen-xl py-4 px-4 h-full">
            <div class="flex justify-center space-x-2">
                <div class="flex-shrink pb-6 border-2 border-gray-200 bg-white rounded-lg w-1/4">
                    <SideBar />
                </div>
                <div class="flex-auto w-3/4 py-3">
                    <Header />
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
                                    <Chip @click.native="tagName = item" :label="item.label" :key="index" />
                                </template>
                                <button class="border-b border-red-700 text-red-700 text-xs">See More ..</button>
                            </div>
                        </div>
                    </div>
                    <transition name="fade" mode="out-in">
                        <components
                            v-if="records.length"
                            @onClick:block="isShowBlockItem = true"
                            @onClick:profile="showProfile"
                            :is="componentName"
                            :records="records"
                        />
                        <p v-else class="text-center mt-10 text-red-400">Ops! Record not available </p>
                    </transition>
                </div>
            </div>
        </div>
        <ConfirmDialog
            v-model="isShowBlockItem"
            message="Are you sure you want to block this user?"
            description="We don't inform this user about blocking."
            truthyButtonText="Yes, I want to block"
            falsyButtonText="No, Keep alive"
            @confirm="blockUser"
        >
            <template #icon>
                <div class="bg-red-200 rounded-full h-8 w-8 flex items-center justify-center p-1">
                    <i class="far fa-exclamation-circle  text-red-500" aria-hidden="true" />
                </div>
            </template>
        </ConfirmDialog>
        <Profile :record=record v-model="isShowProfile" />
    </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import ListItem from '@/components/table/ListItem';
import GridItem from '@/components/table/GridItem';
import Chip from '@/components/atoms/Chip';
import ConfirmDialog from '@/components/atoms/ConfirmDialog';
import Profile from '@/components/molecules/Profile';
import Header from '@/components/molecules/Header'
import { records, filterOptions } from '@/data';
import { filterByTag } from "@/services";
export default {
    name: 'App',
    components: {
        Chip,
        SideBar,
        Profile,
        Header,
        ListItem,
        GridItem,
        ConfirmDialog
    },
    data() {
      return {
        filterOptions,
        componentName: 'ListItem',
        isShowBlockItem: false,
        isShowProfile: false,
        record: {
            name: 'User name here',
            location: 'User location Dhaka '
        },
        tagName: null
      }
    },
    computed: {
        records() {
            if(!this.tagName) {
                return records;
            }
            return filterByTag(records, this.tagName)
        }
    },
    methods: {
        blockUser() {
            this.isShowBlockItem = false;
        },
        showProfile(record) {
            this.isShowProfile = true;
            this.record = record;
        }
    }
}
</script>
