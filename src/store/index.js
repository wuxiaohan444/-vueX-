import Vue from 'vue';
import Vuex from 'vuex';
import VueXAlong from 'vuex-along' //插件（页面刷新以后vuex的数据不会丢）

Vue.use(Vuex);

const state = {
    changableNum: 0,
    chooseStatus: true
};

const getters = {
    getChangeNum() {
        return state.changebleNum
    },
    getChangeChoose() {
        return state.chooseStatus
    }
};

const mutations = {
    newNum(state, sum) {
        state.changableNum += sum
    },
    newChoose(state, one) {
        state.chooseStatus = one;
    }
}

const actions = {
    getNewNum(context, num) {
        context.commit('newNum', num)
    },
    getNewChoose(context, num) {
        context.commit('newChoose', num)
    }
}

const store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
        plugins: [VueXAlong({
            justSession: true,
            session: {list: '',isFilter:true}
        })]
    }
);


export default store;


