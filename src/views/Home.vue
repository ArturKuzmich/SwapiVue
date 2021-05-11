<template>
  <div class="swapi_app">
    <NavBar />
    <div
      v-for="(person, idx) in filteredData"
      :key="person.name"
      class="person">
     {{person.name}}  {{person.gender || ''}}
  </div>
    <select v-model="eyeValue"
            @change="filteredPeople($event)"
    >
      <option value="" disabled>Eye color</option>
      <option :value="person.eye_color" v-for="(person, idx) in people">{{person.eye_color}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import NavBar from "@/components/NavBar";
export default {
  name: 'Home',
  components: {NavBar},
  data(){
    return{
      loading: false,
      eyeValue: '',
      eyeArray: []
    }
  },
  created () {
    this.getAllPeople({
      success: this.handleSuccess,
      fail: this.handleFail
    })
  },
  computed: {
    ...mapState('people', ['people',]),
    ...mapGetters('people', ['people',]),
    filteredData(){
      if(this.eyeArray.length){
        return this.eyeArray
      }else{
         return  this.people
      }
    }
  },
  methods: {
    ...mapActions('people', ['getAllPeople']),
    handleSuccess () {
      this.loading = false
    },
    handleFail () {
      this.loading = true
    },
    // filteredPeople(event){
    //   if(this.people){
    //     return this.people.filter((person) => {
    //       return this.eyeArray.push(person.eye_color.match(event.target.value))
    //     })
    //   }
    // }
    filteredPeople(){
      this.eyeArray = []
      let self = this
      this.people.map((item) => {
        console.log(item)
        if(item.eye_color === this.eyeValue){
          self.eyeArray.push(item)
        }
      })
    }
  },

}
</script>
<style  lang="scss">
@import "./src/assets/clear/clear";
.swapi_app{
  max-width: 1440px;
}
</style>
