package com.dealsapp.payment_mcs.service;

import com.dealsapp.payment_mcs.entity.PaymentDetails;

public interface PaymentService {

	PaymentDetails doPay(PaymentDetails payment);
	 

}
