import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      Data1: '',
      Data2: '',
      Data3: '',
      Data4: ''
    },
    mutations: {
      setData1(state, newData) {
        state.Data1 = newData
      },
      setData2(state, newData) {
        state.Data2 = newData
      },
      setData3(state, newData) {
        state.Data3 = newData
      },
      setData4(state, newData) {
        state.Data4 = newData
      }
    },
    actions: {
      setData1(vuexContext, newData) {
        vuexContext.commit('setData1', newData)
      },
      setData2(vuexContext, newData) {
        vuexContext.commit('setData2', newData)
      },
      setData3(vuexContext, newData) {
        vuexContext.commit('setData3', newData)
      },
      setData4(vuexContext, newData) {
        vuexContext.commit('setData4', newData)
      }
    },
    getters: {
      getData1(state) {
        return state.Data1
      },
      getData2(state) {
        return state.Data2
      },
      getData3(state) {
        return state.Data3
      },
      getData4(state) {
        return state.Data4
      }
    }
  })
}

export default createStore
