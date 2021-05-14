import * as api from '@/api';

const state = {
    people: [],
};
const mutations = {
    setPeople(state, payload) {
        state.people = [...payload];
    },

};
const actions = {
    getAllPeople({ commit }, { success, fail } = {}) {
        api.getPeople(
            (response) => {
                commit('setPeople', response.data.results);
                success && success(response)
            },
            (response) => {
                fail && fail(response)
            }
        );
    },
};
const getters = {
    people (state){
        return state.people
    },
    getByEyeColor: (state) => (color) => {
        if(color){
            return state.people.filter(item => item.eye_color.match(color))
        }else{
            return state
        }
    },
    sortBy: (state) => (value) => {
        switch(value){
            case "height":
                return state.people.sort((prev, curr) => prev.height - curr.height)
                break;
            case "mass":
                return  state.people.sort((prev, curr) => prev.mass - curr.mass)
                break;
            case "age":
                return state.people.sort((prev, curr) =>{
                    console.log(prev.birth_year.substr(0,2))
                    if(prev.birth_year.substr(0,2) < curr.birth_year.substr(0,2)) return -1
                    if(prev.birth_year.substr(0,2) > curr.birth_year.substr(0,2)) return 1
                    return 0
                } )
                break;
            default: return  state
        }
    }
    // male (state) {
    //     return state.people.filter(person => person.gender === 'male') || []
    // },
    // female (state) {
    //     return state.people.filter(person => person.gender === 'female') || []
    // },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};