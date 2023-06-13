package com.dealsapp.coupons_cart_mcs.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "WishList")
public class WishList {
	@Id
	private String wish_listId;
	private String couponId;
	private int coupons_price;
	private String coupons_name;
	private String coupons_desc;
	public String getOrderId() {
		return wish_listId;
	}
	public void setOrderId(String orderId) {
		this.wish_listId = orderId;
	}
	public String getCouponId() {
		return couponId;
	}
	public void setCouponId(String couponId) {
		this.couponId = couponId;
	}
	public int getCoupons_price() {
		return coupons_price;
	}
	public void setCoupons_price(int coupons_price) {
		this.coupons_price = coupons_price;
	}
	public String getCoupons_name() {
		return coupons_name;
	}
	public void setCoupons_name(String coupons_name) {
		this.coupons_name = coupons_name;
	}
	public String getCoupons_desc() {
		return coupons_desc;
	}
	public void setCoupons_desc(String coupons_desc) {
		this.coupons_desc = coupons_desc;
	}
	public WishList( String couponId, int coupons_price, String coupons_name, String coupons_desc) {
		super();
		this.wish_listId = wish_listId;
		this.couponId = couponId;
		this.coupons_price = coupons_price;
		this.coupons_name = coupons_name;
		this.coupons_desc = coupons_desc;
	}
	public WishList() {
		
	}

}
