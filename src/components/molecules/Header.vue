<template>
    <div>
        <h1 class="text-gray-400 text-3xl mb-3 font-bold">Search Results</h1>
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
    </div>
</template>