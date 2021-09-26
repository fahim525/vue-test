<template>
    <Dialog v-model="localModel" persistent>
        <div class=" flex flex-col content-center bg-white p-2 rounded m-2">
            <div class="flex justify-between -mt-2">
                <h4>Profile</h4>
                <i @click="localModel = false" class="fal fa-times cursor-pointer text-xl text-gray-400 hover:text-red-400"></i>
            </div>
            <div class="flex flex-col items-center mb-4">
                <div>
                    <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80"
                    class="w-40 h-40 rounded object-cover object-center" />
                </div>
                <div>
                    <div class="mt-3 w-40 text-center">
                        <h3 class="text-base text-gray-600">{{ record.name }}</h3>
                        <p class="text-xs text-gray-400">{{ record.location }}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center flex-wrap h-full gap-1">
                <Button class="bg-indigo-custom" label="Shortlist" icon-class="fas fa-star" />
                <Button class="bg-indigo-custom" label="Team list" icon-class="fas fa-users" />
                <Button class="bg-indigo-custom" label="Connect" icon-class="fal fa-people-arrows" />
                <Button class="bg-red-500" label="Block" icon-class="fas fa-ban" />
            </div>
        </div>
    </Dialog>
</template>

<script>
import Button from "@/components/atoms/Button";
import Dialog from "@/components/atoms/Dialog";

export default {
    components: {
        Button,
        Dialog,
    },
    props: {
        record: {
            type: Object,
            require: true
        },
        value: Boolean
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