//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// OIDV routes

const utils = require('../lib/utils')
const config = require('./config.json')

var useViewVersioning = (config.useViewVersioning === true)

// Import version-specific routes
const cxpRoutes = require('./routes/cxp')
const authRoutes = require('./routes/auth')
const idvRoutes = require('./routes/idv')
const kbvRoutes = require('./routes/kbv-uplift')

router.use('/', cxpRoutes)
router.use('/', authRoutes)
router.use('/', idvRoutes)
router.use('/', kbvRoutes)

if (useViewVersioning) {
  router.get('/*/default/*', utils.redirectToVersion, function (req, res, next) {
    next()
  })
}

if (useViewVersioning) {
  router.get('/*/v*/*', utils.checkVersion, function (req, res, next) {
    next()
  })
}

// Prototype-wide routing
router.post('/prototype-submit', (req, res, next) => {
  const currentUrl = req.protocol + '://' + req.get('host')
  // Get journey start and service name from journey-start value
  const journeyDetails = req.session.data['journey-start']
  const journeyDetailsArr = journeyDetails.split(',')
  const journeyStart = journeyDetailsArr[0]
  const serviceName = req.session.data[
    journeyDetailsArr[1] === 'carers' ? 'carers-service-name': 'dss-service-name'
  ]
  req.session.data['service-name'] = serviceName

  // Other variables
  const citizenName = req.session.data['citizen-name']
  const citizenBenefits = req.session.data['citizen-benefits']
  const cxp = req.session.data['cxp']
  const esaStatus = req.session.data['esa-status']
  const pipStatus = req.session.data['pip-status']
  const auth = req.session.data['auth']
  const idv = req.session.data['idv']
  const idvHappy = req.session.data['idvHappy']
  req.session.data['generated-link'] = currentUrl + journeyStart + '?' + 
    'citizen-name=' + citizenName + '&' + 
    'service-name=' + serviceName + '&' + 
    'citizen-benefits=' + citizenBenefits + '&' + 
    'cxp=' + cxp  + '&' + 
    'esa-status=' + esaStatus  + '&' + 
    'pip-status=' + pipStatus  + '&' + 
    'auth=' + auth  + '&' + 
    'idv=' + idv  + '&' + 
    'idvHappy=' + idvHappy 
  const action = req.session.data['action']
  if (action === 'generateLink') {
    res.redirect('/generate-link')
  } else {
    res.redirect(journeyStart)
  }
})


// PEN routes

// alt-formats routes
require('./views/alternative-formats/_routes')(router);

// router.post('/my-custom-route', (req, res) => {
//     res.redirect('./alternative-formats/written-format')
//   });



// PEN routes stop



router.post('/iteration-5-1/5-1a/check-if-you-can-use-the-service', function (req, res) {

    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService = req.session.data['how-did-you-find-out-about-this-service']
  
    // Check whether the variable matches a condition
    if (howDidYouFindOutAboutThisService == "letter-from-the-department-for-work-and-pensions"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1a/is-the-payment-in-your-name')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5-1/5-1a/is-the-payment-in-your-name', function (req, res) {

    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName = req.session.data['is-the-payment-in-your-name']
  
    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1a/what-do-you-need-to-do')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5-1/5-1a/what-do-you-need-to-do', function (req, res) {

    // Make a variable and give it the value from 'what-do-you-need'
    var whatDoYouNeed = req.session.data['what-do-you-need']
  
    // Check whether the variable matches a condition
    if (whatDoYouNeed == "change-my-bank-details"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1a/which-payments-do-you-need-to-change-bank-details-for')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })



  router.post('/iteration-5-1/5-1a/which-payments-do-you-need-to-change-bank-details-for', function (req, res) {

    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor = req.session.data['which-payments-do-you-need-to-change-bank-details-for']
  
    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1a/which-benefits-do-you-get')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })




  router.post('/iteration-5-1/5-1a/which-benefits-do-you-get', function (req, res) {

    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data['which-benefits-do-you-get']
  
    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "My benefit isn’t in the list"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1a/ineligible')
    } else {
      // Inactive
      res.redirect('/iteration-5-1/5-1a/changing-the-account-we-pay-your-money-into')
    }
  
  })
  

  router.post('/iteration-5-1/5-1a/changing-the-account-we-pay-your-money-into', function (req, res) {

    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto = req.session.data['are-your-accounts-in-the-uk']
  
    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1a/are-you-expecting-a-payment-in-the-next-six-working-days')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })



  router.post('/iteration-6/check-you-can-change-bank-details/are-you-expecting-a-payment-in-the-next-six-working-days-answer', function (req, res) {

    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays = req.session.data['are-you-expecting-a-payment-in-the-next-six-working-days']
  
    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes"){
        // Send user to next page
        res.redirect('/iteration-6/check-you-can-change-bank-details/you-can-use-service-payment-due')
      } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no"){
      // Send user to next page
      res.redirect('/iteration-6/check-you-can-change-bank-details/you-can-use-service-no-payment-due')
    } else {
      // Inactive
      res.redirect('/iteration-6/check-you-can-change-bank-details/you-can-use-service-unsure-payment-due')
    }
  
  })


  router.post('/iteration-5-1/5-1a/payment-in-progress/you-can-use-this-service-detailed', function (req, res) {

    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed = req.session.data['you-can-use-this-service-detailed']
  
    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes"){
        // Send user to next page
        res.redirect('/iteration-5-1/5-1a/payment-in-progress/customer-view')
      } else {
        // Inactive
        res.redirect('/iteration-5-1/5-1a/payment-in-progress/contact-us-to-change-account-details')
      }
    
    })



    router.post('/iteration-6/change-bank-details/benefits-you-need-to-change-answer', function (req, res) {

    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays = req.session.data['are-you-expecting-a-payment-in-the-next-six-working-days']
  
    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes"){
        // Send user to next page
        res.redirect('/iteration-6/change-bank-details/your-next-payment-old-account')
      } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no"){
      // Send user to next page
      res.redirect('/iteration-6/change-bank-details/your-next-payment-new-account')
    } else {
      // Inactive
      res.redirect('/iteration-6/change-bank-details/your-next-payment-old-account')
    }
  
  })

  router.post('/iteration-6/change-bank-details/check-your-details-answer', function (req, res) {

    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays = req.session.data['are-you-expecting-a-payment-in-the-next-six-working-days']
  
    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes"){
        // Send user to next page
        res.redirect('/iteration-6/we-are-updating-your-bank-details/next-payment-in-old-account')
      } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no"){
      // Send user to next page
      res.redirect('/iteration-6/we-are-updating-your-bank-details/next-payment-in-new-account')
    } else {
      // Inactive
      res.redirect('/iteration-6/we-are-updating-your-bank-details/next-payment-in-old-account')
    }
  
  })
        


        router.post('/iteration-5-1/5-1a/before-you-change-account-details', function (req, res) {

            // Make a variable and give it the value from 'before-you-change-account-details'
            var beforeYouChangeAccountDetails = req.session.data['before-you-change-account-details']
          
            // Check whether the variable matches a condition
            if (beforeYouChangeAccountDetails == "yes"){
                // Send user to next page
                res.redirect('/iteration-5-1/5-1a/enter-your-bank-building-society-or-credit-union-account-details')
              } else {
                // Inactive
                res.redirect('#')
              }
            
            })
        
    

            router.post('/iteration-5-1/5-1a/payment-in-progress/benefits-you-need-to-change', function (req, res) {

                // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
                var howDoYouNeedYourBenefitsToBePaid = req.session.data['how-do-you-need-your-benefits-to-be-paid']
              
                // Check whether the variable matches a condition
                if (howDoYouNeedYourBenefitsToBePaid == "Pay my benefits into one bank account"){
                    // Send user to next page
                    res.redirect('/iteration-5-1/5-1a/payment-in-progress/before-you-change-account-details')
                  } else {
                    // Inactive
                    res.redirect('#')
                  }
                
                })




                router.post('/iteration-5-1/5-1a/payment-in-progress/before-you-change-account-details', function (req, res) {

                    // Make a variable and give it the value from 'before-you-change-account-details'
                    var beforeYouChangeAccountDetails = req.session.data['before-you-change-account-details']
                  
                    // Check whether the variable matches a condition
                    if (beforeYouChangeAccountDetails == "yes"){
                        // Send user to next page
                        res.redirect('/iteration-5-1/5-1a/payment-in-progress/enter-your-bank-building-society-or-credit-union-account-details')
                      } else {
                        // Inactive
                        res.redirect('#')
                      }
                    
                    })





// 5-1b prototype route below



router.post('/iteration-5-1/5-1b/check-if-you-can-use-the-service', function (req, res) {

    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService = req.session.data['how-did-you-find-out-about-this-service']
  
    // Check whether the variable matches a condition
    if (howDidYouFindOutAboutThisService == "letter-from-the-department-for-work-and-pensions"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1b/is-the-payment-in-your-name')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5-1/5-1b/is-the-payment-in-your-name', function (req, res) {

    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName = req.session.data['is-the-payment-in-your-name']
  
    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1b/what-do-you-need-to-do')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5-1/5-1b/what-do-you-need-to-do', function (req, res) {

    // Make a variable and give it the value from 'what-do-you-need'
    var whatDoYouNeed = req.session.data['what-do-you-need']
  
    // Check whether the variable matches a condition
    if (whatDoYouNeed == "change-my-bank-details"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1b/which-payments-do-you-need-to-change-bank-details-for')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })



  router.post('/iteration-5-1/5-1b/which-payments-do-you-need-to-change-bank-details-for', function (req, res) {

    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor = req.session.data['which-payments-do-you-need-to-change-bank-details-for']
  
    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1b/which-benefits-do-you-get')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5-1/5-1b/which-benefits-do-you-get', function (req, res) {

    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data['which-benefits-do-you-get']
  
    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "My benefit isn’t in the list"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1b/ineligible')
    } else {
      // Inactive
      res.redirect('/iteration-5-1/5-1b/changing-the-account-we-pay-your-money-into')
    }
  
  })


  router.post('/iteration-5-1/5-1b/changing-the-account-we-pay-your-money-into', function (req, res) {

    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto = req.session.data['are-your-accounts-in-the-uk']
  
    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes"){
      // Send user to next page
      res.redirect('/iteration-5-1/5-1b/you-can-use-this-service-simple')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5-1/5-1b/benefits-you-need-to-change', function (req, res) {

    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid = req.session.data['how-do-you-need-your-benefits-to-be-paid']
  
    // Check whether the variable matches a condition
    if (howDoYouNeedYourBenefitsToBePaid == "Pay my benefits into one bank account"){
        // Send user to next page
        res.redirect('/iteration-5-1/5-1b/before-you-change-account-details')
      } else {
        // Inactive
        res.redirect('#')
      }
    
    })


    router.post('/iteration-5-1/5-1b/before-you-change-account-details', function (req, res) {

        // Make a variable and give it the value from 'before-you-change-account-details'
        var beforeYouChangeAccountDetails = req.session.data['before-you-change-account-details']
      
        // Check whether the variable matches a condition
        if (beforeYouChangeAccountDetails == "yes"){
            // Send user to next page
            res.redirect('/iteration-5-1/5-1b/enter-your-bank-building-society-or-credit-union-account-details')
          } else {
            // Inactive
            res.redirect('#')
          }
        
        })



        router.post('/iteration-5-1/5-1b/are-you-expecting-a-payment-in-the-next-six-working-days', function (req, res) {

            // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
            var areYouExpectingaPaymentInTheNextSixWorkingDays = req.session.data['are-you-expecting-a-payment-in-the-next-six-working-days']
          
            // Check whether the variable matches a condition
            if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes"){
                // Send user to next page
                res.redirect('/iteration-5-1/5-1b/payment-in-progress/you-can-use-this-service-detailed')
              } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no"){
              // Send user to next page
              res.redirect('/iteration-5-1/5-1b/you-can-use-this-service-simple')
            } else {
              // Inactive
              res.redirect('/iteration-5-1/5-1b/contact-us')
            }
          
          })
        
        
        
          router.post('/iteration-5-1/5-1b/payment-in-progress/you-can-use-this-service-detailed', function (req, res) {
        
            // Make a variable and give it the value from 'you-can-use-this-service-detailed'
            var youCanUseThisServiceDetailed = req.session.data['you-can-use-this-service-detailed']
          
            // Check whether the variable matches a condition
            if (youCanUseThisServiceDetailed == "yes"){
                // Send user to next page
                res.redirect('/iteration-5-1/5-1b/payment-in-progress/customer-view')
              } else {
                // Inactive
                res.redirect('/iteration-5-1/5-1b/payment-in-progress/contact-us-to-change-account-details')
              }
            
            })







            // 5-0 prototype route below



router.post('/iteration-5/5-0/check-if-you-can-use-the-service', function (req, res) {

  // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
  var howDidYouFindOutAboutThisService = req.session.data['how-did-you-find-out-about-this-service']

  // Check whether the variable matches a condition
  if (howDidYouFindOutAboutThisService == "letter-from-the-department-for-work-and-pensions"){
    // Send user to next page
    res.redirect('/iteration-5/5-0/is-the-payment-in-your-name')
  } else {
    // Inactive
    res.redirect('#')
  }

})


router.post('/iteration-5/5-0/is-the-payment-in-your-name', function (req, res) {

  // Make a variable and give it the value from 'is-the-payment-in-your-name'
  var isThePaymentInYourName = req.session.data['is-the-payment-in-your-name']

  // Check whether the variable matches a condition
  if (isThePaymentInYourName == "yes"){
    // Send user to next page
    res.redirect('/iteration-5/5-0/what-do-you-need-to-do')
  } else {
    // Inactive
    res.redirect('#')
  }

})


router.post('/iteration-5/5-0/what-do-you-need-to-do', function (req, res) {

  // Make a variable and give it the value from 'what-do-you-need'
  var whatDoYouNeed = req.session.data['what-do-you-need']

  // Check whether the variable matches a condition
  if (whatDoYouNeed == "change-my-bank-details"){
    // Send user to next page
    res.redirect('/iteration-5/5-0/which-payments-do-you-need-to-change-bank-details-for')
  } else {
    // Inactive
    res.redirect('#')
  }

})



router.post('/iteration-5/5-0/which-payments-do-you-need-to-change-bank-details-for', function (req, res) {

  // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
  var whichPaymentDoYouNeedToChangeBankDetailsFor = req.session.data['which-payments-do-you-need-to-change-bank-details-for']

  // Check whether the variable matches a condition
  if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only"){
    // Send user to next page
    res.redirect('/iteration-5/5-0/which-benefits-do-you-get')
  } else {
    // Inactive
    res.redirect('#')
  }

})


router.post('/iteration-5/5-0/which-benefits-do-you-get', function (req, res) {

  // Make a variable and give it the value from 'which-benefits-do-you-get'
  var whichBenefitsDoYouGet = req.session.data['which-benefits-do-you-get']

  // Check whether the variable matches a condition
  if (whichBenefitsDoYouGet == "My benefit isn’t in the list"){
    // Send user to next page
    res.redirect('/iteration-5/5-0/ineligible')
  } else {
    // Inactive
    res.redirect('/iteration-5/5-0/changing-the-account-we-pay-your-money-into')
  }

})


router.post('/iteration-5/5-0/changing-the-account-we-pay-your-money-into', function (req, res) {

  // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
  var changingTheAccountWePayYourMoneyInto = req.session.data['are-your-accounts-in-the-uk']

  // Check whether the variable matches a condition
  if (changingTheAccountWePayYourMoneyInto == "yes"){
    // Send user to next page
    res.redirect('/iteration-5/5-0/are-you-expecting-a-payment-in-the-next-six-working-days')
  } else {
    // Inactive
    res.redirect('/iteration-5/5-0/you-can-only-use-this-service-if-your-accounts-in-uk')
  }

})


router.post('/iteration-5/5-0/benefits-you-need-to-change', function (req, res) {

  // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
  var howDoYouNeedYourBenefitsToBePaid = req.session.data['how-do-you-need-your-benefits-to-be-paid']

  // Check whether the variable matches a condition
  if (howDoYouNeedYourBenefitsToBePaid == "Pay my benefits into one bank account"){
      // Send user to next page
      res.redirect('/iteration-5/5-0/before-you-change-account-details')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5/5-0/before-you-change-account-details', function (req, res) {

      // Make a variable and give it the value from 'before-you-change-account-details'
      var beforeYouChangeAccountDetails = req.session.data['before-you-change-account-details']
    
      // Check whether the variable matches a condition
      if (beforeYouChangeAccountDetails == "yes"){
          // Send user to next page
          res.redirect('/iteration-5/5-0/enter-your-bank-building-society-or-credit-union-account-details')
        } else {
          // Inactive
          res.redirect('#')
        }
      
      })



      router.post('/iteration-5/5-0/are-you-expecting-a-payment-in-the-next-six-working-days', function (req, res) {

          // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
          var areYouExpectingaPaymentInTheNextSixWorkingDays = req.session.data['are-you-expecting-a-payment-in-the-next-six-working-days']
        
          // Check whether the variable matches a condition
          if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes"){
              // Send user to next page
              res.redirect('/iteration-5/5-0/payment-in-progress/you-can-use-this-service-detailed')
            } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no"){
            // Send user to next page
            res.redirect('/iteration-5/5-0/you-can-use-this-service-simple')
          } else {
            // Inactive
            res.redirect('/iteration-5/5-0/contact-us')
          }
        
        })
      
      
      
        router.post('/iteration-5/5-0/payment-in-progress/you-can-use-this-service-detailed', function (req, res) {
      
          // Make a variable and give it the value from 'you-can-use-this-service-detailed'
          var youCanUseThisServiceDetailed = req.session.data['you-can-use-this-service-detailed']
        
          // Check whether the variable matches a condition
          if (youCanUseThisServiceDetailed == "yes"){
              // Send user to next page
              res.redirect('/iteration-5/5-0/payment-in-progress/customer-view')
            } else {
              // Inactive
              res.redirect('/iteration-5/5-0/payment-in-progress/contact-us-to-change-account-details')
            }
          
          })