import { mount, shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
import ForOrMapComp from '@/components/ForOrMapComp.vue'
import TableComp from '@/components/TableComp.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('ForOrMapComp', () => {
  test('is a Vue Component', () => {
    const wrapper = shallowMount(ForOrMapComp)
    expect(wrapper.exists()).toBeTruthy()
  })
})

describe('TableComp', () => {
  test('is a Vue Components', () => {
    const wrapper = shallowMount(TableComp)
    expect(wrapper.exists()).toBeTruthy()
  })
})

describe('VuetifyLogo', () => {
  test('is a Vue Components', () => {
    const wrapper = shallowMount(VuetifyLogo)
    expect(wrapper.exists()).toBeTruthy()
  })
})
