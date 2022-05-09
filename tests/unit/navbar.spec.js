import Navbar from '@/components/Navbar'
import { shallowMount } from '@vue/test-utils'

describe('Navbar.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Navbar)

    const title = wrapper.find('h1')

    const navChart = wrapper.findAll('span').at(0)

    const navTable = wrapper.findAll('span').at(1)

    expect(title.text()).toContain('Test Project')

    expect(navChart.text()).toContain('Chart')

    expect(navTable.text()).toContain('Table')
  })
})
