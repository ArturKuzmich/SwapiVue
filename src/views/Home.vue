<template>
    <div class="swapi_content">
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
              :selected="estateSort"
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
  components: {Select, PersonList, NavBar},
  data(){
    return{
      loading: false,
      eyeArray: [],
      selectedColor: '',
      sortedBy: [
          'age',
          'height',
          'mass'
      ],
      sortedData: [],
      estateSort: ''
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
    ...mapGetters('people', ['people']),

    filteredData(){
      let data = [...this.people]
      //eye filtering'


      if(this.selectedColor !== ''){
        let filterEye = new RegExp(this.selectedColor, 'i')
        return data.filter(item => item.eye_color.match(filterEye))
      }


      // if(this.selectedColor !== ''){
      //   data = data.filter(item => item.eye_color === this.selectedColor)
      // }

      // sortBy
      if(this.estateSort !== ''){
        if(this.estateSort === 'height'){
          data = data.sort((prev, curr) => prev.height - curr.height)
        }
        else if(this.estateSort === 'age'){
          data = data.sort((prev, curr) =>{
            if(prev.birth_year < curr.birth_year) return -1
            if(prev.birth_year > curr.birth_year) return 1
            return 0
          } )
        }
        else if(this.estateSort === 'mass'){
          data = data.sort((prev, curr) => prev.mass - curr.mass)
        }
      }
      return data;
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
      this.estateSort = value
    },
    sortBy: function(sortKey){
      const names = this.people
      names.sort((a, b) => {
        var compare = 0;
        if (a[sortKey] > b[sortKey]) {
          compare = 1;
        } else if (b[sortKey] > a[sortKey]) {
          compare = -1;
        }
        return compare;
      });
      this.sorted = sortKey
      // this.sortedData = names;
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
    filteredData(nev, old){
      console.log(nev, 'nev')
      console.log(old, 'old')
    }
  }

}
</script>
<style  lang="scss">
.swapi_content{
  .select_row{
    display: flex;
    align-items: center;
    justify-content: space-between;
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
