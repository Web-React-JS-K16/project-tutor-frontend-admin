// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-array-index-key */
// /* eslint-disable no-plusplus */
// /* eslint-disable import/prefer-default-export */
// import React from 'react'
// import { Select } from 'antd'
// import * as moment from 'moment'

// const { Option } = Select

// export const SelectYear = props => {
//   const { handleChange, startValue, endValue } = props
//   const dataYear = []
//   for (let index = 1990; index <= 2050; index++) {
//     dataYear.push(index)
//   }
//   const startValueNow = moment(startValue).format('YYYY') || new Date().getFullYear()
//   const endValueNow = moment(endValue).format('YYYY') || new Date().getFullYear()

//   return (
//     <Select defaultValue={startValueNow} style={{ width: 120 }} onChange={handleChange}>
//       {dataYear.map((item, index) => (
//         <Option value={item} key={index} disabled={}>
//           {item}
//         </Option>
//       ))}
//     </Select>
//   )
// }
