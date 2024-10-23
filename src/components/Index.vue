<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="flex gap-10 relative items-start">
        <div class="w-1/4 sticky top-3.5 left-0">
            <h2 class="text-xl font-bold mb-5"><font-awesome-icon icon="basket-shopping" /> 我的購物車</h2>
            <div class="space-y-4">
                <div class="border-b border-[#cccccc] pb-4">
                    <div class="flex gap-4 justify-between">
                        <div class="font-bold mb-4">智能手機</div>
                        <div class="text-accent cursor-pointer"><font-awesome-icon icon="trash-can" /></div>
                    </div>
                    <div class="flex gap-4 justify-between">
                        <div class="flex items-center">
                            <div class="w-5 h-5 leading-5 bg-primary text-xs text-white text-center rounded-md cursor-pointer"><font-awesome-icon icon="minus" /></div>
                            <div class="min-w-8 text-center">1</div>
                            <div class="w-5 h-5 leading-5 bg-primary text-xs text-white text-center rounded-md cursor-pointer"><font-awesome-icon icon="plus" /></div>
                        </div>
                        <div class="">NT$ 1000</div>
                    </div>
                </div>
                <div class="border-b border-[#cccccc] pb-4">
                    <div class="flex gap-4 justify-between">
                        <div class="font-bold mb-4">智能手機</div>
                        <div class="text-accent cursor-pointer"><font-awesome-icon icon="trash-can" /></div>
                    </div>
                    <div class="flex gap-4 justify-between">
                        <div class="flex items-center">
                            <div class="w-5 h-5 leading-5 bg-primary text-xs text-white text-center rounded-md cursor-pointer"><font-awesome-icon icon="minus" /></div>
                            <div class="min-w-8 text-center">1</div>
                            <div class="w-5 h-5 leading-5 bg-primary text-xs text-white text-center rounded-md cursor-pointer"><font-awesome-icon icon="plus" /></div>
                        </div>
                        <div class="">NT$ 1000</div>
                    </div>
                </div>    
            </div>
            <div class="flex gap-2 py-4">
                <div class="flex-auto"><input type="text" class="h-9 px-2 w-full rounded" placeholder="請輸入優惠碼"></div>
                <div class="w-20"><button class="bg-secondary px-2 h-9 rounded w-full font-bold">新增</button></div>
            </div>
            <div>
                <div class="flex gap-2 bg-fourth py-1.5 px-2">
                    <div class="flex-auto flex gap-2 items-center">
                        <div class="bg-white px-2 py-px text-xs text-fourth">優惠碼</div>
                        <div class="text-white">SAVE10</div>
                    </div>
                    <div class="text-white cursor-pointer"><font-awesome-icon icon="trash-can" /></div>
                </div>
                <div class="text-gray-500 text-right pt-2 text-sm">使用優惠碼節省了 <span class="text-accent">NT$ 1000</span></div>
            </div>
            <div class="mt-10 border-b border-[#cccccc] pb-5 flex justify-between">
                <div class="text-xl">總金額 </div>
                <div class="text-xl font-bold">NT$ 5000</div>
            </div>
            <div class="mt-8"><button class="text-white text-lg bg-primary text-center rounded-full w-full h-12"><font-awesome-icon icon="cash-register" /> 結帳</button></div>
        </div>
        <div class="flex-1 flex flex-wrap -ml-5">
            <div class="flex w-1/3 pl-5 pb-5 box-border">
                <div class="w-full bg-white px-3 py-4 shadow-lg rounded-lg">
                    <div class="relative w-full aspect-square mb-4"><img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" src="https://picsum.photos/id/1/200"></div>
                    <h3 class="text-xl mb-4 text-center">智能手機</h3>
                    <div class="flex gap-2 mb-2">
                        <div class="bg-secondary text-white text-sm px-2 rounded">價格</div>
                        <div>NT$ 5000</div>
                    </div>
                    <div class="flex gap-2 mb-5">
                        <div class="bg-secondary text-white text-sm px-2 rounded">數量</div>
                        <div>20</div>
                    </div>
                    <button class="bg-primary w-full text-white py-2 rounded-full"><font-awesome-icon icon="cart-shopping" /> 加入購物車</button>
                </div>
            </div>

            <div class="flex w-1/3 pl-5 pb-5 box-border">
                <div class="w-full bg-white px-3 py-4 shadow-lg rounded-lg">
                    <div class="relative w-full aspect-square mb-4"><img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" src="https://picsum.photos/id/1/200"></div>
                    <h3 class="text-xl mb-4 text-center">智能手機</h3>
                    <div class="flex gap-2 mb-2">
                        <div class="bg-secondary text-white text-sm px-2 rounded">價格</div>
                        <div>NT$ 5000</div>
                    </div>
                    <div class="flex gap-2 mb-5">
                        <div class="bg-secondary text-white text-sm px-2 rounded">數量</div>
                        <div>20</div>
                    </div>
                    <button class="bg-primary w-full text-white py-2 rounded-full"><font-awesome-icon icon="cart-shopping" /> 加入購物車</button>
                </div>
            </div>

            <div class="flex w-1/3 pl-5 pb-5 box-border">
                <div class="w-full bg-white px-3 py-4 shadow-lg rounded-lg">
                    <div class="relative w-full aspect-square mb-4"><img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" src="https://picsum.photos/id/1/200"></div>
                    <h3 class="text-xl mb-4 text-center">智能手機</h3>
                    <div class="flex gap-2 mb-2">
                        <div class="bg-secondary text-white text-sm px-2 rounded">價格</div>
                        <div>NT$ 5000</div>
                    </div>
                    <div class="flex gap-2 mb-5">
                        <div class="bg-secondary text-white text-sm px-2 rounded">數量</div>
                        <div>20</div>
                    </div>
                    <button class="bg-primary w-full text-white py-2 rounded-full"><font-awesome-icon icon="cart-shopping" /> 加入購物車</button>
                </div>
            </div>

            <div class="flex w-1/3 pl-5 pb-5 box-border">
                <div class="w-full bg-white px-3 py-4 shadow-lg rounded-lg">
                    <div class="relative w-full aspect-square mb-4"><img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" src="https://picsum.photos/id/1/200"></div>
                    <h3 class="text-xl mb-4 text-center">智能手機</h3>
                    <div class="flex gap-2 mb-2">
                        <div class="bg-secondary text-white text-sm px-2 rounded">價格</div>
                        <div>NT$ 5000</div>
                    </div>
                    <div class="flex gap-2 mb-5">
                        <div class="bg-secondary text-white text-sm px-2 rounded">數量</div>
                        <div>20</div>
                    </div>
                    <button class="bg-primary w-full text-white py-2 rounded-full"><font-awesome-icon icon="cart-shopping" /> 加入購物車</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>

</style>