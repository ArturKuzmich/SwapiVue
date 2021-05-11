import * as api from '@/api';

const state = {
    people: [],
    eyeColorList: []
};
const mutations = {
    setPeople(state, payload) {
        state.people = [...payload];
    }
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
    }
};
const getters = {
    people (state){
        return state.people
    },
    male (state) {
        return state.people.filter(person => person.gender === 'male') || []
    },
    female (state) {
        return state.people.filter(person => person.gender === 'female') || []
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};