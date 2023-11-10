$(document).ready(function () {
    $('#pay-button').on('click', function () {
        let buyerName = $('#buyer-name').val();
        let buyerEmail = $('#buyer-email').val();
        let shippingStreet = $('#shipping-street').val();
        let cardNumber = $('#card-number').val();
        let expirationDate = $('#expiration-date').val();
        let cvv = $('#cvv').val();
       const expir = function formatExpirationDate(expirationDate) {
    const month = expirationDate.substring(0, 2);
    const year = expirationDate.substring(2);
    return `${month}/${year}`;
}

          
        let requestData = {
            "language": "es",
            "command": "SUBMIT_TRANSACTION",
            "merchant": {
                "apiLogin": "pRRXKOl8ikMmt9u",
                "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
            },
            "transaction": {
                "order": {
                    "accountId": "512321",
                    "referenceCode": "PRODUCT_TEST_2021-06-23T19:59:43.229Z",
                    "description": "Payment test description",
                    "language": "es",
                    "signature": "1d6c33aed575c4974ad5c0be7c6a1c87",
                    "notifyUrl": "http://www.payu.com/notify",
                    "additionalValues": {
                        "TX_VALUE": {
                            "value": 65000,
                            "currency": "COP"
                        },
                        "TX_TAX": {
                            "value": 10378,
                            "currency": "COP"
                        },
                        "TX_TAX_RETURN_BASE": {
                            "value": 54622,
                            "currency": "COP"
                        }
                    },
                    "buyer": {
                        "merchantBuyerId": "1",
                        "fullName": "First name and second buyer name",
                        "emailAddress": "buyer_test@test.com",
                        "contactPhone": "7563126",
                        "dniNumber": "123456789",
                        "shippingAddress": {
                            "street1": "Cr 23 No. 53-50",
                            "street2": "5555487",
                            "city": "Bogotá",
                            "state": "Bogotá D.C.",
                            "country": "CO",
                            "postalCode": "000000",
                            "phone": "7563126"
                        }
                    },
                    "shippingAddress": {
                        "street1": "Cr 23 No. 53-50",
                        "street2": "5555487",
                        "city": "Bogotá",
                        "state": "Bogotá D.C.",
                        "country": "CO",
                        "postalCode": "0000000",
                        "phone": "7563126"
                    }
                },
                "payer": {
                    "merchantPayerId": "1",
                    "fullName": "First name and second payer name",
                    "emailAddress": "payer_test@test.com",
                    "contactPhone": "7563126",
                    "dniNumber": "5415668464654",
                    "billingAddress": {
                        "street1": "Cr 23 No. 53-50",
                        "street2": "125544",
                        "city": "Bogotá",
                        "state": "Bogotá D.C.",
                        "country": "CO",
                        "postalCode": "000000",
                        "phone": "7563126"
                    }
                },
                "creditCard": {
                    "number": cardNumber,
                    "securityCode": cvv,
                    "expirationDate": expir,
                    "name": "APPROVED"
                },
                "extraParameters": {
                    "INSTALLMENTS_NUMBER": 1
                },
                "type": "AUTHORIZATION_AND_CAPTURE",
                "paymentMethod": "VISA",
                "paymentCountry": "CO",
                "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
                "ipAddress": "127.0.0.1",
                "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
                "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0",
                "threeDomainSecure": {
                    "embedded": false,
                    "eci": "01",
                    "cavv": "AOvG5rV058/iAAWhssPUAAADFA==",
                    "xid": "Nmp3VFdWMlEwZ05pWGN3SGo4TDA=",
                    "directoryServerTransactionId": "00000-70000b-5cc9-0000-000000000cb"
                }
            },
            "test": true
        };

        console.log("Datos de solicitud:", JSON.stringify(requestData));

        $.ajax({
            url: 'http://localhost:3001/pagar',
            method: 'POST',
            data: JSON.stringify(requestData),
            contentType: 'application/json',
            success: function (response) {
              console.log("Respuesta exitosa:", response);
            },
            error: function (xhr, status, error) {
              console.error("Error en la solicitud:", status, error);
              console.log(xhr.responseText);
            }
          });
          
    });
});