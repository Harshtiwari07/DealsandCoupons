package com.dealsapp.catalogue_mcs.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dealsapp.catalogue_mcs.entity.Coupons;


public interface CatalogueRepository extends MongoRepository<Coupons, String> {
	
	List<Optional<Coupons>> findByCategory(String category);

	List<Optional<Coupons>> findByCompanyName(String companyName);
	
	Coupons findByCouponId(String couponId);

}
