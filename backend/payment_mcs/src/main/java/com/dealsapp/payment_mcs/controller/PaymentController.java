package com.dealsapp.payment_mcs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dealsapp.payment_mcs.entity.PaymentDetails;
import com.dealsapp.payment_mcs.service.PaymentService;

@RestController
@RequestMapping("/dopay")
public class PaymentController {
	
	@Autowired
    public PaymentService service;

    @PostMapping("/payment")
    public PaymentDetails doPayment(@RequestBody PaymentDetails payment){
        return service.doPay(payment);
    }

}
