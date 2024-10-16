//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

// PEN routes

// alt-formats routes
require("./views/alternative-formats/_routes")(router);

// router.post('/my-custom-route', (req, res) => {
//     res.redirect('./alternative-formats/written-format')
//   });

// PEN routes stop

router.post(
  "/iteration-5-1/5-1a/check-if-you-can-use-the-service",
  function (req, res) {
    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService =
      req.session.data["how-did-you-find-out-about-this-service"];

    // Check whether the variable matches a condition
    if (
      howDidYouFindOutAboutThisService ==
      "letter-from-the-department-for-work-and-pensions"
    ) {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/is-the-payment-in-your-name");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/is-the-payment-in-your-name",
  function (req, res) {
    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName =
      req.session.data["is-the-payment-in-your-name"];

    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/what-do-you-need-to-do");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5-1/5-1a/what-do-you-need-to-do", function (req, res) {
  // Make a variable and give it the value from 'what-do-you-need'
  var whatDoYouNeed = req.session.data["what-do-you-need"];

  // Check whether the variable matches a condition
  if (whatDoYouNeed == "change-my-bank-details") {
    // Send user to next page
    res.redirect(
      "/iteration-5-1/5-1a/which-payments-do-you-need-to-change-bank-details-for"
    );
  } else {
    // Inactive
    res.redirect("#");
  }
});

router.post(
  "/iteration-5-1/5-1a/which-payments-do-you-need-to-change-bank-details-for",
  function (req, res) {
    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor =
      req.session.data["which-payments-do-you-need-to-change-bank-details-for"];

    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/which-benefits-do-you-get");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/which-benefits-do-you-get",
  function (req, res) {
    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data["which-benefits-do-you-get"];

    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "My benefit isn’t in the list") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/ineligible");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1a/changing-the-account-we-pay-your-money-into"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/changing-the-account-we-pay-your-money-into",
  function (req, res) {
    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto =
      req.session.data["are-your-accounts-in-the-uk"];

    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/are-you-expecting-a-payment-in-the-next-six-working-days"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-6/check-you-can-change-bank-details/are-you-expecting-a-payment-in-the-next-six-working-days-answer",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-6/check-you-can-change-bank-details/you-can-use-service-payment-due"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect(
        "/iteration-6/check-you-can-change-bank-details/you-can-use-service-no-payment-due"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-6/check-you-can-change-bank-details/you-can-use-service-unsure-payment-due"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/payment-in-progress/you-can-use-this-service-detailed",
  function (req, res) {
    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed =
      req.session.data["you-can-use-this-service-detailed"];

    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1a/payment-in-progress/customer-view");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1a/payment-in-progress/contact-us-to-change-account-details"
      );
    }
  }
);

router.post(
  "/iteration-6/change-bank-details/benefits-you-need-to-change-answer",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-6/change-bank-details/your-next-payment-old-account"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect(
        "/iteration-6/change-bank-details/your-next-payment-new-account"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-6/change-bank-details/your-next-payment-old-account"
      );
    }
  }
);

router.post(
  "/iteration-6/change-bank-details/check-your-details-answer",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-6/we-are-updating-your-bank-details/next-payment-in-old-account"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect(
        "/iteration-6/we-are-updating-your-bank-details/next-payment-in-new-account"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-6/we-are-updating-your-bank-details/next-payment-in-old-account"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/payment-in-progress/benefits-you-need-to-change",
  function (req, res) {
    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid =
      req.session.data["how-do-you-need-your-benefits-to-be-paid"];

    // Check whether the variable matches a condition
    if (
      howDoYouNeedYourBenefitsToBePaid ==
      "Pay my benefits into one bank account"
    ) {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/payment-in-progress/before-you-change-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1a/payment-in-progress/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1a/payment-in-progress/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

// 5-1b prototype route below

router.post(
  "/iteration-5-1/5-1b/check-if-you-can-use-the-service",
  function (req, res) {
    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService =
      req.session.data["how-did-you-find-out-about-this-service"];

    // Check whether the variable matches a condition
    if (
      howDidYouFindOutAboutThisService ==
      "letter-from-the-department-for-work-and-pensions"
    ) {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/is-the-payment-in-your-name");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/is-the-payment-in-your-name",
  function (req, res) {
    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName =
      req.session.data["is-the-payment-in-your-name"];

    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/what-do-you-need-to-do");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5-1/5-1b/what-do-you-need-to-do", function (req, res) {
  // Make a variable and give it the value from 'what-do-you-need'
  var whatDoYouNeed = req.session.data["what-do-you-need"];

  // Check whether the variable matches a condition
  if (whatDoYouNeed == "change-my-bank-details") {
    // Send user to next page
    res.redirect(
      "/iteration-5-1/5-1b/which-payments-do-you-need-to-change-bank-details-for"
    );
  } else {
    // Inactive
    res.redirect("#");
  }
});

router.post(
  "/iteration-5-1/5-1b/which-payments-do-you-need-to-change-bank-details-for",
  function (req, res) {
    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor =
      req.session.data["which-payments-do-you-need-to-change-bank-details-for"];

    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/which-benefits-do-you-get");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/which-benefits-do-you-get",
  function (req, res) {
    // Make a variable and give it the value from 'which-benefits-do-you-get'
    var whichBenefitsDoYouGet = req.session.data["which-benefits-do-you-get"];

    // Check whether the variable matches a condition
    if (whichBenefitsDoYouGet == "My benefit isn’t in the list") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/ineligible");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1b/changing-the-account-we-pay-your-money-into"
      );
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/changing-the-account-we-pay-your-money-into",
  function (req, res) {
    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto =
      req.session.data["are-your-accounts-in-the-uk"];

    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/you-can-use-this-service-simple");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/benefits-you-need-to-change",
  function (req, res) {
    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid =
      req.session.data["how-do-you-need-your-benefits-to-be-paid"];

    // Check whether the variable matches a condition
    if (
      howDoYouNeedYourBenefitsToBePaid ==
      "Pay my benefits into one bank account"
    ) {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/before-you-change-account-details");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1b/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/are-you-expecting-a-payment-in-the-next-six-working-days",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5-1/5-1b/payment-in-progress/you-can-use-this-service-detailed"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/you-can-use-this-service-simple");
    } else {
      // Inactive
      res.redirect("/iteration-5-1/5-1b/contact-us");
    }
  }
);

router.post(
  "/iteration-5-1/5-1b/payment-in-progress/you-can-use-this-service-detailed",
  function (req, res) {
    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed =
      req.session.data["you-can-use-this-service-detailed"];

    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes") {
      // Send user to next page
      res.redirect("/iteration-5-1/5-1b/payment-in-progress/customer-view");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5-1/5-1b/payment-in-progress/contact-us-to-change-account-details"
      );
    }
  }
);

// 5-0 prototype route below

router.post(
  "/iteration-5/5-0/check-if-you-can-use-the-service",
  function (req, res) {
    // Make a variable and give it the value from 'how-did-you-find-out-about-this-service'
    var howDidYouFindOutAboutThisService =
      req.session.data["how-did-you-find-out-about-this-service"];

    // Check whether the variable matches a condition
    if (
      howDidYouFindOutAboutThisService ==
      "letter-from-the-department-for-work-and-pensions"
    ) {
      // Send user to next page
      res.redirect("/iteration-5/5-0/is-the-payment-in-your-name");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5/5-0/is-the-payment-in-your-name",
  function (req, res) {
    // Make a variable and give it the value from 'is-the-payment-in-your-name'
    var isThePaymentInYourName =
      req.session.data["is-the-payment-in-your-name"];

    // Check whether the variable matches a condition
    if (isThePaymentInYourName == "yes") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/what-do-you-need-to-do");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5/5-0/what-do-you-need-to-do", function (req, res) {
  // Make a variable and give it the value from 'what-do-you-need'
  var whatDoYouNeed = req.session.data["what-do-you-need"];

  // Check whether the variable matches a condition
  if (whatDoYouNeed == "change-my-bank-details") {
    // Send user to next page
    res.redirect(
      "/iteration-5/5-0/which-payments-do-you-need-to-change-bank-details-for"
    );
  } else {
    // Inactive
    res.redirect("#");
  }
});

router.post(
  "/iteration-5/5-0/which-payments-do-you-need-to-change-bank-details-for",
  function (req, res) {
    // Make a variable and give it the value from 'which-payments-do-you-need-to-change-bank-details-for'
    var whichPaymentDoYouNeedToChangeBankDetailsFor =
      req.session.data["which-payments-do-you-need-to-change-bank-details-for"];

    // Check whether the variable matches a condition
    if (whichPaymentDoYouNeedToChangeBankDetailsFor == "benefits-only") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/which-benefits-do-you-get");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post("/iteration-5/5-0/which-benefits-do-you-get", function (req, res) {
  // Make a variable and give it the value from 'which-benefits-do-you-get'
  var whichBenefitsDoYouGet = req.session.data["which-benefits-do-you-get"];

  // Check whether the variable matches a condition
  if (whichBenefitsDoYouGet == "My benefit isn’t in the list") {
    // Send user to next page
    res.redirect("/iteration-5/5-0/ineligible");
  } else {
    // Inactive
    res.redirect(
      "/iteration-5/5-0/changing-the-account-we-pay-your-money-into"
    );
  }
});

router.post(
  "/iteration-5/5-0/changing-the-account-we-pay-your-money-into",
  function (req, res) {
    // Make a variable and give it the value from 'are-your-accounts-in-the-uk'
    var changingTheAccountWePayYourMoneyInto =
      req.session.data["are-your-accounts-in-the-uk"];

    // Check whether the variable matches a condition
    if (changingTheAccountWePayYourMoneyInto == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5/5-0/are-you-expecting-a-payment-in-the-next-six-working-days"
      );
    } else {
      // Inactive
      res.redirect(
        "/iteration-5/5-0/you-can-only-use-this-service-if-your-accounts-in-uk"
      );
    }
  }
);

router.post(
  "/iteration-5/5-0/benefits-you-need-to-change",
  function (req, res) {
    // Make a variable and give it the value from 'how-do-you-need-your-benefits-to-be-paid'
    var howDoYouNeedYourBenefitsToBePaid =
      req.session.data["how-do-you-need-your-benefits-to-be-paid"];

    // Check whether the variable matches a condition
    if (
      howDoYouNeedYourBenefitsToBePaid ==
      "Pay my benefits into one bank account"
    ) {
      // Send user to next page
      res.redirect("/iteration-5/5-0/before-you-change-account-details");
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5/5-0/before-you-change-account-details",
  function (req, res) {
    // Make a variable and give it the value from 'before-you-change-account-details'
    var beforeYouChangeAccountDetails =
      req.session.data["before-you-change-account-details"];

    // Check whether the variable matches a condition
    if (beforeYouChangeAccountDetails == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5/5-0/enter-your-bank-building-society-or-credit-union-account-details"
      );
    } else {
      // Inactive
      res.redirect("#");
    }
  }
);

router.post(
  "/iteration-5/5-0/are-you-expecting-a-payment-in-the-next-six-working-days",
  function (req, res) {
    // Make a variable and give it the value from 'are-you-expecting-a-payment-in-the-next-six-working-days'
    var areYouExpectingaPaymentInTheNextSixWorkingDays =
      req.session.data[
        "are-you-expecting-a-payment-in-the-next-six-working-days"
      ];

    // Check whether the variable matches a condition
    if (areYouExpectingaPaymentInTheNextSixWorkingDays == "yes") {
      // Send user to next page
      res.redirect(
        "/iteration-5/5-0/payment-in-progress/you-can-use-this-service-detailed"
      );
    } else if (areYouExpectingaPaymentInTheNextSixWorkingDays == "no") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/you-can-use-this-service-simple");
    } else {
      // Inactive
      res.redirect("/iteration-5/5-0/contact-us");
    }
  }
);

router.post(
  "/iteration-5/5-0/payment-in-progress/you-can-use-this-service-detailed",
  function (req, res) {
    // Make a variable and give it the value from 'you-can-use-this-service-detailed'
    var youCanUseThisServiceDetailed =
      req.session.data["you-can-use-this-service-detailed"];

    // Check whether the variable matches a condition
    if (youCanUseThisServiceDetailed == "yes") {
      // Send user to next page
      res.redirect("/iteration-5/5-0/payment-in-progress/customer-view");
    } else {
      // Inactive
      res.redirect(
        "/iteration-5/5-0/payment-in-progress/contact-us-to-change-account-details"
      );
    }
  }
);

// e1

var filenames = [];
var benefitsChosen = [];
var evidenceType = [];

router.post("/round-5/e1/start-answer", function (req, res) {
  filenames = [];
  benefitsChosen = [];
  evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];

  // benefits = [];
  // req.session.data.benefits = benefits;

  res.redirect("/round-5/e1/have-you-been-contacted");
});

router.post("/round-5/e1/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e1/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e1/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e1/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e1/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e1/national-insurance-number");
  }
});

router.post("/round-5/e1/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  res.redirect("/round-5/e1/upload-summary");
});

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e1/upload-summary");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e1/upload-summary");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e1/upload-summary");
  }
);

router.post("/round-5/e1/evidence-type", function (req, res) {
  var benefit = req.session.data["yourBenefits"];
  benefitsChosen.push(benefit);
  req.session.data.benefitsChosen = benefitsChosen;

  res.redirect("/round-5/e1/evidence-type");
});

router.post(
  "/round-5/e1/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e1/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e1/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e1/upload-more-evidence/evidence-type-4");
  }
);

router.post("/round-5/e1/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];
  evidenceType.push(form);
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e1/how-to-send-evidence");
});

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e1/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e1/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e1/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e1/how-to-send-evidence");
  }
);

router.all("/round-5/e1/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e1/upload-summary");
});

// e2

router.post("/round-5/e2/start-answer", function (req, res) {
  filenames = [];
  benefitsChosen = [];
  evidenceType = [];
  req.session.data.benefitsArray = filenames;
  req.session.data.evidenceType = evidenceType;
  req.session.data.benefitsChosen = benefitsChosen;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];

  res.redirect("/round-5/e2/have-you-been-contacted");
});

router.post("/round-5/e2/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e2/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e2/declaration");
  }
});

router.post("/round-5/e2/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  res.redirect("/round-5/e2/upload-summary");
});

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e2/upload-summary");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e2/upload-summary");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e2/upload-summary");
  }
);

router.post("/round-5/e2/evidence-type", function (req, res) {
  var benefit = req.session.data["yourBenefits"];
  benefitsChosen.push(benefit);
  req.session.data.benefitsChosen = benefitsChosen;

  res.redirect("/round-5/e2/evidence-type");
});

router.post(
  "/round-5/e2/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e2/upload-more-evidence/evidence-type-4");
  }
);

router.post("/round-5/e2/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];
  evidenceType.push(form);
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e2/benefits");
});

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e2/benefits");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e2/benefits");
  }
);

router.post(
  "/round-5/e2/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e2/benefits");
  }
);

router.all("/round-5/e2/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e2/upload-summary");
});

// e3

router.post("/round-5/e3/start-answer", function (req, res) {
  filenames = [];
  benefitsChosen = [];
  evidenceType = [];
  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];

  res.redirect("/round-5/e3/have-you-been-contacted");
});

router.post("/round-5/e3/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e3/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e3/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e3/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e3/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e3/national-insurance-number");
  }
});

router.post("/round-5/e3/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  res.redirect("/round-5/e3/upload-summary");
});

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e3/upload-summary");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e3/upload-summary");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e3/upload-summary");
  }
);

router.post("/round-5/e3/evidence-type", function (req, res) {
  var benefit = req.session.data["yourBenefits"];
  benefitsChosen.push(benefit);
  req.session.data.benefitsChosen = benefitsChosen;

  res.redirect("/round-5/e3/evidence-type");
});

router.post(
  "/round-5/e3/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e3/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e3/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e3/upload-more-evidence/evidence-type-4");
  }
);

router.post("/round-5/e3/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];
  evidenceType.push(form);
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e3/how-to-send-evidence");
});

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e3/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e3/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e3/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e3/how-to-send-evidence");
  }
);

router.all("/round-5/e3/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e3/upload-summary");
});

// e4

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/round-5/e4/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["yourEvidence"];
  delete req.session.data["file-upload"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  res.redirect("/round-5/e4/have-you-been-contacted");
});

// router.get("/round-5/e4/benefits", function (req, res) {
//   console.log("fdfdf");
//   if (req.session.data.currentFiles.length > 0) {
//     currentFiles = [];
//     req.session.data.currentFiles = currentFiles;

//     benefits = [];
//     req.session.data.benefits = benefits;
//   }
// });

router.post("/round-5/e4/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  benefits.push(obj);

  console.log({ benefits });

  res.redirect("/round-5/e4/evidence-type");
});

router.post("/round-5/e4/upload-evidence-type", function (req, res) {
  var form = req.session.data["yourEvidence"];

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );

  benefits[index] = {
    ...benefits[index],
    evidenceType: form,
  };

  console.log({ benefits });

  res.redirect("/round-5/e4/how-to-send-evidence");
});

router.post("/round-5/e4/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  filenames.push(fileName);
  req.session.data.benefitsArray = filenames;

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );
  benefits[index].files.push(fileName);

  currentFiles.push(fileName);
  req.session.data.currentFiles = currentFiles;

  console.log(benefits);

  req.session.data.benefits = benefits;

  console.log(JSON.stringify(req.session.data.benefits));

  res.redirect("/round-5/e4/upload-table");
});

router.post("/round-5/e4/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-5/e4/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-5/e4/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-5/e4/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-5/e4/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-5/e4/national-insurance-number");
  }
});

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e4/upload-table");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e4/upload-table");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-5/e4/upload-table");
  }
);

router.post("/round-5/e4/how-to-send-evidence", function (req, res) {
  console.log("session data: " + JSON.stringify(req.session.data));

  res.redirect("/round-5/e4/how-to-send-evidence");
});

router.post(
  "/round-5/e4/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e4/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e4/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-5/e4/upload-more-evidence/evidence-type-4");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e4/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e4/how-to-send-evidence");
  }
);

router.post(
  "/round-5/e4/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-5/e4/how-to-send-evidence");
  }
);

router.all("/round-5/e4/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e4/upload-summary");
});

// Preferences - customer view

router.post(
  "/preferences/customer-view/language/language-selection",
  function (req, res) {
    res.redirect("/preferences/customer-view/language/confirm-your-changes");
  }
);

router.post(
  "/preferences/customer-view/language/confirm-your-changes",
  function (req, res) {
    req.session.data.SelectLanguageSET = req.session.data.SelectLanguage;
    res.redirect("/preferences/customer-view/language/updated-language");
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-speak-to-you/speaking-selection",
  function (req, res) {
    var HowWeSpeakToYou = req.session.data["HowWeSpeakToYou"];

    if (HowWeSpeakToYou == "Textphone for the deaf and hard of hearing") {
      // Send user to contact us page
      res.redirect("confirm-your-changes");

      // Check if user selected no on multi address page
    } else {
      res.redirect("confirm-your-changes");
    }
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-speak-to-you/confirm-your-changes-answer",
  function (req, res) {
    req.session.data.HowWeSpeakToYouConfirmed =
      req.session.data.HowWeSpeakToYou;
    res.redirect(
      "/preferences/customer-view/contact-preferences/how-we-speak-to-you/updated-speaking-method"
    );
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-write-to-you/writing-selection",
  function (req, res) {
    res.redirect(
      "/preferences/customer-view/contact-preferences/how-we-write-to-you/confirm-your-changes"
    );
  }
);

router.post(
  "/preferences/customer-view/contact-preferences/how-we-write-to-you/confirm-your-changes",
  function (req, res) {
    req.session.data.HowWeWriteToYouSET = req.session.data.HowWeWriteToYou;
    res.redirect(
      "/preferences/customer-view/contact-preferences/how-we-write-to-you/updated-writing-method"
    );
  }
);

// Preferences - agent view

router.post(
  "/preferences-agent/agent-view/language/language-selection",
  function (req, res) {
    res.redirect("/preferences-agent/agent-view/language/confirm-your-changes");
  }
);

router.post(
  "/preferences-agent/agent-view/language/confirm-your-changes",
  function (req, res) {
    req.session.data.SelectLanguageSET = req.session.data.SelectLanguage;
    res.redirect("/preferences-agent/agent-view/language/updated-language");
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-speak-to-you/speaking-selection",
  function (req, res) {
    var HowWeSpeakToYou = req.session.data["HowWeSpeakToYou"];

    if (HowWeSpeakToYou == "Textphone for the deaf and hard of hearing") {
      // Send user to contact us page
      res.redirect("confirm-your-changes");

      // Check if user selected no on multi address page
    } else {
      res.redirect("confirm-your-changes");
    }
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-speak-to-you/confirm-your-changes-answer",
  function (req, res) {
    req.session.data.HowWeSpeakToYouConfirmed =
      req.session.data.HowWeSpeakToYou;
    res.redirect(
      "/preferences-agent/agent-view/contact-preferences-agent/how-we-speak-to-you/updated-speaking-method"
    );
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/writing-selection",
  function (req, res) {
    res.redirect(
      "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/confirm-your-changes"
    );
  }
);

router.post(
  "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/confirm-your-changes",
  function (req, res) {
    req.session.data.HowWeWriteToYouSET = req.session.data.HowWeWriteToYou;
    res.redirect(
      "/preferences-agent/agent-view/contact-preferences-agent/how-we-write-to-you/updated-writing-method"
    );
  }
);

// e5

// var filenames = [];
// var benefitsChosen = [];
// var evidenceType = [];

router.post("/round-8/e5/start-answer", function (req, res) {
  // filenames = [];
  // benefitsChosen = [];
  // evidenceType = [];
  // req.session.data.benefitsArray = filenames;
  // req.session.data.benefitsChosen = benefitsChosen;
  // req.session.data.evidenceType = evidenceType;
  delete req.session.data["query"];
  delete req.session.data["add-another-evidence"];
  delete req.session.data["evidenceType"];
  delete req.session.data["file-upload"];
  delete req.session.data["remainingUploadBalance"];
  delete req.session.data["uploadLimit"];
  delete req.session.data["fileToDelete"];
  delete req.session.data["benefitsArray"];

  benefits = [];
  req.session.data.benefits = benefits;

  currentFiles = [];
  req.session.data.currentFiles = currentFiles;

  req.session.data.uploadLimit = 100;

  res.redirect("/round-8/e5/have-you-been-contacted");
});

// router.get("/round-8/e5/benefits", function (req, res) {
//   console.log("fdfdf");
//   if (req.session.data.currentFiles.length > 0) {
//     currentFiles = [];
//     req.session.data.currentFiles = currentFiles;

//     benefits = [];
//     req.session.data.benefits = benefits;
//   }
// });

router.post("/round-8/e5/evidence-type", function (req, res) {
  const obj = {
    name: req.session.data["yourBenefits"],
    evidenceType: null,
    files: [],
  };

  req.session.data.benefits.push(obj);

  console.log({ benefits });

  res.redirect("/round-8/e5/evidence-type");
});

router.post("/round-8/e5/upload-evidence-type", function (req, res) {
  const evidenceType = req.session.data["evidenceType"];

  const index = benefits.findIndex(
    (benefit) => benefit.name === req.session.data["yourBenefits"]
  );

  benefits[index] = {
    ...benefits[index],
    evidenceType,
  };

  console.log({ benefits });

  res.redirect("/round-8/e5/how-to-send-evidence");
});

router.post("/round-8/e5/upload-evidence-form", function (req, res) {
  var fileName = req.session.data["file-upload"].replaceAll(" ", "");
  // filenames.push(fileName);
  // req.session.data.benefitsArray = filenames;

  // const index = benefits.findIndex(
  //   (benefit) => benefit.name === req.session.data["yourBenefits"]
  // );
  // benefits[index].files.push(fileName);

  // currentFiles.push(fileName);
  // req.session.data.currentFiles = currentFiles;

  // console.log(benefits);

  // req.session.data.benefits = benefits;

  // console.log(JSON.stringify(req.session.data.benefits));

  console.log("hello + " + JSON.stringify(req.session.data));

  req.session.data.benefits[0].files.push(fileName);

  res.redirect("/round-8/e5/upload-table");
});

router.get("/round-8/e5/are-you-sure", function (req, res) {
  const fileToDeleteIndex = parseInt(req.query["file"]) - 1;
  const fileToDelete = req.session.data.benefits[0].files[fileToDeleteIndex];
  console.log("file is : " + fileToDelete);

  res.render("./round-8/e5/are-you-sure.njk", { fileToDelete });
});

router.get("/round-8/e5/upload-table", function (req, res) {
  const fileToDelete = req.query["file"];
  req.session.data.benefits[0].files = [
    ...req.session.data.benefits[0].files,
  ].filter((fileName) => fileName !== fileToDelete);
  console.log("new files : " + req.session.data.benefits[0].files);

  res.render("./round-8/e5/upload-table.njk");
});

router.post("/round-8/e5/evidence-summary-answer", function (req, res) {
  var addAnotherEvidence = req.session.data["add-another-evidence"];
  req.session.data.benefitsArray = filenames;

  if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 1
  ) {
    // Send user to next page
    res.redirect("/round-8/e5/upload-more-evidence/benefits-2");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 2
  ) {
    res.redirect("/round-8/e5/upload-more-evidence/benefits-3");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 3
  ) {
    res.redirect("/round-8/e5/upload-more-evidence/benefits-4");
  } else if (
    addAnotherEvidence == "yes" &&
    req.session.data.benefitsArray.length === 4
  ) {
    res.redirect("/round-8/e5/no-more-uploads");
  } else {
    // Inactive
    res.redirect("/round-8/e5/national-insurance-number");
  }
});

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-form-2",
  function (req, res) {
    var fileName2 = req.session.data["file-upload-2"].replaceAll(" ", "");
    filenames.push(fileName2);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5/upload-table");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-form-3",
  function (req, res) {
    var fileName3 = req.session.data["file-upload-3"].replaceAll(" ", "");
    filenames.push(fileName3);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5/upload-table");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-form-4",
  function (req, res) {
    var fileName4 = req.session.data["file-upload-4"].replaceAll(" ", "");
    filenames.push(fileName4);
    req.session.data.benefitsArray = filenames;

    res.redirect("/round-8/e5/upload-table");
  }
);

router.post("/round-8/e5/how-to-send-evidence", function (req, res) {
  console.log("session data: " + JSON.stringify(req.session.data));

  res.redirect("/round-8/e5/how-to-send-evidence");
});

router.post(
  "/round-8/e5/upload-more-evidence/evidence-type-2",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-2"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-8/e5/upload-more-evidence/evidence-type-2");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/evidence-type-3",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-3"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-8/e5/upload-more-evidence/evidence-type-3");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/evidence-type-4",
  function (req, res) {
    var benefit = req.session.data["yourBenefits-4"];
    benefitsChosen.push(benefit);
    req.session.data.benefitsChosen = benefitsChosen;

    res.redirect("/round-8/e5/upload-more-evidence/evidence-type-4");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-type-2",
  function (req, res) {
    var form = req.session.data["yourEvidence-2"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-type-3",
  function (req, res) {
    var form = req.session.data["yourEvidence-3"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5/how-to-send-evidence");
  }
);

router.post(
  "/round-8/e5/upload-more-evidence/upload-evidence-type-4",
  function (req, res) {
    var form = req.session.data["yourEvidence-4"];
    evidenceType.push(form);
    req.session.data.evidenceType = evidenceType;

    res.redirect("/round-8/e5/how-to-send-evidence");
  }
);

router.all("/round-5/e5/remove-evidence-answer", function (req, res) {
  const index = filenames.indexOf(req.query.query);
  filenames.splice(index, 1);
  benefitsChosen.splice(index, 1);
  evidenceType.splice(index, 1);

  req.session.data.benefitsArray = filenames;
  req.session.data.benefitsChosen = benefitsChosen;
  req.session.data.evidenceType = evidenceType;

  res.redirect("/round-5/e5/upload-summary");
});
