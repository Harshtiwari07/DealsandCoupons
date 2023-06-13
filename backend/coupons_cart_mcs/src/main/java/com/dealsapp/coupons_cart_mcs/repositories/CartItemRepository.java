package com.dealsapp.coupons_cart_mcs.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.dealsapp.coupons_cart_mcs.entity.CartItems;
import com.dealsapp.coupons_cart_mcs.wrapper.FinalList;


@Repository
public interface CartItemRepository extends MongoRepository<FinalList, String> {
	
	FinalList findByorderId(String orderId);
	
	

	

}
