import React from 'react';
import jsPDF from 'jspdf'

class App extends React.Component {
   
    constructor(props) {
        super(props)
    };

    generatePdf = () => {
      
      var doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, 'This is the first page title.')

      doc.setFont('helvetica')
      doc.setFontType('normal')
      doc.text(20, 60, 'This is the content area.')
      doc.addPage() // this code creates new page in pdf document
      doc.setFont('helvetica')
      doc.setFontType('normal')
      doc.text(20, 100, 'This is the second page.')      

      
      doc.save('sample-file.pdf')
    }   
    
   render() {
      return (
         <div>
            <button onClick={this.generatePdf} type="primary">Download PDF</button> 
         </div>
      );
   }
}

export default App;