<template>
  <div class="select_drop-down">
    <div
        class="selected_title"
        @click="optionsShow = !optionsShow"
    >
      {{ generatingPlaceholder || selected }}
      <svg
          :class="{'arrow-up': optionsShow, '': !optionsShow}"
          width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4 4L7 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="options" v-if="optionsShow">
      <div
          v-for="option in options"
          @click="selectOptions(option)"
      >
        {{option}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: "Select",
  props: ['options', 'selected', 'placeholder'],
  data(){
    return{
      optionsShow: false
    }
  },
  methods:{
    selectOptions(option){
      this.$emit('select', option)
      this.optionsShow = false
    },
    hide(){
      this.optionsShow = false
    }
  },
  computed: {
    generatingPlaceholder(){
      if(this.selected === ''){
        return this.placeholder
      }
      else {
        return this.selected
      }
    },
  },
  mounted() {
    // document.addEventListener('click', this.hide)
  },
  beforeDestroy() {
    // document.removeEventListener('click', this.hide)
  }
}
</script>

<style scoped lang="scss">
  .select_drop-down{
    position: relative;
    width: 101px;
    .selected_title{
      display: flex;
      align-items: center;
      svg{
        margin: 0 0 0 9px;
        &.arrow-up{
          transform: rotate(
                  180deg
          );
        }
      }
    }
    .options{
      top: 18px;
      position: absolute;
      z-index: 1;
      background: #FFFFFF;
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      width: 100%;
      padding: 4px 0 8px 20px;
      div{
        margin: 8px 0px;
        font-family: HelveticaNeueCyr;
        font-weight: 100;
        font-size: 14px;
        line-height: 180%;
        color: #000000;
        cursor: pointer;
      }
    }
  }
</style>