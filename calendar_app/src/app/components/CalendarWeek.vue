<!----------------------------------------------------
--
#Original Author: Patraic Kelly                #
#Date Created: 10/15/20                                   #
#Version:                                                    #
#Date Last Modified: 10/15/20                               #
#Modified by:   PK                                        #
#Modification log: Built as per fullstack vue book in VSCode #
------------------------------------------------------>

<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
        <CalendarDay v-for="day in sharedState.seedData"
          :key="day.id"
          :day="day" 
          />
      </div>
    </div>
</template>

<script>
import { store } from "../store.js";
import CalendarDay from "./CalendarDay.vue";

export default {
  name: "CalendarWeek",
  data () {
    return {
      sharedState: store.state
    };
  },
  components: {
    CalendarDay
  }
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }
}
</style>