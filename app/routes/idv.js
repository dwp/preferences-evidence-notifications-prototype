const express = require('express')
const router = express.Router()

// Hardcoded routing for external kbv testing
router.get('/idv/v4/kbv-external-2/consent-submit', function (req, res) {
  const consents = req.session.data['consent']
  if (consents === 'yes') {
    res.redirect('/idv/v4/kbv-external-2/01-credit-card')
  } else {
    res.redirect('/idv/v4/kbv-external-2/idv-start-page')
  }
})

// Hardcoded routing for external kbv testing
router.get('/idv/v4/kbv-external/consent-submit', function (req, res) {
  const consents = req.session.data['consent']
  if (consents === 'yes') {
    res.redirect('/idv/v4/kbv-external/01-credit-card')
  } else {
    res.redirect('/idv/v4/kbv-external/idv-start-page')
  }
})

// Hardcoded routing for testing
router.get('/idv/v4/kbv-blank-set/dvla-knockout-submit-2', function (req, res) {
  const hasDrivingLicense = req.session.data['has-driving-license']
  if (hasDrivingLicense === 'no') {
    res.redirect('/idv/v4/kbv-blank-set/award-amount')
  } else {
    res.redirect('/idv/v4/kbv-blank-set/dvla-consent')
  }
})

router.get('/idv/v4/kbv-blank-set/dvla-consent-submit', function (req, res) {
  const consents = req.session.data['dva-consent']
  if (consents === 'yes') {
    res.redirect('/idv/v4/kbv-blank-set/dvla-details')
  } else {
    res.redirect('/idv/v4/kbv-blank-set/award-amount')
  }
})

// DVLA knockout to DVLA details
router.get('/idv/default/dvla-knockout-submit', function (req, res) {
  const hasDrivingLicense = req.session.data['has-driving-license']
  if (hasDrivingLicense === 'no') {
    res.redirect('/idv/default/kbv-submit')
  } else {
    res.redirect('/idv/default/dvla-details')
  }
})

// DVLA knockout to consent
router.get('/idv/default/dvla-knockout-submit-2', function (req, res) {
  const hasDrivingLicense = req.session.data['has-driving-license']
  if (hasDrivingLicense === 'no') {
    res.redirect('/idv/default/kbv-submit')
  } else {
    res.redirect('/idv/default/dvla-consent')
  }
})

// DVLA consent
router.get('/idv/default/dvla-consent-submit', function (req, res) {
  const consents = req.session.data['dva-consent']
  if (consents === 'yes') {
    res.redirect('/idv/default/dvla-details')
  } else {
    res.redirect('/idv/default/kbv-submit')
  }
})

// KBVs
const kbvsCIS = [
  'child-dob',
  'child-name',
  'phone-number-home',
  'phone-number-mobile',
  'benefits-claimed-all',
  'partner-dob',
  'partner-nino'
]

const kbvsPIP = [
  'bank-account-number',
  'bank-name',
  'bank-sort-code',
  'pip-last-date',
  'pip-component-checkbox',
  'pip-pay-day',
  'pip-payment-amount',
  'pip-benefits-claimed-all'
]

const kbvsESA = [
  'esa-last-date',
  'esa-payment-amount',
  'esa-pay-day',
  'bank-account-number',
  'bank-sort-code',
  'esa-benefits-claimed-all',
  'gp-name',
  'gp-address'
]

let nextKbvIndex = 0

function getKbvSet(citizenBenefits) {
  if (!citizenBenefits) {
    return kbvsCIS;
  } else if (citizenBenefits.includes('pip') && citizenBenefits.includes('esa')) {
    // Create a set of PIP and ESA KBVs by concatenating and deduplicating the 2 arrays
    const kbvsConcat = kbvsPIP.concat(kbvsESA)
    return [...new Set(kbvsConcat)];
  } else if (citizenBenefits.includes('pip')) {
    return kbvsPIP
  } else if (citizenBenefits.includes('esa')) {
    return kbvsESA
  }
}

router.get('*', (req, res, next) => {
  // Reset nextKbvIndex when any non-KBV page is hit
  if (!req.url.includes('kbv')) {
    nextKbvIndex = 0
  }
  return next()
})

router.get('/idv/default/kbv/*', (req, res, next) => {
  // When any KBV is hit, update nextKbvIndex accordingly
  const kbvArr = getKbvSet(req.session.data['citizen-benefits'])
  const path = req.path
  const kbvPath = path.replace('/idv/default/kbv/', '')
  const idx = kbvArr.indexOf(kbvPath)
  if (idx > -1) {
    nextKbvIndex = idx + 1
  } else {
    // Reset if no next KBV
    nextKbvIndex = 0
  }
  return next()
})

router.get('/idv/default/kbv-submit', (req, res) => {
  // Generic KBV submit route that navigates to next KBV in current KBV set if available
  const kbvArr = getKbvSet(req.session.data['citizen-benefits'])
  const idvHappy = req.session.data['idvHappy']
  if (nextKbvIndex < kbvArr.length) {
    // Go to next KBV
    res.redirect(`/idv/default/kbv/${kbvArr[nextKbvIndex]}`)
  } else {
    // Exit KBVs
    if (idvHappy === 'false') {
      res.redirect('/idv/default/idv-fail')
    } else {
      res.redirect('/idv/default/idv-complete')
    }
  }
})

// HMRC IV

router.post('/idv/hmrciv/idvselection', (req, res) => {
  const passportConsent = req.session.data['ukPassport'];
  const payslipOrP60 = req.session.data['payslipOrP60'];
  const selfAssessment = req.session.data['self-assessment'];
  const voiceID = req.session.data['tcOptions'];
  const tuConsent = req.session.data['transunion'];

  // Passport and payslip
  if (passportConsent == 'true' && payslipOrP60 == 'payslip') {
    res.redirect('./your-passport-details-consent?payslip=true')
  }
  // Passport and P60 
  else if (passportConsent == 'true' && payslipOrP60 == 'p60') {
    res.redirect('./your-passport-details-consent?p60=true')
  }
  // Passport and Self Assessment 
  else if (passportConsent == 'true' && selfAssessment == 'true') {
    res.redirect('./your-passport-details-consent?sa=true')
  }
  // Passport and tax credits KBV
  else if (passportConsent == 'true' && voiceID == 'voiceIdNo') {
    res.redirect('./your-passport-details-consent?tcKbv=true')
  }
  // Passport and tax credits voice ID
  else if (passportConsent == 'true' && voiceID == 'voiceIdYes') {
    res.redirect('./your-passport-details-consent?voiceId=true')
  }
  // Passport and Transunion
  else if (passportConsent == 'true' && tuConsent == 'true') {
    res.redirect('./your-passport-details-consent?tuKbv=true')
  }

  // Payslip and tax credits KBV
  else if (payslipOrP60 == 'payslip' && voiceID == 'voiceIdNo') {
    res.redirect('./payslip-question-1?tcKbv=true');
  }
  // Payslip and Self Assessment 
  else if (payslipOrP60 == 'payslip' && selfAssessment == 'true') {
    res.redirect('./payslip-question-1?sa=true')
  }
  // Payslip and tax credits voice ID
  else if (payslipOrP60 == 'payslip' && voiceID == 'voiceIdYes') {
    res.redirect('./payslip-question-1?voiceId=true')
  }
  // Payslip and Transunion
  else if (payslipOrP60 == 'payslip' && tuConsent == 'true') {
    res.redirect('./payslip-question-1?tuKbv=true');
  }

  // P60 and Self Assessment 
  else if (payslipOrP60 == 'p60' && selfAssessment == 'true') {
    res.redirect('./p60-question-1?sa=true')
  }
  // P60 and tax credits KBV
  else if (payslipOrP60 == 'p60' && voiceID == 'voiceIdNo') {
    res.redirect('./p60-question-1?tcKbv=true');
  }
  // P60 and tax credits voice ID
  else if (payslipOrP60 == 'p60' && voiceID == 'voiceIdYes') {
    res.redirect('./p60-question-1?voiceId=true')
  }
  // P60 and Transunion
  else if (payslipOrP60 == 'p60' && tuConsent == 'true') {
    res.redirect('./p60-question-1?tuKbv=true');
  }

  // Self Assessment and tax credits KBV
  else if (selfAssessment == 'true' && voiceID == 'voiceIdNo') {
    res.redirect('./sa-questions?tcKbv=true');
  }
  // Self Assessment and tax credits voice ID
  else if (selfAssessment == 'true' && voiceID == 'voiceIdYes') {
    res.redirect('./sa-questions?voiceId=true')
  }
  // Self Assessment and Transunion
  else if (selfAssessment == 'true' && tuConsent == 'true') {
    res.redirect('./sa-questions?tuKbv=true');
  }

  // Tax credits KBV and Transunion
  else if (voiceID == 'voiceIdNo' && tuConsent == 'true') {
    res.redirect('./tax-credits-question-1?tuKbv=true');
  }
  // Tax credits voice ID and Transunion
  else if (voiceID == 'voiceIdYes' && tuConsent == 'true') {
    res.redirect('./voice-id?tuKbv=true')
  }
  // Fallback
  else {
    res.redirect('./choose-2-items-error')
  }
})

router.post('/idv/hmrciv/payslip', (req, res) => {
  res.redirect('./payslip-question-1');
})

router.post('/idv/hmrciv/p60', (req, res) => {
  res.redirect('./p60-question-1');
})

router.post('/idv/hmrciv/tcKbv', (req, res) => {
  res.redirect('./tax-credits-question-1');
})

router.post('/idv/hmrciv/tuKbv', (req, res) => {
  res.redirect('./credit-record-questions-consent');
})

router.post('/idv/hmrciv/voiceId', (req, res) => {
  res.redirect("./voice-id");
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
  req.session.data['payslipOrP60'] = "";
  req.session.data['tcOptions'] = "";
  req.session.data['cra-consent'] = "";
  req.session.data['passport-consent'] = "";
  req.session.payslip = false;
  req.session.p60 = false;
  req.session.sa = false;
  req.session.tcKbv = false;
  req.session.tuKbv = false;
  req.session.voiceId = false;
}

// Redirect to AtW prototype and include email address
router.get('/atw-v9-kbv-submit', function (req, res) {
  const email = req.session.data['register-email-address']
  res.redirect('https://atw-payment-claims-grant.herokuapp.com/alpha/post-login-routing?email=' + email)
})


module.exports = router
