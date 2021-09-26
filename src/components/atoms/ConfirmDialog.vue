<template>
    <Dialog persistent v-model="localModel">
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
            <div class="flex px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="flex-shrink-0">
                    <slot name="icon"></slot>
                </div>
                <div class="ml-3">
                <h3 class="text-base font-medium text-gray-800">
                    {{ message }}
                </h3>
                    <div class="mt-2 text-sm text-gray-500">
                        <slot name="body" >
                            {{ description }}
                        </slot>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <div class="-mx-2 -my-1.5 flex">
                    <button type="button" @click="localModel = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        {{ falsyButtonText }}
                    </button>
                    <button @click="$emit('confirm')" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                        {{ truthyButtonText }}
                    </button>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script>
import Dialog from './Dialog'
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        description: String,
        truthyButtonText: {
            type: String,
            default: () => 'Ok'
        },
        falsyButtonText: {
            type: String,
            default: () => 'Cancel'
        },
        value: Boolean
    },
    components: {
        Dialog
    },
    computed: {
      localModel: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value);
        }
      }
    }
  }
</script>
