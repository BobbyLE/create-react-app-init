describe('day3', () => {
  const list = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ]

  test('fdsaf', () => {
    list.forEach(val => {
      let split = val.split('')
      console.log(split)
    })
    expect(list).toEqual('1')
  })
})
