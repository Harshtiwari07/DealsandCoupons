package com.dealsapp.payment_mcs.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dealsapp.payment_mcs.entity.PaymentDetails;

public interface PaymentRepository extends MongoRepository<PaymentDetails, Integer> {

}
