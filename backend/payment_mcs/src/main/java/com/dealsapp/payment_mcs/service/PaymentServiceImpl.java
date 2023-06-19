package com.dealsapp.payment_mcs.service;

import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dealsapp.payment_mcs.entity.PaymentDetails;
import com.dealsapp.payment_mcs.repositories.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService {
	
	@Autowired
	 private PaymentRepository repository;
	
	 public PaymentDetails doPay(PaymentDetails payment){
	        payment.setPaymentStatus(paymentStatus());
	        payment.setTxId(UUID.randomUUID().toString());
	        return repository.save(payment);
	    }

	    private String paymentStatus(){
	    	
	        return new Random().nextBoolean()?"success":"failure";
	    }

}
