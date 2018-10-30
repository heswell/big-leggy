import React from 'react';
import cx from 'classnames';
import './leggy-form.css';

const KEY_LEFT = 37;
const KEY_RIGHT = 39;

export class LeggyForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rowIdx: 0,
      cellIdx: 0
    }

  }
  render(){

    const fieldList = this.buildFieldList(this.props.model);
    console.log(`${JSON.stringify(fieldList,null,2)}`)

    return (
      <div className="leggy-form">
        <div className="add-leg-bar"><span>+</span></div>
        {this.buildRows(fieldList)}
      </div>
    )
  }

  buildRows(fieldList){
    return fieldList.map((row,idx) => {
      const className = cx('field-row', {
        'head-row': idx === 0,
        'empty-row': row.isEmpty
      })
      return (
        <div className={className} key={idx}>
          {!row.isEmpty && 
           <div className="field-label">{row.label}</div>
          }
          {row.fields.map((field, idx) => 
            <div className="field" key={idx} onKeyDown={e => this.handleKeyDown(e.keyCode)}>
              {field.type === 'empty' ? (
                <div className="empty" />
              ) : (
                <div className="control" tabIndex={field.tabIdx} />
              )}
            </div>
          )}
        </div>
      )
    })

  }

  handleKeyDown(keyCode){
    if (keyCode === KEY_RIGHT){

    } else if (keyCode === KEY_LEFT){

    }
  }

  buildFieldList({fields, layout: {groups}}){

    const results = [];
    let tabIdx = 1;

    groups.forEach((group,idx) => {
      if (idx !== 0){
        results.push({
          label: false, isEmpty: true, fields: [{type:'empty'}]
        })
      }
      group.rows.forEach(fields => {
        const row = {
          label: fields[0].label, 
          fields: fields.map((field, idx) => ({
            ...field,
            tabIdx: tabIdx + idx
          }))}
        results.push(row);
        tabIdx += fields.length;
      })
    })
    
    return results;

  }

  __buildFieldList({fields, legs}){
    const fieldMap = fields.reduce((map, field, idx) => {
      map[field.id] = {
        ...field,
        idx
      }
      return map;
    },{});

    const results = [];

    const fieldList = legs.map(leg => sortFields(leg.fields, fieldMap))

    while(fieldList.some(fields => fields.length > 0)){
      const idx = lowestIdx(fieldList, fieldMap);
      const row = {label: null, fields: []};
      fieldList.forEach(fields => {
        if (fields.length > 0 && fieldMap[fields[0]].idx === idx){
          const id = fields.shift();
          row.fields.push(fieldMap[id]);
          if (row.label === null){
            row.label = fieldMap[id].label;
          }
        } else {
          row.fields.push({type: 'empty'})
        }
      })
      results.push(row);
    }
    return results;
  }


}

function sortFields(fields, fieldMap){
  return fields.slice().sort((f1, f2) => {
    return fieldMap[f1].idx - fieldMap[f2].idx;
  })  
}

function lowestIdx(fieldList, fieldMap){
  const firsts = fieldList.map(fields => fields.length > 0 ? fieldMap[fields[0]].idx : Number.MAX_SAFE_INTEGER);
  return Math.min(...firsts);
}