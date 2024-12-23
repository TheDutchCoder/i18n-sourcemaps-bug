import { getRenterTotalAmount } from '~/lib/financial'

const financialMock = {
  "BookingId":8120,
  "MinimumDailyServiceFeeMotorHome":15,
  "MinimumDailyServiceFeeRVCottage":10,
  "MinimumDailyServiceFeeTravelTrailer":10,
  "OwnerServiceFeePercentage":0.37,
  "RenterServiceFeePercentage":0.1,
  "OwnerId":1,
  "RenterId":3,
  "RentalType":"MotorHome",
  "Status":"Invoice",
  "TaxRules":[{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"AddOns",
  "Id":100370,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"Insurance",
  "Id":100371,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"Roadside",
  "Id":100372,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"RenterServiceFee",
  "Id":100373,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"RenterServiceFee",
  "Id":100374,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Insurance",
  "Id":100375,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Roadside",
  "Id":100376,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"RentalAmount",
  "Id":100377,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Owner",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"OwnerServiceFee",
  "Id":100378,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Cleaning",
  "Id":100379,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Closeout",
  "Id":100380,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"}],
  "NightlyRoadsideRate":18,
  "NightlyInsuranceRate":39.99,
  "NightlyInsuranceRateStandard":0,
  "NightlyInsuranceRatePremium":0,
  "NightlyInsuranceCost":14.87,
  "InsurancePricingStrategy":"NightlyTieredRate",
  "InsuranceProtectionLevel":"Standard",
  "SecurityDepositFee":0,
  "DeductibleAmount":2000,
  "DeductibleAmountStandard":2000,
  "DeductibleAmountPremium":1000,
  "StripeCustomerId":"cus_LxcdJ2O6ACcHja",
  "StripeOwnerAccountId":null,
  "StripePaymentMethodId":null,
  "Nights":[{"Id":100500,
  "BookingId":0,
  "Year":2023,
  "Month":6,
  "Day":11,
  "RentalFee":180,
  "PreDiscountRentalFee":180,
  "InsuranceFee":39.99,
  "InsuranceCost":14.87,
  "ExtraInsuranceFee":0,
  "DateTime":"2023-06-11T00:00:00-04:00",
  "AddOnFees":[]},{"Id":100501,
  "BookingId":0,
  "Year":2023,
  "Month":6,
  "Day":12,
  "RentalFee":180,
  "PreDiscountRentalFee":180,
  "InsuranceFee":39.99,
  "InsuranceCost":14.87,
  "ExtraInsuranceFee":0,
  "DateTime":"2023-06-12T00:00:00-04:00",
  "AddOnFees":[]}],
  "AddOns":[{"Id":5324,
  "Name":"Cleaning fee",
  "PricePerItem":0,
  "IsDaily":false,
  "Quantity":1,
  "IdInRV":0,
  "AllowedAddonId":null,
  "Slug":null,
  "AddOnType":"CleaningFee",
  "TotalAmount":0,
  "FinancialId":8120},{"Id":5327,
  "Name":"Custom Add-on total",
  "PricePerItem":60,
  "IsDaily":false,
  "Quantity":1,
  "IdInRV":0,
  "AllowedAddonId":null,
  "Slug":"custom_total",
  "AddOnType":"CustomTotal",
  "TotalAmount":60,
  "FinancialId":8120}],
  "Country":"CA",
  "OneTimeAddOnFees":[{"Id":101179,
  "BookingId":8120,
  "AddOnId":5324,
  "Amount":0,
  "NightId":null},{"Id":101186,
  "BookingId":8120,
  "AddOnId":5327,
  "Amount":60,
  "NightId":null}],
  "InsuranceClaims":[],
  "RenterAdminCharges":[],
  "RenterAdminRefunds":[],
  "OwnerAdminPayouts":[],
  "OwnerDebts":[],
  "OwnerPayoutHolds":[],
  "FailedStripePayments":[],
  "Payments":[],
  "StripeServiceFeeCharges":[],
  "Refunds":[],
  "StripeServiceFeeRefunds":[],
  "PaymentReductions":[],
  "Payouts":[],
  "PayoutReversals":[],
  "Credit":[],
  "CreditConsumptions":[],
  "CreditReductions":[],
  "OwnerSalesTaxRules":[],
  "OwnerTaxRules":[{"BookingId":8120,
  "TaxRuleType":"Owner",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"OwnerServiceFee",
  "Id":100378,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"}],
  "RenterTaxRules":[{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"AddOns",
  "Id":100370,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"Insurance",
  "Id":100371,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"Roadside",
  "Id":100372,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"GST",
  "Rate":0.05,
  "LineItem":"RenterServiceFee",
  "Id":100373,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"RenterServiceFee",
  "Id":100374,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Insurance",
  "Id":100375,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Roadside",
  "Id":100376,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"RentalAmount",
  "Id":100377,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Cleaning",
  "Id":100379,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"},{"BookingId":8120,
  "TaxRuleType":"Renter",
  "TaxCode":"PST",
  "Rate":0.07,
  "LineItem":"Closeout",
  "Id":100380,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"}],
  "USTaxRules":[],
  "TotalRefundableAmount":0,
  "OwnerPayoutTotal":256.83,
  "TotalAddOns":60,
  "TotalCloseouts":0,
  "TotalDamages":0,
  "TotalGenerators":0,
  "TotalInsuranceCosts":29.74,
  "TotalInsurances":79.98,
  "TotalMileage":0,
  "TotalNights":2,
  "TotalOthers":0,
  "TotalOwnerSalesTaxes":0,
  "TotalUSTaxes":0,
  "TotalOwnerSalesTaxRecognitions":0,
  "TotalOwnerServiceFee":155.4,
  "TotalOwnerTaxes":7.77,
  "TotalPayments":0,
  "TotalPayoutAmounts":256.83,
  "TotalPayouts":0,
  "TotalPayoutReversals":0,
  "TotalReversiblePayoutAmount":256.83,
  "TotalRegularPayouts":0,
  "TotalRefunds":0,
  "TotalRentalAmount":360,
  "TotalPreDiscountRentalAmount":360,
  "TotalRentalPayments":0,
  "TotalRentalRefunds":0,
  "TotalRenterServiceFee":42,
  "TotalRenterTaxes":44.04,
  "TotalRoadsides":0,
  "TotalCleanings":0,
  "TotalSecurityDepositPayments":0,
  "TotalSecurityDepositRefunds":0,
  "TotalSecurityDepositPaymentReductions":0,
  "TotalSecurityDeposits":1000,
  "TotalStripeServiceFeeAmount":0,
  "TotalStripeServiceFees":0,
  "TotalGoodwillRefunds":0,
  "TotalRenterAdminRefunds":0,
  "TotalRenterAdminCharges":0,
  "TotalOwnerAdminPayouts":0,
  "TotalOwnerDebts":0,
  "TotalPayoutHolds":0,
  "TotalRenterRefunds":0,
  "TotalDeductiblesCollected":0,
  "TotalDepositDeductible":0,
  "TotalUncollectableFunds":0,
  "TotalRenterCreditRefunded":0,
  "TotalPromotionalCreditRefunded":0,
  "TotalCreditRefunded":0,
  "TotalRenterCreditPayments":0,
  "TotalPromotionalCreditPayments":0,
  "TotalCreditPayments":0,
  "TotalReferralCredits":0,
  "TotalGMV":541.98,
  "TotalRenterRevenue":121.98,
  "TotalIncomeProtectionPayout":0,
  "TotalIncomeProtection":0,
  "TotalSecurityDepositPaid":0,
  "TotalRentalPaid":0,
  "OwnerPayoutOutstandingBalance":256.83,
  "RenterOutstandingBalance":586.02,
  "OwnerSalesTaxOutstandingBalance":0,
  "TotalPaid":0,
  "SecurityDepositBalance":0,
  "RenterTotal":586.02,
  "OwnerTotal":256.83,
  "AmountDue":146.5,
  "TransactionHistories":[],
  "RenterUnusedCredits":[],
  "TotalUnusedCredits":0,
  "OwnerSalesTaxAmounts":[],
  "OwnerTaxAmounts":[{"Id":100378,
  "TaxCode":"GST",
  "Rate":0.05,
  "Amount":7.77}],
  "RenterTaxAmounts":[{"Id":-1,
  "TaxCode":"PST",
  "Rate":0.07,
  "Amount":37.94},{"Id":-1,
  "TaxCode":"GST",
  "Rate":0.05,
  "Amount":6.1}],
  "USTaxAmounts":[],
  "PayLaterOn":"2023-05-05T00:00:00-04:00",
  "SecurityDepositOn":"2023-06-08T00:00:00-04:00",
  "SecurityDepositTaken":null,
  "SecurityDepositFailed":null,
  "DepositAmount":146.5,
  "CreditsToBeApplied":0,
  "PayToReserve":146.5,
  "RemainingAmount":439.52,
  "CreditsToBeAppliedLater":0,
  "PayLater":439.52,
  "Discount":0,
  "RemainingCreditsToBeApplied":0,
  "CreditsApplied":0,
  "OwnerReferralCredits":0,
  "RenterReferralCredits":0,
  "RenterDiscountedTotal":586.02,
  "FullPaymentAmountOnCancel":0,
  "SecurityDepositAmount":1000,
  "PendingRenterRefund":null,
  "Id":0,
  "Timestamp":"2023-04-06T13:14:09.3982073-04:00"
};

describe('Library - Financial', () => {
  test('getRenterTotalAmount', () => {
    expect(getRenterTotalAmount(financialMock)).toBe(586.02)
  })
})
