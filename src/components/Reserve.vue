<template>
  <div class="bswd-date">
    <v-row class="bswd-date-list">
      <v-swiper
        class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode"
      >
        <v-swiper-slide
          v-for="(date, index) in dateList"
          :key="index"
          class="swiper-slide"
          style="margin-right: 10px;"
        >
          <v-card>
            <v-card-text>
              <v-row>
                <v-col>
                  <span class="bswd-date-my">{{ date.month }}</span>
                </v-col>
                <v-col>
                  <a
                    href="javascript:;"
                    class="btn-showdate datelink has_showtime"
                    :data-date="date.date"
                  >
                    <span
                      style="display: block; font-size: 14px;"
                      class="text-uppercase"
                    >{{ date.day }}</span>
                    <span style="display: block;">{{ date.dayOfMonth }}</span>
                  </a>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-swiper-slide>

        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </v-swiper>

      <!-- Add Arrows -->
      <v-btn
        class="swiper-button-next"
        role="button"
        aria-label="Next slide"
        aria-disabled="false"
      ></v-btn>
      <v-btn
        class="swiper-button-prev swiper-button-disabled"
        role="button"
        aria-label="Previous slide"
        aria-disabled="true"
      ></v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateList: [
        {
          month: "Sep 2023",
          date: "2023-09-29",
          day: "Fri",
          dayOfMonth: "29",
        },
        {
          month: "Sep 2023",
          date: "2023-09-30",
          day: "Sat",
          dayOfMonth: "30",
        },
        {
          month: "Oct 2023",
          date: "2023-10-01",
          day: "Sun",
          dayOfMonth: "01",
        },
        // Add more date objects as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
