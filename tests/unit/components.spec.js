import BarChart from '@/components/BarChart.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import TableData from '@/components/TableData.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Navbar.vue', () => {
  const wrapper = shallowMount(Navbar)

  it('verify page title', () => {
    let msg = 'Crypto Price Tracker'

    expect(wrapper.text()).to.include(msg)
  })

  it('should render correctly', () => {

    expect(wrapper.find('.nav-button').text()).to.contain('Chart');

    expect(wrapper.findAll('.nav-button').at(1).text()).to.contain('Table');

    expect(wrapper.vm.menuItems.length).to.be.equal(2);
  });
})

describe('BarChart.vue', () => {
  const wrapper = shallowMount(BarChart);

  it('verify chart title', () => {
    const { label } = wrapper.vm.chartData.datasets[0]

    // the mock data loads firts, after the data is fetched the title change to Data BPI
    expect(label).to.be.equal('Mock Data BPI')
  });

  it('should render correctly', () => {
    expect(wrapper.vm.chartData).to.exist
  });
})

describe('Footer.vue', () => {
  const wrapper = shallowMount(Footer)

  it('verify page title', () => {
    let name = 'Moises Hernandez'

    const author = wrapper.find('.author')

    expect(author.text()).to.include(name)
  })
})

describe('TableData.vue', () => {
  const wrapper = shallowMount(TableData)

  it('verify page title', () => {
    const name = 'BTC Price'

    expect(wrapper.vm.title).to.be.equal(name)
  })
})
