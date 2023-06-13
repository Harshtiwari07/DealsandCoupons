package com.dealsapp.coupons_cart_mcs.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.dealsapp.coupons_cart_mcs.entity.CartItems;
import com.dealsapp.coupons_cart_mcs.wrapper.FinalList;

public interface CartItemsService {
	
	
	
	 public String addorder(  CartItems cartItems );
	 public List<FinalList> fetchAllOrders();
	 public FinalList update(FinalList finalList);
	 public ResponseEntity<Object> deleteById(String id);
	 public Map<String, Object> getAllOrderByPrice(int pageNo,int pageSize,String sortBy);
	 public String addWishlist(String coupons_id);
	 

}
