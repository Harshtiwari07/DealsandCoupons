package com.dealsapp.coupons_cart_mcs.entity;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


/**
 *
 * This class is used to take the inputs from Coupons Cart Microservie
 * @CreatedOn 29/08/2022
 * @UpdatedOn 01/09/2022
 *
 */



public class CartItems {

	@Id
	private String orderId;
	private String couponId;
	private int coupons_qty;
	
	
	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getCouponId() {
		return couponId;
	}
	
	public void setCouponId(String couponId) {
		this.couponId = couponId;
	}

	public int getCoupons_qty() {
		return coupons_qty;
	}


	public void setCoupons_qty(int coupons_qty) {
		this.coupons_qty = coupons_qty;
	}
	
	
	



	public CartItems(String orderId, String couponId, int coupons_qty) {
		super();
		this.orderId = orderId;
		this.couponId = couponId;
		this.coupons_qty = coupons_qty;
	}

	public CartItems() {
	}

	
	

	
}