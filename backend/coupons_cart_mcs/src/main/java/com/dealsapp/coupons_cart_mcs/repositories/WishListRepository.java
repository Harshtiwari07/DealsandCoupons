package com.dealsapp.coupons_cart_mcs.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dealsapp.coupons_cart_mcs.entity.WishList;

public interface WishListRepository extends MongoRepository<WishList, String> {

}
