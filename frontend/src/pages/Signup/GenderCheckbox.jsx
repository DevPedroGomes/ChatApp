import React from 'react'

const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male'? "selected" : ""}`}>
            <span className='label-text text-gray-400'>Male</span>
            <input type='checkbox' onChange={() => onCheckBoxChange("male")} checked={selectedGender === 'male'} className='checkbox border-slate-300'/>
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'female'? "selected" : ""}`}>
            <span className='label-text text-gray-400'>Female</span>
            <input type='checkbox' onChange={() => onCheckBoxChange("female")} checked={selectedGender === 'female'} className='checkbox border-slate-300'/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
