<template>
  <div class="index-page">
    <div class="index-page__row">
      <div class="index-page__col">
        <streamer-main />
      </div>
      <div class="index-page__col">
        <streamer-tasks />
      </div>
      <div class="index-page__col">
        <streamer-stats />
      </div>
      <div class="index-page__col">
        <streamer-actions />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StreamerMain from "@/components/Streamer/StreamerMain/StreamerMain.vue";
import StreamerTasks from "@/components/Streamer/StreamerTasks/StreamerTasks.vue";
import StreamerStats from "@/components/Streamer/StreamerStats/StreamerStats.vue";
import StreamerActions from "@/components/Streamer/StreamerActions/StreamerActions.vue";
</script>

<style src="./IndexPage.scss" lang="scss"></style>
