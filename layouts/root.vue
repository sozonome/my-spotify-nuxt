<template>
  <div class="flex flex-col min-h-screen justify-center">
    <LayoutRootHeader />
    <LayoutRootMain>
      <slot />
    </LayoutRootMain>
    <LayoutRootFooter />
  </div>
</template>