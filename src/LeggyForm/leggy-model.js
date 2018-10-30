export const leggyModel = {

  fields: [
    {id: 'field-1', label: 'Field 1'},
    {id: 'field-2', label: 'Field 2'},
    {id: 'field-3', label: 'Field 3'},
    {id: 'field-35', label: 'Field 35'},
    {id: 'field-4', label: 'Field 4'},
    {id: 'field-5', label: 'Field 5'}
  ],

  legs: [
    {
      id: 'leg1',
      fields: [
        'field-1',
        'field-2',
        'field-3',
        'field-5',
        'field-4'
      ]
    },
    {
      id: 'leg2',
      fields: [
        'field-1',
        'field-2',
        'field-3',
        'field-4',
        'field-35'
      ]
    }


  ]

}