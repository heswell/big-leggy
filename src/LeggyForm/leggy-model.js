
const Field1 = {id: 'field-1', label: 'Field 1'}
const Field2 = {id: 'field-2', label: 'Field 2'}
const Field3 = {id: 'field-3', label: 'Field 3'}
const Field4 = {id: 'field-4', label: 'Field 4'}
const Field5 = {id: 'field-5', label: 'Field 5'}
const Field6 = {id: 'field-6', label: 'Field 6'}
const Field7 = {id: 'field-7', label: 'Field 7'}
const Field8 = {id: 'field-8', label: 'Field 8'}
const Field9 = {id: 'field-9', label: 'Field 9'}
const Empty = {id: 'empty', label: '', type: 'empty'}

export const leggyModel = {

  fields: [
    Field1,
    Field2,
    Field3,
    Field4,
    Field5
  ],

  layout: {
    groups: [
      { 
        id: 'group-1',
        label: null,
        rows: [
          [Field1, Field1],
          // if there is only 1 field, we expect the value to be same across all legs
          // throw if not
          [Field2],
          [Field3, Field3],
          [Field4, Empty],
          [Field5, Field5]      
        ]
      },
      { 
        id: 'group-2',
        label: null,
        rows: [
          [Field7, Field7],
          [Field8, Field8],
          [Field9, Field9]
        ]
      }
  ]},

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
        'field-4'
      ]
    }


  ]

}