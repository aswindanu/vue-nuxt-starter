import { mount } from '@vue/test-utils'
import ForOrMap from '@/pages/ForOrMap.vue'
import StoreShow from '@/pages/StoreShow.vue'
import asyncdata from '@/pages/asyncdata.vue'
import dotenv from '@/pages/dotenv.vue'
import form from '@/pages/form.vue'
import index from '@/pages/index.vue'
import inspire from '@/pages/inspire.vue'
import lifecycle from '@/pages/lifecycle.vue'
import middleware from '@/pages/middleware.vue'
import storage from '@/pages/storage.vue'
import table from '@/pages/table.vue'
import tableComp from '@/pages/tableComp.vue'

describe('ForOrMap', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ForOrMap)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('StoreShow', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(StoreShow)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('ForOrMap', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ForOrMap)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('StoreShow', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(StoreShow)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('asyncdata', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(asyncdata)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('form', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(form)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('dotenv', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(dotenv)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('index', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('inspire', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(inspire)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('lifecycle', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(lifecycle)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('middleware', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(middleware)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('storage', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(storage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('table', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(table)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('tableComp', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(tableComp)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('StoreShow', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(StoreShow)
    const button = wrapper.findAll('v-btn')
    button.trigger('click')
  })
})

describe('dotenv', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(dotenv)
    const button = wrapper.findAll('v-btn')
    button.trigger('click')
  })
})

describe('form', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(form)
    const button = wrapper.findAll('v-btn')
    button.trigger('click')
    const forms = wrapper.find('#email')
    forms.element.nodeValue = 'gege'
    forms.trigger('input')
  })
})

describe('index', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(index)
    const button = wrapper.find('#logo')
    button.trigger('click')
  })
})

describe('index', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(index)
    const button = wrapper.find('#logo')
    button.trigger('click')
  })
})

describe('storage', () => {
  test('is a Vue Pages', () => {
    const wrapper = mount(storage)
    const button = wrapper.findAll('v-btn')
    button.trigger('click')
  })
})
