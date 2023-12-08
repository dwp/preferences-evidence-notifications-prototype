const { log, dir } = require('console');
const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const getFilter = govukPrototypeKit.views.getFilter

module.exports = function () {

addFilter('getLabel', (id, isCheckAnswers) => {
  
  // Radio/Checkbox button labels
  const labelContent = new Object ({
    'standard-letter' : 'Standard letter (12-point Arial text on white paper)',
    'non-standard-letter' : 'Another print size, font or paper colour',
    'large-print' : 'Large print',
    'large-print-16' : '16 point',
    'large-print-16-check-answers' : 'Font size 16 point',
    'large-print-18' : '18 point',
    'large-print-18-check-answers' : 'Font size 18 point',
    'large-print-24' : '24 point',
    'large-print-24-check-answers' : 'Font size 24 point',
    'bold-text' : 'Bold text',
    'font' : 'A different font',
    'arial' : 'Arial',
    'calibri' : 'Calibri',
    'helvetica' : 'Helvetica',
    'tahoma' : 'Tahoma',
    'times-new-roman' : 'Times New Roman',
    'verdana' : 'Verdana',
    'double-line-spacing' : 'Double line spacing',
    'coloured-paper' : 'Coloured paper',
    'cream' : 'Cream',
    'pastel-blue' : 'Pastel blue',
    'pastel-yellow' : 'Pastel yellow',
    'pale-pink' : 'Pale pink',
    'audio' : 'Audio',
    'cd' : 'CD',
    'mp3' : 'MP3 file by email',
    'cassette-tape' : 'Cassette tape',
    'audio-dvd' : 'DVD',
    'braille' : 'Braille',
    'grade-1' : 'Uncontracted braille (grade 1)',
    'grade-2' : 'Contracted braille (grade 2)',
    'british-sign-language-video' : 'British Sign Language video',
    'bsl-dvd' : 'DVD',
    'mpeg' : 'MPEG file by email',
    'pdf' : 'PDF with accessibility features',
    'word' : 'Microsoft Word document',
    'standard-phone-call' : 'Standard phone call',
    'relay-uk' : 'Relay UK',
    'textphone' : 'Textphone',
    'signing-lipspeaking' : 'Signing or lipspeaking',
    'british-sign-language-interpreter' : 'British Sign Language (BSL) interpreter',
    'deafblind-manual-alphabet' : 'Deafblind Manual alphabet',
    'hands-on-signing' : 'Hands-on signing',
    'lipspeaking' : 'Lipspeaking',
    'sign-supported-english' : 'Sign Supported English',
  })



  if (isCheckAnswers && id+'-check-answers' in labelContent ) { // If on check answers page get the -check-answers version if it's available
    return labelContent[id+'-check-answers']
  } else if (id in labelContent) { // Majority of cases, just get the label from the list
    return labelContent[id]
  }  
  
  // Show an error if nothing is found
  console.log('Id not recognised - verify the id is spelt correctly and check getLabel in _filters.js to see if the id and label exists.')
  return 'Id not recognised - verify the id is spelt correctly and check getLabel in _filters.js to see if the id and label exists.'

});

addFilter('getOptions', (format) => {


  let options = []
  const getLabel = getFilter('getLabel'),
        textFields = [ // text fileds like email and phone number where we just want the entered value
          'email',
          'relayUkNumber',
          'textphone',
        ]

        console.log("HERE we are!")
        console.dir(options)
        console.dir(format.options)

  for (const option in format.options) {
    console.log('option: ' + option)
    if ( textFields.includes(option) ) { // For text fields just return the entered value
      options.push( format.options[option] )
    } else { // default get the radio button label for check answers
      options.push( getLabel(format.options[option], true) )
    }
  }

  return options;
});
  

} // end module.exports