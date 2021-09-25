<template>
    <div class="py-2 flex flex-wrap -ml-2 -mr-2">
        <div style="width: 33.33%" v-for="record in records" :key="record.id">
            <div class="result-list flex flex-col content-center bg-white p-2 rounded m-2 shadow">
                <div class="flex mb-4">
                    <div>
                        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80"
                        class="w-24 h-24 rounded object-cover object-center" />
                    </div>
                    <div>
                        <div class="ml-3 w-40">
                        <h3 class="text-sm text-gray-600">{{ record.name }}</h3>
                        <p class="text-xs text-gray-400">{{ record.location }}</p>
                    </div>
                    <div class="flex justify-center mt-4">
                        <button class="flex items-center p-1 bg-indigo-custom text-center  text-white px-5 rounded-md">
                            View profile
                        </button>
                    </div>
                    </div>
                </div>
                <div class="flex justify-center flex-wrap h-full gap-1">
                    <Button class="bg-indigo-custom" label="Shortlist" icon-class="fas fa-star" />
                    <Button class="bg-indigo-custom" label="Team list" icon-class="fas fa-users" />
                    <Button class="bg-red-500" label="Block" icon-class="fas fa-ban" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/atoms/Button'
export default {
    props: {
        records: {
            type: Array,
            required: true
        }
    },
    components: {
        Button
    }
}
</script>