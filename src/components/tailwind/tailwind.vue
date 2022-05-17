<template>
  <div class="flex flex-col justify-center items-center">
    <p class="text-black font-medium text-2xl">tainwind-css</p>
    <div
      class="p-6 flex justify-center items-center max-w-sm bg-white dark:bg-sky-50 rounded-xl shadow-md space-x-4"
    >
      <div class="flex-shrink-0">
        <img
          class="h-12 w-12"
          src="https://vitejs.dev/logo.svg"
          alt="ChitChat logo"
        />
      </div>
      <div>
        <div class="text-xl font-medium text-sky-700">Chit Chat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div
      class="p-6 flex justify-center items-center max-w-sm bg-sky-50 dark:bg-white rounded-xl shadow-md space-x-6 m-3"
    >
      <img
        class="w-12 h-12"
        src="https://cn.vuejs.org/images/logo.svg"
        alt=""
      />
      <div class="text-center space-y-2 sm:text-left">
        <p
          class="text-lg bg-nice text-purple-600 dark:text-gray-100 font-semibold"
        >
          Erin Lindford
        </p>
        <p class="text-gray-500 font-medium">Product Engineer</p>
        <button class="btn btn-green">send message</button>
      </div>
    </div>
    <div
      class="h-24 w-24 bg-purple-400 box-border m-3 flex justify-center items-center text-white rounded-xl hover:bg-purple-800 dark:bg-blue-200 dark:hover:bg-green-700"
    >
      居中
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}

.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
