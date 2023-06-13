package com.dealsapp.catalogue_mcs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dealsapp.catalogue_mcs.entity.Coupons;
import com.dealsapp.catalogue_mcs.service.CatalogueService;



@RestController
@RequestMapping("/catalogue")
public class CatalogueController {
	@Autowired
	CatalogueService catalogueService;

	
	
	@PostMapping("/add")
	public String addCoupon(@RequestBody Coupons deal) {
		 
		return catalogueService.save(deal);
	}

	/**
	 * To get catalog according to id
	 */
	@GetMapping("/find/id/{couponId}")
	public Optional<Coupons> searchCouponByCouponId(@PathVariable("couponId") String couponId) {
		Optional<Coupons> coupons = catalogueService.findByCouponId(couponId);
		return coupons;
	}
	
	/**
	 * To get catalog according to category

	 */
	@GetMapping("/find/category/{category}")
	public List<Optional<Coupons>> searchCouponByCategory(@PathVariable("category") String category) {
		List<Optional<Coupons>> coupons = catalogueService.findByCategory(category);
		return coupons;
	}
	
	/**
	 * To get catalog according to company name
	 */
	@GetMapping("/find/companyName/{companyName}")
	public List<Optional<Coupons>> searchCouponByCompanyName(@PathVariable("companyName") String companyName) {
		List<Optional<Coupons>> coupons = catalogueService.findByCompanyName(companyName);
		return coupons;
	}

	/**
	 * This will delete the coupons according to the provided id
	 */
	@DeleteMapping("/delete/id/{couponId}")
	public String deleteCouponBycouponId(@PathVariable("couponId") String couponId) {
		String result = catalogueService.deleteById(couponId);
		return result;
	}
	
	/**
	 * This will delete the coupons according to the provided category
	 */
	@DeleteMapping("/delete/category/{category}")
	public String deleteCouponByCategory(@PathVariable("category") String category) {
		String result = catalogueService.deleteByCategory(category);
		return result;
	}
	
	/**
	 * This will delete the coupons according to the provided company name.
	 */
	@DeleteMapping("/delete/companyName/{companyName}")
	public String deleteCouponByCompanyName(@PathVariable("companyName") String companyName) {
		String result = catalogueService.deleteByCompanyName(companyName);
		return result;
	}

	/**
	 * This will show all the coupons in the catalog
	 */
	@GetMapping("/findall")
	public List<Coupons> fetchAllProducts(){
		return  catalogueService.fetchAllOrders();
	}

	/**
	 * This will update the Deals details according to id
	 */
	
	@PutMapping("/update/id/{id}")
	public Coupons updateCoupon(@RequestBody Coupons deal) {
		return catalogueService.update(deal);
	}
	
	

}
