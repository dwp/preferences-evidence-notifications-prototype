const express = require('express')
const router = express.Router()

router.post('/v13/idv/hmrciv/idvselection', (req, res) => {
  const passportConsent = req.session.data['kbv-passport-consent'];
  const payslipOrP60 = req.session.data['kbv-payslipOrP60'];
  const selfAssessment = req.session.data['kbv-self-assessment'];
  const voiceID = req.session.data['kbv-tcOptions'];
  const tuConsent = req.session.data['kbv-cra-consent'];

  // Passport and payslip
  if (passportConsent == 'true' && payslipOrP60 == 'kbv-payslip') {
    res.redirect('/auth/v13/idv/hmrciv/your-passport-details?payslip=true')
  }
  // Passport and P60 
  else if (passportConsent == 'true' && payslipOrP60 == 'kbv-p60') {
    res.redirect('/auth/v13/idv/hmrciv/your-passport-details?p60=true')
  }
  // Passport and Self Assessment 
  else if (passportConsent == 'true' && selfAssessment == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/your-passport-details?sa=true')
  }
  // Passport and tax credits KBV
  else if (passportConsent == 'true' && voiceID == 'kbv-voiceIdNo') {
    res.redirect('/auth/v13/idv/hmrciv/your-passport-details?tcKbv=true')
  }
  // Passport and tax credits voice ID
  else if (passportConsent == 'true' && voiceID == 'kbv-voiceIdYes') {
    res.redirect('/auth/v13/idv/hmrciv/your-passport-details?voiceId=true')
  }
  // Passport and Transunion
  else if (passportConsent == 'true' && tuConsent == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/your-passport-details?tuKbv=true')
  }

  // Payslip and tax credits KBV
  else if (payslipOrP60 == 'kbv-payslip' && voiceID == 'kbv-voiceIdNo') {
    res.redirect('/auth/v13/idv/hmrciv/payslip-question-1?tcKbv=true');
  }
  // Payslip and Self Assessment 
  else if (payslipOrP60 == 'kbv-payslip' && selfAssessment == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/payslip-question-1?sa=true')
  }
  // Payslip and tax credits voice ID
  else if (payslipOrP60 == 'kbv-payslip' && voiceID == 'kbv-voiceIdYes') {
    res.redirect('/auth/v13/idv/hmrciv/payslip-question-1?voiceId=true')
  }
  // Payslip and Transunion
  else if (payslipOrP60 == 'kbv-payslip' && tuConsent == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/payslip-question-1?tuKbv=true');
  }

  // P60 and Self Assessment 
  else if (payslipOrP60 == 'kbv-p60' && selfAssessment == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/p60-question-1?sa=true')
  }
  // P60 and tax credits KBV
  else if (payslipOrP60 == 'kbv-p60' && voiceID == 'kbv-voiceIdNo') {
    res.redirect('/auth/v13/idv/hmrciv/p60-question-1?tcKbv=true');
  }
  // P60 and tax credits voice ID
  else if (payslipOrP60 == 'kbv-p60' && voiceID == 'kbv-voiceIdYes') {
    res.redirect('/auth/v13/idv/hmrciv/p60-question-1?voiceId=true')
  }
  // P60 and Transunion
  else if (payslipOrP60 == 'kbv-p60' && tuConsent == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/p60-question-1?tuKbv=true');
  }

  // Self Assessment and tax credits KBV
  else if (selfAssessment == 'true' && voiceID == 'kbv-voiceIdNo') {
    res.redirect('/auth/v13/idv/hmrciv/sa-questions?tcKbv=true');
  }
  // Self Assessment and tax credits voice ID
  else if (selfAssessment == 'true' && voiceID == 'kbv-voiceIdYes') {
    res.redirect('/auth/v13/idv/hmrciv/sa-questions?voiceId=true')
  }
  // Self Assessment and Transunion
  else if (selfAssessment == 'true' && tuConsent == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/sa-questions?tuKbv=true');
  }

  // Tax credits KBV and Transunion
  else if (voiceID == 'kbv-voiceIdNo' && tuConsent == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/tax-credits-question-1?tuKbv=true');
  }
  // Tax credits voice ID and Transunion
  else if (voiceID == 'kbv-voiceIdYes' && tuConsent == 'true') {
    res.redirect('/auth/v13/idv/hmrciv/voice-id?tuKbv=true')
  }
  // Fallback
  else {
    res.redirect('/auth/v13/idv/hmrciv/choose-2-items-error')
  }
})

router.post('/v13/idv/hmrciv/payslip', (req, res) => {
  res.redirect('/auth/v13/idv/hmrciv/payslip-question-1');
})

router.post('/v13/idv/hmrciv/p60', (req, res) => {
  res.redirect('/auth/v13/idv/hmrciv/p60-question-1');
})

router.post('/v13/idv/hmrciv/sa-questions', (req, res) => {
  res.redirect('/auth/v13/idv/hmrciv/sa-questions');
})

router.post('/v13/idv/hmrciv/tcKbv', (req, res) => {
  res.redirect('/auth/v13/idv/hmrciv/tax-credits-question-1');
})

router.post('/v13/idv/hmrciv/tuKbv', (req, res) => {
  res.redirect('/auth/v13/idv/hmrciv/tu-question-1');
})

router.post('/v13/idv/hmrciv/voice-id', (req, res) => {
  res.redirect("/auth/v13/idv/hmrciv/voice-id");
})

router.post('/v13/idv/hmrciv/we-need-more-information', (req, res) => {
  res.redirect("/auth/v13/idv/hmrciv/more-information");
})

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.payslip) {
    req.session.payslip = req.query.payslip;
  }
  res.locals.payslip = req.session.payslip;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.p60) {
    req.session.p60 = req.query.p60;
  }
  res.locals.p60 = req.session.p60;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.sa) {
    req.session.sa = req.query.sa;
  }
  res.locals.sa = req.session.sa;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.tcKbv) {
    req.session.tcKbv = req.query.tcKbv;
  }
  res.locals.tcKbv = req.session.tcKbv;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.tuKbv) {
    req.session.tuKbv = req.query.tuKbv;
  }
  res.locals.tuKbv = req.session.tuKbv;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.payslip) {
    req.session.payslip = req.query.payslip;
  }
  res.locals.payslip = req.session.payslip;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.voiceId) {
    req.session.voiceId = req.query.voiceId;
  }
  res.locals.voiceId = req.session.voiceId;
  next();
});

const idvReset = req => {
  req.session.data['kbv-payslipOrP60'] = "";
  req.session.data['kbv-tcOptions'] = "";
  req.session.data['kbv-cra-consent'] = "";
  req.session.data['kbv-passport-consent'] = "";
  req.session.payslip = false;
  req.session.p60 = false;
  req.session.sa = false;
  req.session.tcKbv = false;
  req.session.tuKbv = false;
  req.session.voiceId = false;
}

//happy path 1


// router.route('/happyPath1/Q1')
//   .get((req, res) => {
//     res.render('idv/v5/kbv/child-dob')
//   })
//   .post((req, res) => {
//     res.redirect('idv/v5/kbv/child-name')
//   })

//Nicky see this
router.get('/happyPath1/Q1', (req, res) => {
  res.render('idv/v5/kbv/child-dob')
})
router.post('happyPath1/Q1', (req, res) => {
  res.redirect('/happyPath1/Q2')
})


router.get('/happyPath1/Q2', (req, res) => {
  res.render('idv/v5/kbv/child-name')
})
router.post('happyPath1/Q2', (req, res) => {
  res.redirect('/happyPath1/success')
})
router.get('/happyPath1/success', (req, res) => {
  res.render('/auth/v13/register/complete')
})

  // router.get('/hello-world', function (req, res) {
  //   res.render('hello_world', {'message' : 'Hello world'});
  // });

  // router.post('/v13/idv/hmrciv/tcKbv', (req, res) => {
  //   res.redirect('/auth/v13/idv/hmrciv/tax-credits-question-1');
  // })



router.post('/unhappy-path-q1', (req, res) => {

  const kbvUserJourneyPathQ1 = req.session.data['kbv-benefits-claimed-previously-q1'];
  const kbvUserJourneyPathQ2 = req.session.data['kbv-eldest-child-dob-q1-year'];

  if (kbvUserJourneyPathQ1 === 'jsa' || 'tax-credits' || 'carers-allowance' || 'pip' || 'esa' || 'income-support' && kbvUserJourneyPathQ2 >= '1960') {
    res.redirect('auth/v13/kbv-uplift/question-set-1/success')
  } 
  else {
    if (!kbvUserJourneyPathQ1 && !kbvUserJourneyPathQ2) {
      res.redirect('auth/v13/kbv-uplift/question-set-1/unsuccessful')
    }
  }
})

  // } else if (kbvUserJourneyPathQ1 === null && kbvUserJourneyPathQ2 === null)  {
  //   res.redirect('auth/v13/kbv-uplift/question-set-1/unsuccessful')
  // } else {
  //   res.redirect('auth/v13/kbv-uplift/question-set-1/unsuccessful')
  // }




module.exports = router