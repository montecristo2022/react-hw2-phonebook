import Input from './Input/Input';

// export const App = () => {

// // formSubmitHendler = data => {
// //   console.log(data)
// // }

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Input/>
//     </div>
//   );
// };

import React, { Component } from 'react';

export default class App extends Component {
  formSubmitHendler = data => {
    console.log(data);
    return data;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Input onSubmit={this.formSubmitHendler} />

        <div>КАК СЮДА ВСТАВИТЬ ДАННЫЕ ИЗ ИНПУТА?</div>
      </div>
    );
  }
}
