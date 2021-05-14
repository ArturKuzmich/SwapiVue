<template>
  <div id="swapi_app">
    <NavBar />
    <div class="app_inner">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./src/assets/clear/clear";
@font-face {
  font-family: 'HelveticaNeueCyr';
  src: local('HelveticaNeueCyr Thin'), local('HelveticaNeueCyr Thin'),
  url('~@/assets/fonts/HelveticaThin/HelveticaThin.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'HelveticaRegular';
  src: local('HelveticaNeueCyr Roman'), local('HelveticaNeueCyr Roman'),
  url('~@/assets/fonts/HelveticaRegular/HelveticaRegular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  #swapi_app{
    .app_inner{
      padding: 0 104px;
    }
  }
@media only screen and (max-width: 375px){
    #swapi_app{
      .swapi_header{
        .header_inner{
          padding: 0 18px;
          .header_logo{
            a{
              svg{
                width: 82px;
                height: 24px;
              }
            }
          }
          .header_utility{
            .header_authentication{
              .auth_link{}
              &.log_in{

              }
              &.sign_in{
                padding: 8px 8px;
              }
            }
          }
        }
      }
      .app_inner{
        padding: 0 18px;
        .swapi_content{
          .swapi_title{
            font-size: 28px;
            line-height: 120%;
            margin: 59px 0 16px 0;
          }
          .select_row{
            margin: 0 0 24px 0;
          }
          .person_list{
            .person{
              height: 406px;
              margin: 0 0 10px 0;
              .person_details{
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                padding: 0 0 25px 20px;
                .body_details{
                  li{
                    margin: 0 16px 0 0;
                  }
                }
              }
            }
          }
        }
      }
      .swapi_footer{
        .footer_inner{
          padding: 0 18px;
          .inner_row{
            &:first-child{
              flex-direction: column;
              align-items: initial;
              padding: 32px 0 0 0;
              margin: 0 0 40px 0;
            }
            .row_social{
              margin: 24px 0 0 0;
              a{
                width: 32px;
                height: 32px;
                &:first-child{
                  margin: 0 13px 0 0;
                }
                svg{
                  height: 13px;
                }
              }
            }
            .row_title{
              margin: 0 0 24px 0;
            }
          }
        }
      }
    }
}
</style>
<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: {Footer, NavBar}
}
</script>