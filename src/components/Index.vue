<script setup>
import { ref,computed,onMounted, onUnmounted } from 'vue';

const list = ref([
  { id: 1, name: "智能手機", price: 5999, image: "https://picsum.photos/id/1/200", maxQuantity: 5 },
  { id: 2, name: "筆記型電腦", price: 15999, image: "https://picsum.photos/id/2/200", maxQuantity: 3 },
  { id: 3, name: "無線耳機", price: 1299, image: "https://picsum.photos/id/3/200", maxQuantity: 10 },
  { id: 4, name: "智能手錶", price: 2499, image: "https://picsum.photos/id/4/200", maxQuantity: 8 },
  { id: 5, name: "平板電腦", price: 3999, image: "https://picsum.photos/id/5/200", maxQuantity: 5 },
  { id: 6, name: "藍牙音箱", price: 899, image: "https://picsum.photos/id/6/200", maxQuantity: 15 },
  { id: 7, name: "電競滑鼠", price: 599, image: "https://picsum.photos/id/7/200", maxQuantity: 20 },
  { id: 8, name: "機械鍵盤", price: 1099, image: "https://picsum.photos/id/8/200", maxQuantity: 12 },
  { id: 9, name: "顯示器", price: 2799, image: "https://picsum.photos/id/9/200", maxQuantity: 7 },
  { id: 10, name: "外接硬碟", price: 1599, image: "https://picsum.photos/id/10/200", maxQuantity: 10 }
]);

const discountCodes = ref([
  { code: "SAVE10", type: "percentage", value: 10 },
  { code: "SAVE20", type: "percentage", value: 20 },
  { code: "MINUS100", type: "fixed", value: 100 },
  { code: "MINUS500", type: "fixed", value: 500 },
])

const cart = ref([]);
const appliedDiscount = ref(null); // 用於存儲當前應用的優惠碼
const discountInput = ref(''); // 優惠碼輸入框的值

const addToCart = (item) => {
  const existingItem = cart.value.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ ...item, quantity: 1 });
  }
};

const removeFromCart = (id) => {
  cart.value = cart.value.filter(cartItem => cartItem.id !== id);
};

const increaseQuantity = (cartItem) => {
  cartItem.quantity += 1;
};

const decreaseQuantity = (cartItem) => {
  if (cartItem.quantity > 1) {
    cartItem.quantity -= 1;
  }
};

const totalPrice = computed(() => {
    let total = cart.value.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0);

    // 計算折扣
    if (appliedDiscount.value) { // 確保有應用的優惠碼
        if (appliedDiscount.value.type === "percentage") {
            total -= (total * (appliedDiscount.value.value / 100));
        } else if (appliedDiscount.value.type === "fixed") {
            total -= appliedDiscount.value.value;
        }
    }

    return total < 0 ? 0 : total; // 確保總價不為負數
});

const calculateSavings = computed(() => {
    if (!appliedDiscount.value) return 0; // 沒有應用的折扣碼

    if (appliedDiscount.value.type === 'percentage') {
        // 確保 totalPrice.value 不為 0
        return totalPrice.value > 0 ? (totalPrice.value * (appliedDiscount.value.value / 100)) : 0;
    } else if (appliedDiscount.value.type === 'fixed') {
        return appliedDiscount.value.value;
    }
    return 0; // 預防其他情況
});

const applyDiscount = () => {
    const discount = discountCodes.value.find(code => code.code === discountInput.value);
    if (discount) {
        if (appliedDiscount.value) {
            alert('請先刪除當前的優惠碼！'); // 提示用戶先刪除舊優惠碼
        } else {
            appliedDiscount.value = discount; // 儲存新的優惠碼
            discountInput.value = ''; // 清空輸入框
        }
    } else {
        alert('無效的優惠碼！'); // 提示用戶優惠碼無效
    }
};

const removeDiscount = () => {
  appliedDiscount.value = null; // 清除應用的優惠碼
};

const isDisplay = ref(false);
const isMobile = ref(false);

const mobCartToggle = () =>{
    isDisplay.value = !isDisplay.value
};

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768;
  if (isMobile.value) {
        isDisplay.value = false;
  }
};

onMounted(() => {
  checkIfMobile();
  window.addEventListener('resize', checkIfMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile);
});

</script>

<template>
    <div class="flex flex-wrap gap-10 relative items-start mb-20 md:mb-0 lg:mb-0">
        <div class="w-full flex-none md:flex-1 lg:flex-1">
            <ul class="flex flex-wrap md:-ml-5 lg:-ml-5">
                <li v-for="item in list" :key="item.id" class="flex pb-5 box-border w-full md:w-1/2 lg:w-1/3 md:pl-5 lg:pl-5">
                    <div class="w-full bg-white px-3 py-4 shadow-lg rounded-lg">
                        <div class="relative w-full aspect-square mb-4"><img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" :src="item.image"></div>
                        <h3 class="text-xl mb-4 text-center">{{ item.name }}</h3>
                        <div class="flex gap-2 mb-2">
                            <div class="bg-secondary text-white text-sm px-2 rounded">價格</div>
                            <div>NT$ {{ item.price }}</div>
                        </div>
                        <div class="flex gap-2 mb-5">
                            <div class="bg-secondary text-white text-sm px-2 rounded">數量</div>
                            <div>{{ item.maxQuantity }}</div>
                        </div>
                        <button @click="addToCart(item)" class="bg-primary w-full text-white py-2 rounded-full"><font-awesome-icon icon="cart-shopping" /> 加入購物車</button>
                    </div>
                </li>
            </ul>
        </div>
        <div v-if="isDisplay || !isMobile" class="w-full h-dvh p-4 fixed z-50 top-0 bg-primary md:top-3.5 lg:top-3.5 left-0 md:w-1/3 lg:w-1/4 md:sticky lg:sticky md:h-auto lg:h-auto md:bg-transparent lg:bg-transparent md:p-0 lg:p-0">
            <div class="h-full overflow-y-auto bg-gray-200 p-8 md:bg-transparent lg:bg-transparent md:p-0 lg:p-0">
                <div @click="mobCartToggle" class="absolute top-6 right-8 text-3xl block cursor-pointer md:hidden lg:hidden"><font-awesome-icon icon="xmark" /></div>
                <h2 class="text-xl font-bold mb-5"><font-awesome-icon icon="basket-shopping" /> 我的購物車</h2>
                <ul class="space-y-4 overflow-y-auto max-h-40 md:max-h-72 lg:max-h-72">
                    <li v-for="cartItem in cart" :key="cartItem.id" class="border-b border-[#cccccc] pb-4">
                        <div class="flex gap-4 justify-between">
                        <div class="mb-4">{{ cartItem.name }}</div>
                        <div class="text-accent cursor-pointer" @click="removeFromCart(cartItem.id)">
                            <font-awesome-icon icon="trash-can" />
                        </div>
                        </div>
                        <div class="flex gap-4 justify-between">
                        <div class="flex items-center">
                            <div class="w-5 h-5 leading-5 bg-primary text-xs text-white text-center rounded-md cursor-pointer" @click="decreaseQuantity(cartItem)">
                            <font-awesome-icon icon="minus" />
                            </div>
                            <div class="min-w-8 text-center">{{ cartItem.quantity }}</div>
                            <div class="w-5 h-5 leading-5 bg-primary text-xs text-white text-center rounded-md cursor-pointer" @click="increaseQuantity(cartItem)">
                            <font-awesome-icon icon="plus" />
                            </div>
                        </div>
                        <div>NT$ {{ cartItem.price * cartItem.quantity }}</div>
                        </div>
                    </li>
                </ul>
                <div class="flex gap-2 py-4">
                    <div class="flex-auto"><input v-model="discountInput" type="text" class="h-9 px-2 w-full rounded" placeholder="請輸入優惠碼"></div>
                    <div class="w-20"><button @click="applyDiscount" class="bg-secondary px-2 h-9 rounded w-full font-bold">新增</button></div>
                </div>
                <div v-if="appliedDiscount">
                    <div class="flex gap-2 bg-fourth py-1.5 px-2">
                        <div class="flex-auto flex gap-2 items-center">
                            <div class="bg-white px-2 py-px text-xs text-fourth">優惠碼</div>
                            <div class="text-white">{{ appliedDiscount.code }}</div>
                        </div>
                        <div @click="removeDiscount" class="text-white cursor-pointer"><font-awesome-icon icon="trash-can" /></div>
                    </div>
                    <div class="text-gray-500 text-right pt-2 text-sm">使用優惠碼節省了 <span class="text-accent">NT$ {{ calculateSavings }}</span></div>
                </div>
                <div class="mt-10 border-b border-[#cccccc] pb-5 flex justify-between">
                    <div class="text-xl">總金額 </div>
                    <div class="text-xl font-bold">NT$ {{ totalPrice }}</div>
                </div>
                <div class="mt-8"><button class="text-white text-lg bg-primary text-center rounded-full w-full h-12"><font-awesome-icon icon="cash-register" /> 結帳</button></div>
            </div>
        </div>
        <div @click="mobCartToggle" class="fixed w-full bottom-0 left-0 z-30 flex gap-2 justify-center p-4 cursor-pointer bg-primary text-lg text-white md:hidden lg:hidden">
            <div class=""><font-awesome-icon icon="basket-shopping" /></div>
            <div class="">我的購物車 ({{ cart.length }})</div>
        </div>
    </div>
</template>

<style scoped>

</style>