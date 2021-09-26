<template>
  <div class="p-3 border-b border-gray-200">
    <div class="flex items-center space-x-2">
        <div class="flex-shrink">
            <span class="text-xs text-gray-500">Height</span>
        </div>
        <div class="flex-shrink flex items-center space-x-1">
            <div class="flex-auto relative w-4 py-4">
                <button class="h-4 text-2xl absolute top-0 text-indigo-custom"><i class="fas fa-sort-up"></i></button>
                <input type="number" class="appearance-none p-0 border-0 text-center block w-full font-medium" value="5" />
                <button class="h-4 text-2xl absolute bottom-4 text-indigo-custom"><i class="fas fa-sort-down"></i></button>
            </div>
            <span class="flex-shrink text-xl text-gray-600 font-medium block">.</span>
            <div class="flex-auto w-4 relative py-4">
                <button class="h-4 text-2xl absolute top-0 text-indigo-custom"><i class="fas fa-sort-up"></i></button>
                <input type="number" class="appearance-none p-0 border-0 text-center block w-full font-medium" value="5" />
                <button class="h-4 text-2xl absolute bottom-4 text-indigo-custom"><i class="fas fa-sort-down"></i></button>
            </div>
        </div>
        <div class="flex-auto px-2">
            <div class="flex items-center justify-center space-x-1 pb-2">
                <button class="bg-indigo-custom border border-transparent px-3 py-0 leading-4 rounded-full text-xs text-white">Ft</button>
                <button class="bg-white border border-gray-200 px-3 py-0 leading-4 rounded-full text-xs text-indigo-custom">Ft</button>
            </div>
            <span class="calculate_to block text-center text-sm font-medium text-gray-600">
                <span class="bg-white relative px-2 z-20"> To</span>
                <span class="w-full block border border-gray-200 absolute top-1/2 left-0 z-10"></span>
            </span>
        </div>
        <div class="flex-shrink flex items-center space-x-1">
            <div class="flex-auto relative w-4 py-4">
                <button class="h-4 text-2xl absolute top-0 text-indigo-custom"><i class="fas fa-sort-up"></i></button>
                <input type="number" class="appearance-none p-0 border-0 text-center block w-full font-medium" value="5" />
                <button class="h-4 text-2xl absolute bottom-4 text-indigo-custom"><i class="fas fa-sort-down"></i></button>
            </div>
            <span class="flex-shrink text-xl text-gray-600 font-medium block">.</span>
            <div class="flex-auto w-4 relative py-4">
                <button class="h-4 text-2xl absolute top-0 text-indigo-custom"><i class="fas fa-sort-up"></i></button>
                <input type="number" class="appearance-none p-0 border-0 text-center block w-full font-medium" value="5" />
                <button class="h-4 text-2xl absolute bottom-4 text-indigo-custom"><i class="fas fa-sort-down"></i></button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>