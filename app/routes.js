//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// alt-formats routes
require('./views/alternative-formats/_routes')(router);

// router.post('/my-custom-route', (req, res) => {
//     res.redirect('./alternative-formats/written-format')
//   });


router.post('/iteration-5/5a/check-if-you-can-use-the-service', function (req, res) {

    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService = req.session.data['how-did-you-find-out-about-this-service']
  
    // Check whether the variable matches a condition
    if (howDidYouFindOutAboutThisService == "letter-from-the-department-for-work-and-pensions"){
      // Send user to next page
      res.redirect('/iteration-5/5a/is-the-payment-in-your-name')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5/5a/is-the-payment-in-your-name', function (req, res) {

    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName = req.session.data['is-the-payment-in-your-name']
  
    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes"){
      // Send user to next page
      res.redirect('/iteration-5/5a/what-do-you-need-to-do')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5/5a/what-do-you-need-to-do', function (req, res) {

    // Make a variable and give it the value from 'what-do-you-need'
    var whatDoYouNeed = req.session.data['what-do-you-need']
  
    // Check whether the variable matches a condition
    if (whatDoYouNeed == "change-my-bank-details"){
      // Send user to next page
      res.redirect('/iteration-5/5a/which-payments-do-you-need-to-change-bank-details-for')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })



  router.post('/iteration-5/5a/which-payments-do-you-need-to-change-bank-details-for', function (req, res) {

    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor = req.session.data['which-payments-do-you-need-to-change-bank-details-for']
  
    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only"){
      // Send user to next page
      res.redirect('/iteration-5/5a/which-benefits-do-you-get')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })




  router.post('/iteration-5/5a/which-benefits-do-you-get', function (req, res) {

    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data['which-benefits-do-you-get']
  
    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "my-benefit-isnt-on-the-list"){
      // Send user to next page
      res.redirect('/iteration-5/5a/ineligible')
    } else {
      // Inactive
      res.redirect('/iteration-5/5a/changing-the-account-we-pay-your-money-into')
    }
  
  })
  

  router.post('/iteration-5/5a/changing-the-account-we-pay-your-money-into', function (req, res) {

    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto = req.session.data['are-your-accounts-in-the-uk']
  
    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes"){
      // Send user to next page
      res.redirect('/iteration-5/5a/are-you-expecting-a-payment-in-the-next-six-working-days')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })



  router.post('/iteration-5/5a/are-you-expecting-a-payment-in-the-next-six-working-days', function (req, res) {

    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays = req.session.data['are-you-expecting-a-payment-in-the-next-six-working-days']
  
    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes"){
        // Send user to next page
        res.redirect('/iteration-5/5a/payment-in-progress/you-can-use-this-service-detailed')
      } if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no"){
      // Send user to next page
      res.redirect('/iteration-5/5a/you-can-use-this-service-simple')
    } else {
      // Inactive
      res.redirect('/iteration-5/5a/contact-us')
    }
  
  })



  router.post('/iteration-5/5a/payment-in-progress/you-can-use-this-service-detailed', function (req, res) {

    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed = req.session.data['you-can-use-this-service-detailed']
  
    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes"){
        // Send user to next page
        res.redirect('/iteration-5/5a/payment-in-progress/customer-view')
      } else {
        // Inactive
        res.redirect('/iteration-5/5a/payment-in-progress/contact-us-to-change-account-details')
      }
    
    })



    router.post('/iteration-5/5a/benefits-you-need-to-change', function (req, res) {

        // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
        var howDoYouNeedYourBenefitsToBePaid = req.session.data['how-do-you-need-your-benefits-to-be-paid']
      
        // Check whether the variable matches a condition
        if (howDoYouNeedYourBenefitsToBePaid == "Pay my benefits into one bank account"){
            // Send user to next page
            res.redirect('/iteration-5/5a/before-you-change-account-details')
          } else {
            // Inactive
            res.redirect('#')
          }
        
        })

        


        router.post('/iteration-5/5a/before-you-change-account-details', function (req, res) {

            // Make a variable and give it the value from 'before-you-change-account-details'
            var beforeYouChangeAccountDetails = req.session.data['before-you-change-account-details']
          
            // Check whether the variable matches a condition
            if (beforeYouChangeAccountDetails == "yes"){
                // Send user to next page
                res.redirect('/iteration-5/5a/enter-your-bank-building-society-or-credit-union-account-details')
              } else {
                // Inactive
                res.redirect('#')
              }
            
            })
        
    

            router.post('/iteration-5/5a/payment-in-progress/benefits-you-need-to-change', function (req, res) {

                // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
                var howDoYouNeedYourBenefitsToBePaid = req.session.data['how-do-you-need-your-benefits-to-be-paid']
              
                // Check whether the variable matches a condition
                if (howDoYouNeedYourBenefitsToBePaid == "Pay my benefits into one bank account"){
                    // Send user to next page
                    res.redirect('/iteration-5/5a/payment-in-progress/before-you-change-account-details')
                  } else {
                    // Inactive
                    res.redirect('#')
                  }
                
                })




                router.post('/iteration-5/5a/payment-in-progress/before-you-change-account-details', function (req, res) {

                    // Make a variable and give it the value from 'before-you-change-account-details'
                    var beforeYouChangeAccountDetails = req.session.data['before-you-change-account-details']
                  
                    // Check whether the variable matches a condition
                    if (beforeYouChangeAccountDetails == "yes"){
                        // Send user to next page
                        res.redirect('/iteration-5/5a/payment-in-progress/enter-your-bank-building-society-or-credit-union-account-details')
                      } else {
                        // Inactive
                        res.redirect('#')
                      }
                    
                    })





// 5b prototype route below



router.post('/iteration-5/5b/check-if-you-can-use-the-service', function (req, res) {

    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService = req.session.data['how-did-you-find-out-about-this-service']
  
    // Check whether the variable matches a condition
    if (howDidYouFindOutAboutThisService == "letter-from-the-department-for-work-and-pensions"){
      // Send user to next page
      res.redirect('/iteration-5/5b/is-the-payment-in-your-name')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5/5b/is-the-payment-in-your-name', function (req, res) {

    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName = req.session.data['is-the-payment-in-your-name']
  
    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes"){
      // Send user to next page
      res.redirect('/iteration-5/5b/what-do-you-need-to-do')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5/5b/what-do-you-need-to-do', function (req, res) {

    // Make a variable and give it the value from 'what-do-you-need'
    var whatDoYouNeed = req.session.data['what-do-you-need']
  
    // Check whether the variable matches a condition
    if (whatDoYouNeed == "change-my-bank-details"){
      // Send user to next page
      res.redirect('/iteration-5/5b/which-payments-do-you-need-to-change-bank-details-for')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })



  router.post('/iteration-5/5b/which-payments-do-you-need-to-change-bank-details-for', function (req, res) {

    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor = req.session.data['which-payments-do-you-need-to-change-bank-details-for']
  
    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only"){
      // Send user to next page
      res.redirect('/iteration-5/5b/which-benefits-do-you-get')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5/5b/which-benefits-do-you-get', function (req, res) {

    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data['which-benefits-do-you-get']
  
    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "my-benefit-isnt-on-the-list"){
      // Send user to next page
      res.redirect('/iteration-5/5b/ineligible')
    } else {
      // Inactive
      res.redirect('/iteration-5/5b/changing-the-account-we-pay-your-money-into')
    }
  
  })


  router.post('/iteration-5/5b/changing-the-account-we-pay-your-money-into', function (req, res) {

    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto = req.session.data['are-your-accounts-in-the-uk']
  
    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes"){
      // Send user to next page
      res.redirect('/iteration-5/5b/you-can-use-this-service-simple')
    } else {
      // Inactive
      res.redirect('#')
    }
  
  })


  router.post('/iteration-5/5b/benefits-you-need-to-change', function (req, res) {

    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid = req.session.data['how-do-you-need-your-benefits-to-be-paid']
  
    // Check whether the variable matches a condition
    if (howDoYouNeedYourBenefitsToBePaid == "Pay my benefits into one bank account"){
        // Send user to next page
        res.redirect('/iteration-5/5b/before-you-change-account-details')
      } else {
        // Inactive
        res.redirect('#')
      }
    
    })


    router.post('/iteration-5/5b/before-you-change-account-details', function (req, res) {

        // Make a variable and give it the value from 'before-you-change-account-details'
        var beforeYouChangeAccountDetails = req.session.data['before-you-change-account-details']
      
        // Check whether the variable matches a condition
        if (beforeYouChangeAccountDetails == "yes"){
            // Send user to next page
            res.redirect('/iteration-5/5b/enter-your-bank-building-society-or-credit-union-account-details')
          } else {
            // Inactive
            res.redirect('#')
          }
        
        })



        router.post('/iteration-5/5b/are-you-expecting-a-payment-in-the-next-six-working-days', function (req, res) {

            // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
            var areYouExpectingaPaymentInTheNextSixWorkingDays = req.session.data['are-you-expecting-a-payment-in-the-next-six-working-days']
          
            // Check whether the variable matches a condition
            if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes"){
                // Send user to next page
                res.redirect('/iteration-5/5b/payment-in-progress/you-can-use-this-service-detailed')
              } if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no"){
              // Send user to next page
              res.redirect('/iteration-5/5b/you-can-use-this-service-simple')
            } else {
              // Inactive
              res.redirect('/iteration-5/5b/contact-us')
            }
          
          })
        
        
        
          router.post('/iteration-5/5b/payment-in-progress/you-can-use-this-service-detailed', function (req, res) {
        
            // Make a variable and give it the value from 'you-can-use-this-service-detailed'
            var youCanUseThisServiceDetailed = req.session.data['you-can-use-this-service-detailed']
          
            // Check whether the variable matches a condition
            if (youCanUseThisServiceDetailed == "yes"){
                // Send user to next page
                res.redirect('/iteration-5/5b/payment-in-progress/customer-view')
              } else {
                // Inactive
                res.redirect('/iteration-5/5b/payment-in-progress/contact-us-to-change-account-details')
              }
            
            })