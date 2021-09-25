<template>
    <div class="my-2">
        <div v-for="record in records" :key="record.id">
            <div class="result-list flex content-center space-x-2 bg-white p-1 rounded mb-3">
                <div class="flex-shrink">
                    <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80" class="w-10 h-10 rounded object-cover object-center" />
                </div>
                <div class="flex-shrink w-40">
                    <h3 class="text-sm text-gray-600">{{ record.name }}</h3>
                    <p class="text-xs text-gray-400">{{ record.location }}</p>
                </div>
                <div class="flex-auto">
                    <div class="flex items-center justify-end flex-wrap h-full gap-2">
                        <Button class="bg-indigo-custom" label="Shortlist" icon-class="fas fa-star" />
                        <Button class="bg-indigo-custom" label="Team list" icon-class="fas fa-users" />
                        <Button class="bg-indigo-custom" label="Connect" icon-class="fal fa-people-arrows" />
                        <Button class="bg-red-500" label="Block" icon-class="fas fa-ban" />
                    </div>
                </div>
                <div class="flex-shrink">
                    <button class="flex items-center h-full bg-indigo-custom text-center text-xs text-white px-5 rounded-r">
                        View profile
                    </button>
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