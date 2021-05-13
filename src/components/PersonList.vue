<template>
  <section class="person_list">
    <div
        v-for="(person, index) in filteredData"
        :key="person.name"
        class="person"
    >
      <img :src="`${publicPath}img/${person.name}.jpg`" />
      <div class="person_details">
        <p v-if="person.birth_year !== 'unknown'" class="person_birth">{{person.birth_year}}</p>
        <h2 class="person_name">{{person.name}}</h2>
        <ul class="body_details">
          <li>
            Eye color :
            <span>{{person.eye_color}}</span>
          </li>
          <li>
            Height :
            <span>{{person.height}}</span>
          </li>
          <li>
            Mass :
            <span>{{person.mass}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "PersonList",
  props: ['filteredData'],
  data(){
    return{
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped lang="scss">
  .person_list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .person{
      position: relative;
      border-radius: 6px;
      overflow: hidden;
      width: 608px;
      height: 410px;
      margin: 0 0 17px 0;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .person_details{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 21px 0 0 24px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
        .person_birth{
          margin: 0 0 16px 0;
          font-family: HelveticaNeueCyr;
          font-weight: normal;
          font-size: 14px;
          line-height: 104%;
          color: #FFFFFF;
          opacity: 0.8;
        }
        .person_name{
          font-family: HelveticaNeueCyr;
          font-weight: normal;
          font-size: 24px;
          line-height: 148%;
          color: #FFFFFF;
          margin: 0 0 8px 0;
        }
        .body_details{
          display: flex;
          align-items: center;
          li{
            font-family: HelveticaNeueCyr;
            font-weight: 100;
            font-size: 14px;
            line-height: 180%;
            color: #FFFFFF;
            margin: 0 24px 0 0;
            &:last-child{
              margin: 0;
            }
            span{
            }
          }
        }
      }
    }
  }
</style>