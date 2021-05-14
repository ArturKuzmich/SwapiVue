<template>
    <div class="swapi_content">
      <h2 class="swapi_title">People</h2>
      <div class="select_row">
        <div class="select-vis_l">
          <Select
              @select="sortByEyeColor"
              :selected="selectedColor"
              :options="getUniqueEye"
              :placeholder="'Eye color'"
          />
        </div>
        <div class="select-vis_r">
          <Select
              @select="sortedState"
              :selected="chooseSort"
              :options="sortedBy"
              :placeholder="'Sort by'"
          />
        </div>
      </div>
      <PersonList :filteredData="filteredData"/>
    </div>
</template>

<script>
import {  mapActions, mapState, mapGetters } from 'vuex';
import NavBar from "@/components/NavBar";
import PersonList from "@/components/PersonList";
import Select from "@/components/Select";
export default {
  name: 'Home',
  components: { Select, PersonList, NavBar},
  data(){
    return{
      loading: false,
      selectedColor: '',
      sortedBy: [
          'age',
          'height',
          'mass'
      ],
      chooseSort: ''
    }
  },
  created () {
    this.getAllPeople({
      success: this.handleSuccess,
      fail: this.handleFail
    })
  },
  computed: {
    ...mapState('people', ['people', ]),
    ...mapGetters('people', ['people', 'getByEyeColor', "sortBy"]),
    filteredData(){
      let data = [...this.people]

      if(this.selectedColor){
        return this.getByEyeColor(this.selectedColor)
      }
       if(this.chooseSort){
        return this.sortBy(this.chooseSort)
      }
      // else{
      //   return data;
      // }
      return  data
    },
    getUniqueEye(){
      let uniquEye = this.people
       if(this.people){
         uniquEye = uniquEye.map((item) => item.eye_color)
       }
     return [...new Set(uniquEye)]
    },
  },
  methods: {
    ...mapActions('people', ['getAllPeople']),
    sortedState(value){
      this.chooseSort = value
    },
    handleSuccess () {
      this.loading = false
    },
    handleFail () {
      this.loading = true
    },
    sortByEyeColor(color){
      this.selectedColor = color
    },

  },
  watch: {
    selectedColor(nevSelected, oldSelected){
      if(nevSelected){
        this.chooseSort = ''
      }
    },
    chooseSort(nevSort, oldSort){
      if(nevSort){
        this.selectedColor = ''
      }
    }
  }
}
</script>
<style  lang="scss">
.swapi_content{
  .swapi_title{
    font-family: HelveticaNeueCyr;
    font-weight: normal;
    font-size: 32px;
    line-height: 148%;
    color: #000000;
    margin: 64px 0 24px 0;
  }
  .select_row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 48px 0;
    .select-vis_l{
      display: flex;
      align-items: center;
    }
    .select-vis_r{
      .range_slider{
        height: 132px;
        width: 249px;
        border-radius: 6px;
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      }
    }
  }
}

</style>
